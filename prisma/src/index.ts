import { GraphQLServer, Options } from 'graphql-yoga';
import { formatError } from 'apollo-errors';
import * as Stripe from 'stripe';
import { mailer } from './third-party/nodemailer';

//import resolvers from './resolvers';
import { ultimateSchema, db,resolvers } from './resolv';
import {
  createChargeAndUpdateOrder,
  updateOrder,
} from './resolvers/Mutation/stripe';

const options: Options = {
  port: 4000,
  formatError,
  playground: '/playground',
  debug: true
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
/*
export const db = new Prisma({
  fragmentReplacements,
  endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
  secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
  debug: true, // log all GraphQL queries & mutations
});*/


export const server = new GraphQLServer({
  //typeDefs: './prisma/src/schema.graphql',
  //resolvers,
  schema: ultimateSchema,
  context: req => ({
    ...req,
    db,
    mailer,
    stripe,
  }),
});

server.start(options, () => console.log(`Server is running on http://localhost:4000`));

const rawBodyParser = require('body-parser').raw({ type: '*/*' });

server.express.post('/stripe', rawBodyParser, async (req, res, next) => {
  let data;
  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return next();
    }
    // Extract the object from the event.
    data = event.data;
  } else {
    throw new Error('Please configure STRIPE_WEBHOOK_SECRET in .env file');
  }

  const object = data.object;

  // Monitor `source.chargeable` events *for 3DSecure sources only*.
  if (
    object.object === 'source' &&
    object.status === 'chargeable' &&
    object.type === 'three_d_secure'
  ) {
    const source = object;
    console.log(`🔔  Webhook received! The source ${source.id} is chargeable.`);

    await createChargeAndUpdateOrder(
      {
        sourceId: source.id,
        amount: source.metadata.amount,
        email: source.metadata.email,
        orderId: source.metadata.orderId,
        userId: source.metadata.userId,
      }, db);
  }

  // Monitor `source.failed` events.
  if (object.object === 'source' && object.status === 'failed') {
    const source = object;
    await updateOrder(source.metadata.orderId, 'FAILED');
  }

  next();
});
