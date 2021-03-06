import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    brands: <T = Brand[]>(args: { where?: BrandWhereInput, orderBy?: BrandOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    attributes: <T = Attribute[]>(args: { where?: AttributeWhereInput, orderBy?: AttributeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    selectedOptions: <T = SelectedOption[]>(args: { where?: SelectedOptionWhereInput, orderBy?: SelectedOptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orders: <T = Order[]>(args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderableProducts: <T = OrderableProduct[]>(args: { where?: OrderableProductWhereInput, orderBy?: OrderableProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    optionValues: <T = OptionValue[]>(args: { where?: OptionValueWhereInput, orderBy?: OptionValueOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    products: <T = Product[]>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderLineItems: <T = OrderLineItem[]>(args: { where?: OrderLineItemWhereInput, orderBy?: OrderLineItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    variants: <T = Variant[]>(args: { where?: VariantWhereInput, orderBy?: VariantOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    shops: <T = Shop[]>(args: { where?: ShopWhereInput, orderBy?: ShopOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userAdmins: <T = UserAdmin[]>(args: { where?: UserAdminWhereInput, orderBy?: UserAdminOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resorts: <T = Resort[]>(args: { where?: ResortWhereInput, orderBy?: ResortOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categories: <T = Category[]>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    options: <T = Option[]>(args: { where?: OptionWhereInput, orderBy?: OptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brand: <T = Brand | null>(args: { where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    attribute: <T = Attribute | null>(args: { where: AttributeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    selectedOption: <T = SelectedOption | null>(args: { where: SelectedOptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    order: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderableProduct: <T = OrderableProduct | null>(args: { where: OrderableProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    optionValue: <T = OptionValue | null>(args: { where: OptionValueWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderLineItem: <T = OrderLineItem | null>(args: { where: OrderLineItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    variant: <T = Variant | null>(args: { where: VariantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    shop: <T = Shop | null>(args: { where: ShopWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userAdmin: <T = UserAdmin | null>(args: { where: UserAdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resort: <T = Resort | null>(args: { where: ResortWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    category: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    option: <T = Option | null>(args: { where: OptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    brandsConnection: <T = BrandConnection>(args: { where?: BrandWhereInput, orderBy?: BrandOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    attributesConnection: <T = AttributeConnection>(args: { where?: AttributeWhereInput, orderBy?: AttributeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    selectedOptionsConnection: <T = SelectedOptionConnection>(args: { where?: SelectedOptionWhereInput, orderBy?: SelectedOptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ordersConnection: <T = OrderConnection>(args: { where?: OrderWhereInput, orderBy?: OrderOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderableProductsConnection: <T = OrderableProductConnection>(args: { where?: OrderableProductWhereInput, orderBy?: OrderableProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    optionValuesConnection: <T = OptionValueConnection>(args: { where?: OptionValueWhereInput, orderBy?: OptionValueOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    orderLineItemsConnection: <T = OrderLineItemConnection>(args: { where?: OrderLineItemWhereInput, orderBy?: OrderLineItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    variantsConnection: <T = VariantConnection>(args: { where?: VariantWhereInput, orderBy?: VariantOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    shopsConnection: <T = ShopConnection>(args: { where?: ShopWhereInput, orderBy?: ShopOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userAdminsConnection: <T = UserAdminConnection>(args: { where?: UserAdminWhereInput, orderBy?: UserAdminOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resortsConnection: <T = ResortConnection>(args: { where?: ResortWhereInput, orderBy?: ResortOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categoriesConnection: <T = CategoryConnection>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    optionsConnection: <T = OptionConnection>(args: { where?: OptionWhereInput, orderBy?: OptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createBrand: <T = Brand>(args: { data: BrandCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAttribute: <T = Attribute>(args: { data: AttributeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSelectedOption: <T = SelectedOption>(args: { data: SelectedOptionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrder: <T = Order>(args: { data: OrderCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrderableProduct: <T = OrderableProduct>(args: { data: OrderableProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOptionValue: <T = OptionValue>(args: { data: OptionValueCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrderLineItem: <T = OrderLineItem>(args: { data: OrderLineItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createVariant: <T = Variant>(args: { data: VariantCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createShop: <T = Shop>(args: { data: ShopCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserAdmin: <T = UserAdmin>(args: { data: UserAdminCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createResort: <T = Resort>(args: { data: ResortCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCategory: <T = Category>(args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOption: <T = Option>(args: { data: OptionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBrand: <T = Brand | null>(args: { data: BrandUpdateInput, where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAttribute: <T = Attribute | null>(args: { data: AttributeUpdateInput, where: AttributeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSelectedOption: <T = SelectedOption | null>(args: { data: SelectedOptionUpdateInput, where: SelectedOptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrder: <T = Order | null>(args: { data: OrderUpdateInput, where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrderableProduct: <T = OrderableProduct | null>(args: { data: OrderableProductUpdateInput, where: OrderableProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOptionValue: <T = OptionValue | null>(args: { data: OptionValueUpdateInput, where: OptionValueWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrderLineItem: <T = OrderLineItem | null>(args: { data: OrderLineItemUpdateInput, where: OrderLineItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateVariant: <T = Variant | null>(args: { data: VariantUpdateInput, where: VariantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateShop: <T = Shop | null>(args: { data: ShopUpdateInput, where: ShopWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUserAdmin: <T = UserAdmin | null>(args: { data: UserAdminUpdateInput, where: UserAdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateResort: <T = Resort | null>(args: { data: ResortUpdateInput, where: ResortWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCategory: <T = Category | null>(args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOption: <T = Option | null>(args: { data: OptionUpdateInput, where: OptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBrand: <T = Brand | null>(args: { where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAttribute: <T = Attribute | null>(args: { where: AttributeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSelectedOption: <T = SelectedOption | null>(args: { where: SelectedOptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrder: <T = Order | null>(args: { where: OrderWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrderableProduct: <T = OrderableProduct | null>(args: { where: OrderableProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOptionValue: <T = OptionValue | null>(args: { where: OptionValueWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrderLineItem: <T = OrderLineItem | null>(args: { where: OrderLineItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteVariant: <T = Variant | null>(args: { where: VariantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteShop: <T = Shop | null>(args: { where: ShopWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUserAdmin: <T = UserAdmin | null>(args: { where: UserAdminWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteResort: <T = Resort | null>(args: { where: ResortWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCategory: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOption: <T = Option | null>(args: { where: OptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBrand: <T = Brand>(args: { where: BrandWhereUniqueInput, create: BrandCreateInput, update: BrandUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAttribute: <T = Attribute>(args: { where: AttributeWhereUniqueInput, create: AttributeCreateInput, update: AttributeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSelectedOption: <T = SelectedOption>(args: { where: SelectedOptionWhereUniqueInput, create: SelectedOptionCreateInput, update: SelectedOptionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrder: <T = Order>(args: { where: OrderWhereUniqueInput, create: OrderCreateInput, update: OrderUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrderableProduct: <T = OrderableProduct>(args: { where: OrderableProductWhereUniqueInput, create: OrderableProductCreateInput, update: OrderableProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOptionValue: <T = OptionValue>(args: { where: OptionValueWhereUniqueInput, create: OptionValueCreateInput, update: OptionValueUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrderLineItem: <T = OrderLineItem>(args: { where: OrderLineItemWhereUniqueInput, create: OrderLineItemCreateInput, update: OrderLineItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertVariant: <T = Variant>(args: { where: VariantWhereUniqueInput, create: VariantCreateInput, update: VariantUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertShop: <T = Shop>(args: { where: ShopWhereUniqueInput, create: ShopCreateInput, update: ShopUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUserAdmin: <T = UserAdmin>(args: { where: UserAdminWhereUniqueInput, create: UserAdminCreateInput, update: UserAdminUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertResort: <T = Resort>(args: { where: ResortWhereUniqueInput, create: ResortCreateInput, update: ResortUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCategory: <T = Category>(args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOption: <T = Option>(args: { where: OptionWhereUniqueInput, create: OptionCreateInput, update: OptionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBrands: <T = BatchPayload>(args: { data: BrandUpdateInput, where?: BrandWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAttributes: <T = BatchPayload>(args: { data: AttributeUpdateInput, where?: AttributeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySelectedOptions: <T = BatchPayload>(args: { data: SelectedOptionUpdateInput, where?: SelectedOptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrders: <T = BatchPayload>(args: { data: OrderUpdateInput, where?: OrderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrderableProducts: <T = BatchPayload>(args: { data: OrderableProductUpdateInput, where?: OrderableProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOptionValues: <T = BatchPayload>(args: { data: OptionValueUpdateInput, where?: OptionValueWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrderLineItems: <T = BatchPayload>(args: { data: OrderLineItemUpdateInput, where?: OrderLineItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyVariants: <T = BatchPayload>(args: { data: VariantUpdateInput, where?: VariantWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyShops: <T = BatchPayload>(args: { data: ShopUpdateInput, where?: ShopWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUserAdmins: <T = BatchPayload>(args: { data: UserAdminUpdateInput, where?: UserAdminWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyResorts: <T = BatchPayload>(args: { data: ResortUpdateInput, where?: ResortWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCategories: <T = BatchPayload>(args: { data: CategoryUpdateInput, where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOptions: <T = BatchPayload>(args: { data: OptionUpdateInput, where?: OptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBrands: <T = BatchPayload>(args: { where?: BrandWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAttributes: <T = BatchPayload>(args: { where?: AttributeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySelectedOptions: <T = BatchPayload>(args: { where?: SelectedOptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrders: <T = BatchPayload>(args: { where?: OrderWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrderableProducts: <T = BatchPayload>(args: { where?: OrderableProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOptionValues: <T = BatchPayload>(args: { where?: OptionValueWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrderLineItems: <T = BatchPayload>(args: { where?: OrderLineItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyVariants: <T = BatchPayload>(args: { where?: VariantWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyShops: <T = BatchPayload>(args: { where?: ShopWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserAdmins: <T = BatchPayload>(args: { where?: UserAdminWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyResorts: <T = BatchPayload>(args: { where?: ResortWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCategories: <T = BatchPayload>(args: { where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOptions: <T = BatchPayload>(args: { where?: OptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    brand: <T = BrandSubscriptionPayload | null>(args: { where?: BrandSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    attribute: <T = AttributeSubscriptionPayload | null>(args: { where?: AttributeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    selectedOption: <T = SelectedOptionSubscriptionPayload | null>(args: { where?: SelectedOptionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    order: <T = OrderSubscriptionPayload | null>(args: { where?: OrderSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    orderableProduct: <T = OrderableProductSubscriptionPayload | null>(args: { where?: OrderableProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    optionValue: <T = OptionValueSubscriptionPayload | null>(args: { where?: OptionValueSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    orderLineItem: <T = OrderLineItemSubscriptionPayload | null>(args: { where?: OrderLineItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    variant: <T = VariantSubscriptionPayload | null>(args: { where?: VariantSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    shop: <T = ShopSubscriptionPayload | null>(args: { where?: ShopSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    userAdmin: <T = UserAdminSubscriptionPayload | null>(args: { where?: UserAdminSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    resort: <T = ResortSubscriptionPayload | null>(args: { where?: ResortSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    category: <T = CategorySubscriptionPayload | null>(args: { where?: CategorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    option: <T = OptionSubscriptionPayload | null>(args: { where?: OptionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Brand: (where?: BrandWhereInput) => Promise<boolean>
  Attribute: (where?: AttributeWhereInput) => Promise<boolean>
  SelectedOption: (where?: SelectedOptionWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Order: (where?: OrderWhereInput) => Promise<boolean>
  OrderableProduct: (where?: OrderableProductWhereInput) => Promise<boolean>
  OptionValue: (where?: OptionValueWhereInput) => Promise<boolean>
  Product: (where?: ProductWhereInput) => Promise<boolean>
  OrderLineItem: (where?: OrderLineItemWhereInput) => Promise<boolean>
  Variant: (where?: VariantWhereInput) => Promise<boolean>
  Shop: (where?: ShopWhereInput) => Promise<boolean>
  UserAdmin: (where?: UserAdminWhereInput) => Promise<boolean>
  Resort: (where?: ResortWhereInput) => Promise<boolean>
  Category: (where?: CategoryWhereInput) => Promise<boolean>
  Option: (where?: OptionWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAttribute {
  count: Int!
}

type AggregateBrand {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateOption {
  count: Int!
}

type AggregateOptionValue {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderableProduct {
  count: Int!
}

type AggregateOrderLineItem {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateResort {
  count: Int!
}

type AggregateSelectedOption {
  count: Int!
}

type AggregateShop {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserAdmin {
  count: Int!
}

type AggregateVariant {
  count: Int!
}

type Attribute implements Node {
  id: ID!
  value: String!
  category(where: CategoryWhereInput): Category!
  shop(where: ShopWhereInput): Shop!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

"""A connection to a list of items."""
type AttributeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AttributeEdge]!
  aggregate: AggregateAttribute!
}

input AttributeCreateInput {
  value: String!
  category: CategoryCreateOneInput!
  shop: ShopCreateOneInput!
  products: ProductCreateManyWithoutAttributesInput
}

input AttributeCreateManyWithoutProductsInput {
  create: [AttributeCreateWithoutProductsInput!]
  connect: [AttributeWhereUniqueInput!]
}

input AttributeCreateWithoutProductsInput {
  value: String!
  category: CategoryCreateOneInput!
  shop: ShopCreateOneInput!
}

"""An edge in a connection."""
type AttributeEdge {
  """The item at the end of the edge."""
  node: Attribute!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AttributeOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AttributePreviousValues {
  id: ID!
  value: String!
}

type AttributeSubscriptionPayload {
  mutation: MutationType!
  node: Attribute
  updatedFields: [String!]
  previousValues: AttributePreviousValues
}

input AttributeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AttributeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AttributeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AttributeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AttributeWhereInput
}

input AttributeUpdateInput {
  value: String
  category: CategoryUpdateOneInput
  shop: ShopUpdateOneInput
  products: ProductUpdateManyWithoutAttributesInput
}

input AttributeUpdateManyWithoutProductsInput {
  create: [AttributeCreateWithoutProductsInput!]
  connect: [AttributeWhereUniqueInput!]
  disconnect: [AttributeWhereUniqueInput!]
  delete: [AttributeWhereUniqueInput!]
  update: [AttributeUpdateWithWhereUniqueWithoutProductsInput!]
  upsert: [AttributeUpsertWithWhereUniqueWithoutProductsInput!]
}

input AttributeUpdateWithoutProductsDataInput {
  value: String
  category: CategoryUpdateOneInput
  shop: ShopUpdateOneInput
}

input AttributeUpdateWithWhereUniqueWithoutProductsInput {
  where: AttributeWhereUniqueInput!
  data: AttributeUpdateWithoutProductsDataInput!
}

input AttributeUpsertWithWhereUniqueWithoutProductsInput {
  where: AttributeWhereUniqueInput!
  update: AttributeUpdateWithoutProductsDataInput!
  create: AttributeCreateWithoutProductsInput!
}

input AttributeWhereInput {
  """Logical AND on all given filters."""
  AND: [AttributeWhereInput!]

  """Logical OR on all given filters."""
  OR: [AttributeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AttributeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: String

  """All values that are not equal to given value."""
  value_not: String

  """All values that are contained in given list."""
  value_in: [String!]

  """All values that are not contained in given list."""
  value_not_in: [String!]

  """All values less than the given value."""
  value_lt: String

  """All values less than or equal the given value."""
  value_lte: String

  """All values greater than the given value."""
  value_gt: String

  """All values greater than or equal the given value."""
  value_gte: String

  """All values containing the given string."""
  value_contains: String

  """All values not containing the given string."""
  value_not_contains: String

  """All values starting with the given string."""
  value_starts_with: String

  """All values not starting with the given string."""
  value_not_starts_with: String

  """All values ending with the given string."""
  value_ends_with: String

  """All values not ending with the given string."""
  value_not_ends_with: String
  category: CategoryWhereInput
  shop: ShopWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
}

input AttributeWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Brand implements Node {
  id: ID!
  name: String!
  category(where: CategoryWhereInput): Category!
  shop(where: ShopWhereInput): Shop!
}

"""A connection to a list of items."""
type BrandConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BrandEdge]!
  aggregate: AggregateBrand!
}

input BrandCreateInput {
  name: String!
  category: CategoryCreateOneInput!
  shop: ShopCreateOneInput!
}

"""An edge in a connection."""
type BrandEdge {
  """The item at the end of the edge."""
  node: Brand!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BrandOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BrandPreviousValues {
  id: ID!
  name: String!
}

type BrandSubscriptionPayload {
  mutation: MutationType!
  node: Brand
  updatedFields: [String!]
  previousValues: BrandPreviousValues
}

input BrandSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BrandSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BrandSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BrandSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BrandWhereInput
}

input BrandUpdateInput {
  name: String
  category: CategoryUpdateOneInput
  shop: ShopUpdateOneInput
}

input BrandWhereInput {
  """Logical AND on all given filters."""
  AND: [BrandWhereInput!]

  """Logical OR on all given filters."""
  OR: [BrandWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BrandWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  category: CategoryWhereInput
  shop: ShopWhereInput
}

input BrandWhereUniqueInput {
  id: ID
}

type Category implements Node {
  id: ID!
  name: String!
  options(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Option!]
  shop(where: ShopWhereInput): Shop!
}

"""A connection to a list of items."""
type CategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String!
  options: OptionCreateManyWithoutCategoryInput
  shop: ShopCreateOneInput!
}

input CategoryCreateOneInput {
  create: CategoryCreateInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateOneWithoutOptionsInput {
  create: CategoryCreateWithoutOptionsInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateWithoutOptionsInput {
  name: String!
  shop: ShopCreateOneInput!
}

"""An edge in a connection."""
type CategoryEdge {
  """The item at the end of the edge."""
  node: Category!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
}

input CategoryUpdateDataInput {
  name: String
  options: OptionUpdateManyWithoutCategoryInput
  shop: ShopUpdateOneInput
}

input CategoryUpdateInput {
  name: String
  options: OptionUpdateManyWithoutCategoryInput
  shop: ShopUpdateOneInput
}

input CategoryUpdateOneInput {
  create: CategoryCreateInput
  connect: CategoryWhereUniqueInput
  delete: Boolean
  update: CategoryUpdateDataInput
  upsert: CategoryUpsertNestedInput
}

input CategoryUpdateOneWithoutOptionsInput {
  create: CategoryCreateWithoutOptionsInput
  connect: CategoryWhereUniqueInput
  delete: Boolean
  update: CategoryUpdateWithoutOptionsDataInput
  upsert: CategoryUpsertWithoutOptionsInput
}

input CategoryUpdateWithoutOptionsDataInput {
  name: String
  shop: ShopUpdateOneInput
}

input CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput!
  create: CategoryCreateInput!
}

input CategoryUpsertWithoutOptionsInput {
  update: CategoryUpdateWithoutOptionsDataInput!
  create: CategoryCreateWithoutOptionsInput!
}

input CategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  options_every: OptionWhereInput
  options_some: OptionWhereInput
  options_none: OptionWhereInput
  shop: ShopWhereInput
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar DateTime

type File implements Node {
  id: ID!
  name: String!
  url: String!
  contentType: String!
  secret: String!
  size: Int!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  name: String!
  url: String!
  contentType: String!
  secret: String!
  size: Int!
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  contentType_ASC
  contentType_DESC
  secret_ASC
  secret_DESC
  size_ASC
  size_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FilePreviousValues {
  id: ID!
  name: String!
  url: String!
  contentType: String!
  secret: String!
  size: Int!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateInput {
  name: String
  url: String
  contentType: String
  secret: String
  size: Int
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  contentType: String

  """All values that are not equal to given value."""
  contentType_not: String

  """All values that are contained in given list."""
  contentType_in: [String!]

  """All values that are not contained in given list."""
  contentType_not_in: [String!]

  """All values less than the given value."""
  contentType_lt: String

  """All values less than or equal the given value."""
  contentType_lte: String

  """All values greater than the given value."""
  contentType_gt: String

  """All values greater than or equal the given value."""
  contentType_gte: String

  """All values containing the given string."""
  contentType_contains: String

  """All values not containing the given string."""
  contentType_not_contains: String

  """All values starting with the given string."""
  contentType_starts_with: String

  """All values not starting with the given string."""
  contentType_not_starts_with: String

  """All values ending with the given string."""
  contentType_ends_with: String

  """All values not ending with the given string."""
  contentType_not_ends_with: String
  secret: String

  """All values that are not equal to given value."""
  secret_not: String

  """All values that are contained in given list."""
  secret_in: [String!]

  """All values that are not contained in given list."""
  secret_not_in: [String!]

  """All values less than the given value."""
  secret_lt: String

  """All values less than or equal the given value."""
  secret_lte: String

  """All values greater than the given value."""
  secret_gt: String

  """All values greater than or equal the given value."""
  secret_gte: String

  """All values containing the given string."""
  secret_contains: String

  """All values not containing the given string."""
  secret_not_contains: String

  """All values starting with the given string."""
  secret_starts_with: String

  """All values not starting with the given string."""
  secret_not_starts_with: String

  """All values ending with the given string."""
  secret_ends_with: String

  """All values not ending with the given string."""
  secret_not_ends_with: String
  size: Int

  """All values that are not equal to given value."""
  size_not: Int

  """All values that are contained in given list."""
  size_in: [Int!]

  """All values that are not contained in given list."""
  size_not_in: [Int!]

  """All values less than the given value."""
  size_lt: Int

  """All values less than or equal the given value."""
  size_lte: Int

  """All values greater than the given value."""
  size_gt: Int

  """All values greater than or equal the given value."""
  size_gte: Int
}

input FileWhereUniqueInput {
  id: ID
  url: String
  secret: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createBrand(data: BrandCreateInput!): Brand!
  createAttribute(data: AttributeCreateInput!): Attribute!
  createSelectedOption(data: SelectedOptionCreateInput!): SelectedOption!
  createUser(data: UserCreateInput!): User!
  createFile(data: FileCreateInput!): File!
  createOrder(data: OrderCreateInput!): Order!
  createOrderableProduct(data: OrderableProductCreateInput!): OrderableProduct!
  createOptionValue(data: OptionValueCreateInput!): OptionValue!
  createProduct(data: ProductCreateInput!): Product!
  createOrderLineItem(data: OrderLineItemCreateInput!): OrderLineItem!
  createVariant(data: VariantCreateInput!): Variant!
  createShop(data: ShopCreateInput!): Shop!
  createUserAdmin(data: UserAdminCreateInput!): UserAdmin!
  createResort(data: ResortCreateInput!): Resort!
  createCategory(data: CategoryCreateInput!): Category!
  createOption(data: OptionCreateInput!): Option!
  updateBrand(data: BrandUpdateInput!, where: BrandWhereUniqueInput!): Brand
  updateAttribute(data: AttributeUpdateInput!, where: AttributeWhereUniqueInput!): Attribute
  updateSelectedOption(data: SelectedOptionUpdateInput!, where: SelectedOptionWhereUniqueInput!): SelectedOption
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateOrderableProduct(data: OrderableProductUpdateInput!, where: OrderableProductWhereUniqueInput!): OrderableProduct
  updateOptionValue(data: OptionValueUpdateInput!, where: OptionValueWhereUniqueInput!): OptionValue
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateOrderLineItem(data: OrderLineItemUpdateInput!, where: OrderLineItemWhereUniqueInput!): OrderLineItem
  updateVariant(data: VariantUpdateInput!, where: VariantWhereUniqueInput!): Variant
  updateShop(data: ShopUpdateInput!, where: ShopWhereUniqueInput!): Shop
  updateUserAdmin(data: UserAdminUpdateInput!, where: UserAdminWhereUniqueInput!): UserAdmin
  updateResort(data: ResortUpdateInput!, where: ResortWhereUniqueInput!): Resort
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateOption(data: OptionUpdateInput!, where: OptionWhereUniqueInput!): Option
  deleteBrand(where: BrandWhereUniqueInput!): Brand
  deleteAttribute(where: AttributeWhereUniqueInput!): Attribute
  deleteSelectedOption(where: SelectedOptionWhereUniqueInput!): SelectedOption
  deleteUser(where: UserWhereUniqueInput!): User
  deleteFile(where: FileWhereUniqueInput!): File
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteOrderableProduct(where: OrderableProductWhereUniqueInput!): OrderableProduct
  deleteOptionValue(where: OptionValueWhereUniqueInput!): OptionValue
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteOrderLineItem(where: OrderLineItemWhereUniqueInput!): OrderLineItem
  deleteVariant(where: VariantWhereUniqueInput!): Variant
  deleteShop(where: ShopWhereUniqueInput!): Shop
  deleteUserAdmin(where: UserAdminWhereUniqueInput!): UserAdmin
  deleteResort(where: ResortWhereUniqueInput!): Resort
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteOption(where: OptionWhereUniqueInput!): Option
  upsertBrand(where: BrandWhereUniqueInput!, create: BrandCreateInput!, update: BrandUpdateInput!): Brand!
  upsertAttribute(where: AttributeWhereUniqueInput!, create: AttributeCreateInput!, update: AttributeUpdateInput!): Attribute!
  upsertSelectedOption(where: SelectedOptionWhereUniqueInput!, create: SelectedOptionCreateInput!, update: SelectedOptionUpdateInput!): SelectedOption!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  upsertOrderableProduct(where: OrderableProductWhereUniqueInput!, create: OrderableProductCreateInput!, update: OrderableProductUpdateInput!): OrderableProduct!
  upsertOptionValue(where: OptionValueWhereUniqueInput!, create: OptionValueCreateInput!, update: OptionValueUpdateInput!): OptionValue!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertOrderLineItem(where: OrderLineItemWhereUniqueInput!, create: OrderLineItemCreateInput!, update: OrderLineItemUpdateInput!): OrderLineItem!
  upsertVariant(where: VariantWhereUniqueInput!, create: VariantCreateInput!, update: VariantUpdateInput!): Variant!
  upsertShop(where: ShopWhereUniqueInput!, create: ShopCreateInput!, update: ShopUpdateInput!): Shop!
  upsertUserAdmin(where: UserAdminWhereUniqueInput!, create: UserAdminCreateInput!, update: UserAdminUpdateInput!): UserAdmin!
  upsertResort(where: ResortWhereUniqueInput!, create: ResortCreateInput!, update: ResortUpdateInput!): Resort!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  upsertOption(where: OptionWhereUniqueInput!, create: OptionCreateInput!, update: OptionUpdateInput!): Option!
  updateManyBrands(data: BrandUpdateInput!, where: BrandWhereInput): BatchPayload!
  updateManyAttributes(data: AttributeUpdateInput!, where: AttributeWhereInput): BatchPayload!
  updateManySelectedOptions(data: SelectedOptionUpdateInput!, where: SelectedOptionWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  updateManyOrders(data: OrderUpdateInput!, where: OrderWhereInput): BatchPayload!
  updateManyOrderableProducts(data: OrderableProductUpdateInput!, where: OrderableProductWhereInput): BatchPayload!
  updateManyOptionValues(data: OptionValueUpdateInput!, where: OptionValueWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManyOrderLineItems(data: OrderLineItemUpdateInput!, where: OrderLineItemWhereInput): BatchPayload!
  updateManyVariants(data: VariantUpdateInput!, where: VariantWhereInput): BatchPayload!
  updateManyShops(data: ShopUpdateInput!, where: ShopWhereInput): BatchPayload!
  updateManyUserAdmins(data: UserAdminUpdateInput!, where: UserAdminWhereInput): BatchPayload!
  updateManyResorts(data: ResortUpdateInput!, where: ResortWhereInput): BatchPayload!
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  updateManyOptions(data: OptionUpdateInput!, where: OptionWhereInput): BatchPayload!
  deleteManyBrands(where: BrandWhereInput): BatchPayload!
  deleteManyAttributes(where: AttributeWhereInput): BatchPayload!
  deleteManySelectedOptions(where: SelectedOptionWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  deleteManyOrderableProducts(where: OrderableProductWhereInput): BatchPayload!
  deleteManyOptionValues(where: OptionValueWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyOrderLineItems(where: OrderLineItemWhereInput): BatchPayload!
  deleteManyVariants(where: VariantWhereInput): BatchPayload!
  deleteManyShops(where: ShopWhereInput): BatchPayload!
  deleteManyUserAdmins(where: UserAdminWhereInput): BatchPayload!
  deleteManyResorts(where: ResortWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  deleteManyOptions(where: OptionWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Option implements Node {
  id: ID!
  name: String!
  values(where: OptionValueWhereInput, orderBy: OptionValueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OptionValue!]
  category(where: CategoryWhereInput): Category!
  shop(where: ShopWhereInput): Shop!
}

"""A connection to a list of items."""
type OptionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OptionEdge]!
  aggregate: AggregateOption!
}

input OptionCreateInput {
  name: String!
  values: OptionValueCreateManyInput
  category: CategoryCreateOneWithoutOptionsInput!
  shop: ShopCreateOneInput!
}

input OptionCreateManyInput {
  create: [OptionCreateInput!]
  connect: [OptionWhereUniqueInput!]
}

input OptionCreateManyWithoutCategoryInput {
  create: [OptionCreateWithoutCategoryInput!]
  connect: [OptionWhereUniqueInput!]
}

input OptionCreateOneInput {
  create: OptionCreateInput
  connect: OptionWhereUniqueInput
}

input OptionCreateWithoutCategoryInput {
  name: String!
  values: OptionValueCreateManyInput
  shop: ShopCreateOneInput!
}

"""An edge in a connection."""
type OptionEdge {
  """The item at the end of the edge."""
  node: Option!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OptionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OptionPreviousValues {
  id: ID!
  name: String!
}

type OptionSubscriptionPayload {
  mutation: MutationType!
  node: Option
  updatedFields: [String!]
  previousValues: OptionPreviousValues
}

input OptionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OptionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OptionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OptionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OptionWhereInput
}

input OptionUpdateDataInput {
  name: String
  values: OptionValueUpdateManyInput
  category: CategoryUpdateOneWithoutOptionsInput
  shop: ShopUpdateOneInput
}

input OptionUpdateInput {
  name: String
  values: OptionValueUpdateManyInput
  category: CategoryUpdateOneWithoutOptionsInput
  shop: ShopUpdateOneInput
}

input OptionUpdateManyInput {
  create: [OptionCreateInput!]
  connect: [OptionWhereUniqueInput!]
  disconnect: [OptionWhereUniqueInput!]
  delete: [OptionWhereUniqueInput!]
  update: [OptionUpdateWithWhereUniqueNestedInput!]
  upsert: [OptionUpsertWithWhereUniqueNestedInput!]
}

input OptionUpdateManyWithoutCategoryInput {
  create: [OptionCreateWithoutCategoryInput!]
  connect: [OptionWhereUniqueInput!]
  disconnect: [OptionWhereUniqueInput!]
  delete: [OptionWhereUniqueInput!]
  update: [OptionUpdateWithWhereUniqueWithoutCategoryInput!]
  upsert: [OptionUpsertWithWhereUniqueWithoutCategoryInput!]
}

input OptionUpdateOneInput {
  create: OptionCreateInput
  connect: OptionWhereUniqueInput
  delete: Boolean
  update: OptionUpdateDataInput
  upsert: OptionUpsertNestedInput
}

input OptionUpdateWithoutCategoryDataInput {
  name: String
  values: OptionValueUpdateManyInput
  shop: ShopUpdateOneInput
}

input OptionUpdateWithWhereUniqueNestedInput {
  where: OptionWhereUniqueInput!
  data: OptionUpdateDataInput!
}

input OptionUpdateWithWhereUniqueWithoutCategoryInput {
  where: OptionWhereUniqueInput!
  data: OptionUpdateWithoutCategoryDataInput!
}

input OptionUpsertNestedInput {
  update: OptionUpdateDataInput!
  create: OptionCreateInput!
}

input OptionUpsertWithWhereUniqueNestedInput {
  where: OptionWhereUniqueInput!
  update: OptionUpdateDataInput!
  create: OptionCreateInput!
}

input OptionUpsertWithWhereUniqueWithoutCategoryInput {
  where: OptionWhereUniqueInput!
  update: OptionUpdateWithoutCategoryDataInput!
  create: OptionCreateWithoutCategoryInput!
}

type OptionValue implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type OptionValueConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OptionValueEdge]!
  aggregate: AggregateOptionValue!
}

input OptionValueCreateInput {
  name: String!
}

input OptionValueCreateManyInput {
  create: [OptionValueCreateInput!]
  connect: [OptionValueWhereUniqueInput!]
}

input OptionValueCreateOneInput {
  create: OptionValueCreateInput
  connect: OptionValueWhereUniqueInput
}

"""An edge in a connection."""
type OptionValueEdge {
  """The item at the end of the edge."""
  node: OptionValue!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OptionValueOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OptionValuePreviousValues {
  id: ID!
  name: String!
}

type OptionValueSubscriptionPayload {
  mutation: MutationType!
  node: OptionValue
  updatedFields: [String!]
  previousValues: OptionValuePreviousValues
}

input OptionValueSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OptionValueSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OptionValueSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OptionValueSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OptionValueWhereInput
}

input OptionValueUpdateDataInput {
  name: String
}

input OptionValueUpdateInput {
  name: String
}

input OptionValueUpdateManyInput {
  create: [OptionValueCreateInput!]
  connect: [OptionValueWhereUniqueInput!]
  disconnect: [OptionValueWhereUniqueInput!]
  delete: [OptionValueWhereUniqueInput!]
  update: [OptionValueUpdateWithWhereUniqueNestedInput!]
  upsert: [OptionValueUpsertWithWhereUniqueNestedInput!]
}

input OptionValueUpdateOneInput {
  create: OptionValueCreateInput
  connect: OptionValueWhereUniqueInput
  delete: Boolean
  update: OptionValueUpdateDataInput
  upsert: OptionValueUpsertNestedInput
}

input OptionValueUpdateWithWhereUniqueNestedInput {
  where: OptionValueWhereUniqueInput!
  data: OptionValueUpdateDataInput!
}

input OptionValueUpsertNestedInput {
  update: OptionValueUpdateDataInput!
  create: OptionValueCreateInput!
}

input OptionValueUpsertWithWhereUniqueNestedInput {
  where: OptionValueWhereUniqueInput!
  update: OptionValueUpdateDataInput!
  create: OptionValueCreateInput!
}

input OptionValueWhereInput {
  """Logical AND on all given filters."""
  AND: [OptionValueWhereInput!]

  """Logical OR on all given filters."""
  OR: [OptionValueWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OptionValueWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input OptionValueWhereUniqueInput {
  id: ID
}

input OptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OptionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  values_every: OptionValueWhereInput
  values_some: OptionValueWhereInput
  values_none: OptionValueWhereInput
  category: CategoryWhereInput
  shop: ShopWhereInput
}

input OptionWhereUniqueInput {
  id: ID
}

type Order implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  owner(where: UserWhereInput): User!
  lineItems(where: OrderLineItemWhereInput, orderBy: OrderLineItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderLineItem!]
  totalPrice: Float!
  totalRefunded: Float!
  totalTax: Float!
  orderStatus: OrderStatus!
}

type OrderableProduct implements Node {
  id: ID!
  product(where: ProductWhereInput): Product!
  position: Int!
  shopBestSeller(where: ShopWhereInput): Shop
  shopNewProduct(where: ShopWhereInput): Shop
}

"""A connection to a list of items."""
type OrderableProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderableProductEdge]!
  aggregate: AggregateOrderableProduct!
}

input OrderableProductCreateInput {
  position: Int!
  product: ProductCreateOneWithoutOrderablesInput!
  shopBestSeller: ShopCreateOneWithoutBestSellerProductsInput
  shopNewProduct: ShopCreateOneWithoutNewProductsInput
}

input OrderableProductCreateManyWithoutProductInput {
  create: [OrderableProductCreateWithoutProductInput!]
  connect: [OrderableProductWhereUniqueInput!]
}

input OrderableProductCreateManyWithoutShopBestSellerInput {
  create: [OrderableProductCreateWithoutShopBestSellerInput!]
  connect: [OrderableProductWhereUniqueInput!]
}

input OrderableProductCreateManyWithoutShopNewProductInput {
  create: [OrderableProductCreateWithoutShopNewProductInput!]
  connect: [OrderableProductWhereUniqueInput!]
}

input OrderableProductCreateWithoutProductInput {
  position: Int!
  shopBestSeller: ShopCreateOneWithoutBestSellerProductsInput
  shopNewProduct: ShopCreateOneWithoutNewProductsInput
}

input OrderableProductCreateWithoutShopBestSellerInput {
  position: Int!
  product: ProductCreateOneWithoutOrderablesInput!
  shopNewProduct: ShopCreateOneWithoutNewProductsInput
}

input OrderableProductCreateWithoutShopNewProductInput {
  position: Int!
  product: ProductCreateOneWithoutOrderablesInput!
  shopBestSeller: ShopCreateOneWithoutBestSellerProductsInput
}

"""An edge in a connection."""
type OrderableProductEdge {
  """The item at the end of the edge."""
  node: OrderableProduct!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderableProductOrderByInput {
  id_ASC
  id_DESC
  position_ASC
  position_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrderableProductPreviousValues {
  id: ID!
  position: Int!
}

type OrderableProductSubscriptionPayload {
  mutation: MutationType!
  node: OrderableProduct
  updatedFields: [String!]
  previousValues: OrderableProductPreviousValues
}

input OrderableProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderableProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderableProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderableProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderableProductWhereInput
}

input OrderableProductUpdateInput {
  position: Int
  product: ProductUpdateOneWithoutOrderablesInput
  shopBestSeller: ShopUpdateOneWithoutBestSellerProductsInput
  shopNewProduct: ShopUpdateOneWithoutNewProductsInput
}

input OrderableProductUpdateManyWithoutProductInput {
  create: [OrderableProductCreateWithoutProductInput!]
  connect: [OrderableProductWhereUniqueInput!]
  disconnect: [OrderableProductWhereUniqueInput!]
  delete: [OrderableProductWhereUniqueInput!]
  update: [OrderableProductUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [OrderableProductUpsertWithWhereUniqueWithoutProductInput!]
}

input OrderableProductUpdateManyWithoutShopBestSellerInput {
  create: [OrderableProductCreateWithoutShopBestSellerInput!]
  connect: [OrderableProductWhereUniqueInput!]
  disconnect: [OrderableProductWhereUniqueInput!]
  delete: [OrderableProductWhereUniqueInput!]
  update: [OrderableProductUpdateWithWhereUniqueWithoutShopBestSellerInput!]
  upsert: [OrderableProductUpsertWithWhereUniqueWithoutShopBestSellerInput!]
}

input OrderableProductUpdateManyWithoutShopNewProductInput {
  create: [OrderableProductCreateWithoutShopNewProductInput!]
  connect: [OrderableProductWhereUniqueInput!]
  disconnect: [OrderableProductWhereUniqueInput!]
  delete: [OrderableProductWhereUniqueInput!]
  update: [OrderableProductUpdateWithWhereUniqueWithoutShopNewProductInput!]
  upsert: [OrderableProductUpsertWithWhereUniqueWithoutShopNewProductInput!]
}

input OrderableProductUpdateWithoutProductDataInput {
  position: Int
  shopBestSeller: ShopUpdateOneWithoutBestSellerProductsInput
  shopNewProduct: ShopUpdateOneWithoutNewProductsInput
}

input OrderableProductUpdateWithoutShopBestSellerDataInput {
  position: Int
  product: ProductUpdateOneWithoutOrderablesInput
  shopNewProduct: ShopUpdateOneWithoutNewProductsInput
}

input OrderableProductUpdateWithoutShopNewProductDataInput {
  position: Int
  product: ProductUpdateOneWithoutOrderablesInput
  shopBestSeller: ShopUpdateOneWithoutBestSellerProductsInput
}

input OrderableProductUpdateWithWhereUniqueWithoutProductInput {
  where: OrderableProductWhereUniqueInput!
  data: OrderableProductUpdateWithoutProductDataInput!
}

input OrderableProductUpdateWithWhereUniqueWithoutShopBestSellerInput {
  where: OrderableProductWhereUniqueInput!
  data: OrderableProductUpdateWithoutShopBestSellerDataInput!
}

input OrderableProductUpdateWithWhereUniqueWithoutShopNewProductInput {
  where: OrderableProductWhereUniqueInput!
  data: OrderableProductUpdateWithoutShopNewProductDataInput!
}

input OrderableProductUpsertWithWhereUniqueWithoutProductInput {
  where: OrderableProductWhereUniqueInput!
  update: OrderableProductUpdateWithoutProductDataInput!
  create: OrderableProductCreateWithoutProductInput!
}

input OrderableProductUpsertWithWhereUniqueWithoutShopBestSellerInput {
  where: OrderableProductWhereUniqueInput!
  update: OrderableProductUpdateWithoutShopBestSellerDataInput!
  create: OrderableProductCreateWithoutShopBestSellerInput!
}

input OrderableProductUpsertWithWhereUniqueWithoutShopNewProductInput {
  where: OrderableProductWhereUniqueInput!
  update: OrderableProductUpdateWithoutShopNewProductDataInput!
  create: OrderableProductCreateWithoutShopNewProductInput!
}

input OrderableProductWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderableProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderableProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderableProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  position: Int

  """All values that are not equal to given value."""
  position_not: Int

  """All values that are contained in given list."""
  position_in: [Int!]

  """All values that are not contained in given list."""
  position_not_in: [Int!]

  """All values less than the given value."""
  position_lt: Int

  """All values less than or equal the given value."""
  position_lte: Int

  """All values greater than the given value."""
  position_gt: Int

  """All values greater than or equal the given value."""
  position_gte: Int
  product: ProductWhereInput
  shopBestSeller: ShopWhereInput
  shopNewProduct: ShopWhereInput
}

input OrderableProductWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type OrderConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  totalPrice: Float!
  totalRefunded: Float!
  totalTax: Float!
  orderStatus: OrderStatus!
  owner: UserCreateOneWithoutOrdersInput!
  lineItems: OrderLineItemCreateManyInput
}

input OrderCreateManyWithoutOwnerInput {
  create: [OrderCreateWithoutOwnerInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutOwnerInput {
  totalPrice: Float!
  totalRefunded: Float!
  totalTax: Float!
  orderStatus: OrderStatus!
  lineItems: OrderLineItemCreateManyInput
}

"""An edge in a connection."""
type OrderEdge {
  """The item at the end of the edge."""
  node: Order!

  """A cursor for use in pagination."""
  cursor: String!
}

type OrderLineItem implements Node {
  id: ID!
  deletedAt: DateTime
  quantity: Int!
  variant(where: VariantWhereInput): Variant
  owner(where: UserWhereInput): User
  shop(where: ShopWhereInput): Shop!
}

"""A connection to a list of items."""
type OrderLineItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrderLineItemEdge]!
  aggregate: AggregateOrderLineItem!
}

input OrderLineItemCreateInput {
  deletedAt: DateTime
  quantity: Int!
  variant: VariantCreateOneInput
  owner: UserCreateOneWithoutCartInput
  shop: ShopCreateOneInput!
}

input OrderLineItemCreateManyInput {
  create: [OrderLineItemCreateInput!]
  connect: [OrderLineItemWhereUniqueInput!]
}

input OrderLineItemCreateManyWithoutOwnerInput {
  create: [OrderLineItemCreateWithoutOwnerInput!]
  connect: [OrderLineItemWhereUniqueInput!]
}

input OrderLineItemCreateWithoutOwnerInput {
  deletedAt: DateTime
  quantity: Int!
  variant: VariantCreateOneInput
  shop: ShopCreateOneInput!
}

"""An edge in a connection."""
type OrderLineItemEdge {
  """The item at the end of the edge."""
  node: OrderLineItem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrderLineItemOrderByInput {
  id_ASC
  id_DESC
  deletedAt_ASC
  deletedAt_DESC
  quantity_ASC
  quantity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrderLineItemPreviousValues {
  id: ID!
  deletedAt: DateTime
  quantity: Int!
}

type OrderLineItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderLineItem
  updatedFields: [String!]
  previousValues: OrderLineItemPreviousValues
}

input OrderLineItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderLineItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderLineItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderLineItemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderLineItemWhereInput
}

input OrderLineItemUpdateDataInput {
  deletedAt: DateTime
  quantity: Int
  variant: VariantUpdateOneInput
  owner: UserUpdateOneWithoutCartInput
  shop: ShopUpdateOneInput
}

input OrderLineItemUpdateInput {
  deletedAt: DateTime
  quantity: Int
  variant: VariantUpdateOneInput
  owner: UserUpdateOneWithoutCartInput
  shop: ShopUpdateOneInput
}

input OrderLineItemUpdateManyInput {
  create: [OrderLineItemCreateInput!]
  connect: [OrderLineItemWhereUniqueInput!]
  disconnect: [OrderLineItemWhereUniqueInput!]
  delete: [OrderLineItemWhereUniqueInput!]
  update: [OrderLineItemUpdateWithWhereUniqueNestedInput!]
  upsert: [OrderLineItemUpsertWithWhereUniqueNestedInput!]
}

input OrderLineItemUpdateManyWithoutOwnerInput {
  create: [OrderLineItemCreateWithoutOwnerInput!]
  connect: [OrderLineItemWhereUniqueInput!]
  disconnect: [OrderLineItemWhereUniqueInput!]
  delete: [OrderLineItemWhereUniqueInput!]
  update: [OrderLineItemUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [OrderLineItemUpsertWithWhereUniqueWithoutOwnerInput!]
}

input OrderLineItemUpdateWithoutOwnerDataInput {
  deletedAt: DateTime
  quantity: Int
  variant: VariantUpdateOneInput
  shop: ShopUpdateOneInput
}

input OrderLineItemUpdateWithWhereUniqueNestedInput {
  where: OrderLineItemWhereUniqueInput!
  data: OrderLineItemUpdateDataInput!
}

input OrderLineItemUpdateWithWhereUniqueWithoutOwnerInput {
  where: OrderLineItemWhereUniqueInput!
  data: OrderLineItemUpdateWithoutOwnerDataInput!
}

input OrderLineItemUpsertWithWhereUniqueNestedInput {
  where: OrderLineItemWhereUniqueInput!
  update: OrderLineItemUpdateDataInput!
  create: OrderLineItemCreateInput!
}

input OrderLineItemUpsertWithWhereUniqueWithoutOwnerInput {
  where: OrderLineItemWhereUniqueInput!
  update: OrderLineItemUpdateWithoutOwnerDataInput!
  create: OrderLineItemCreateWithoutOwnerInput!
}

input OrderLineItemWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderLineItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderLineItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderLineItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  variant: VariantWhereInput
  owner: UserWhereInput
  shop: ShopWhereInput
}

input OrderLineItemWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  totalPrice_ASC
  totalPrice_DESC
  totalRefunded_ASC
  totalRefunded_DESC
  totalTax_ASC
  totalTax_DESC
  orderStatus_ASC
  orderStatus_DESC
}

type OrderPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  totalPrice: Float!
  totalRefunded: Float!
  totalTax: Float!
  orderStatus: OrderStatus!
}

enum OrderStatus {
  SUBMITTED
  PAID
  PREPARED
  FAILED
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
}

input OrderUpdateInput {
  totalPrice: Float
  totalRefunded: Float
  totalTax: Float
  orderStatus: OrderStatus
  owner: UserUpdateOneWithoutOrdersInput
  lineItems: OrderLineItemUpdateManyInput
}

input OrderUpdateManyWithoutOwnerInput {
  create: [OrderCreateWithoutOwnerInput!]
  connect: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  delete: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutOwnerInput!]
}

input OrderUpdateWithoutOwnerDataInput {
  totalPrice: Float
  totalRefunded: Float
  totalTax: Float
  orderStatus: OrderStatus
  lineItems: OrderLineItemUpdateManyInput
}

input OrderUpdateWithWhereUniqueWithoutOwnerInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutOwnerDataInput!
}

input OrderUpsertWithWhereUniqueWithoutOwnerInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutOwnerDataInput!
  create: OrderCreateWithoutOwnerInput!
}

input OrderWhereInput {
  """Logical AND on all given filters."""
  AND: [OrderWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrderWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrderWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  totalPrice: Float

  """All values that are not equal to given value."""
  totalPrice_not: Float

  """All values that are contained in given list."""
  totalPrice_in: [Float!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [Float!]

  """All values less than the given value."""
  totalPrice_lt: Float

  """All values less than or equal the given value."""
  totalPrice_lte: Float

  """All values greater than the given value."""
  totalPrice_gt: Float

  """All values greater than or equal the given value."""
  totalPrice_gte: Float
  totalRefunded: Float

  """All values that are not equal to given value."""
  totalRefunded_not: Float

  """All values that are contained in given list."""
  totalRefunded_in: [Float!]

  """All values that are not contained in given list."""
  totalRefunded_not_in: [Float!]

  """All values less than the given value."""
  totalRefunded_lt: Float

  """All values less than or equal the given value."""
  totalRefunded_lte: Float

  """All values greater than the given value."""
  totalRefunded_gt: Float

  """All values greater than or equal the given value."""
  totalRefunded_gte: Float
  totalTax: Float

  """All values that are not equal to given value."""
  totalTax_not: Float

  """All values that are contained in given list."""
  totalTax_in: [Float!]

  """All values that are not contained in given list."""
  totalTax_not_in: [Float!]

  """All values less than the given value."""
  totalTax_lt: Float

  """All values less than or equal the given value."""
  totalTax_lte: Float

  """All values greater than the given value."""
  totalTax_gt: Float

  """All values greater than or equal the given value."""
  totalTax_gte: Float
  orderStatus: OrderStatus

  """All values that are not equal to given value."""
  orderStatus_not: OrderStatus

  """All values that are contained in given list."""
  orderStatus_in: [OrderStatus!]

  """All values that are not contained in given list."""
  orderStatus_not_in: [OrderStatus!]
  owner: UserWhereInput
  lineItems_every: OrderLineItemWhereInput
  lineItems_some: OrderLineItemWhereInput
  lineItems_none: OrderLineItemWhereInput
}

input OrderWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Product implements Node {
  id: ID!
  deletedAt: DateTime
  User(where: UserAdminWhereInput): UserAdmin!
  category(where: CategoryWhereInput): Category!
  SKU: String
  options(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Option!]
  unavailableOptionsValues(where: OptionValueWhereInput, orderBy: OptionValueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OptionValue!]
  variants(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Variant!]
  attributes(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attribute!]
  displayPrice: Float!
  available: Boolean!
  orderables(where: OrderableProductWhereInput, orderBy: OrderableProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderableProduct!]
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  deletedAt: DateTime
  SKU: String
  displayPrice: Float!
  available: Boolean!
  User: UserAdminCreateOneInput!
  category: CategoryCreateOneInput!
  options: OptionCreateManyInput
  unavailableOptionsValues: OptionValueCreateManyInput
  variants: VariantCreateManyWithoutProductInput
  attributes: AttributeCreateManyWithoutProductsInput
  orderables: OrderableProductCreateManyWithoutProductInput
}

input ProductCreateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateManyWithoutAttributesInput {
  create: [ProductCreateWithoutAttributesInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneWithoutOrderablesInput {
  create: ProductCreateWithoutOrderablesInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutVariantsInput {
  create: ProductCreateWithoutVariantsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutAttributesInput {
  deletedAt: DateTime
  SKU: String
  displayPrice: Float!
  available: Boolean!
  User: UserAdminCreateOneInput!
  category: CategoryCreateOneInput!
  options: OptionCreateManyInput
  unavailableOptionsValues: OptionValueCreateManyInput
  variants: VariantCreateManyWithoutProductInput
  orderables: OrderableProductCreateManyWithoutProductInput
}

input ProductCreateWithoutOrderablesInput {
  deletedAt: DateTime
  SKU: String
  displayPrice: Float!
  available: Boolean!
  User: UserAdminCreateOneInput!
  category: CategoryCreateOneInput!
  options: OptionCreateManyInput
  unavailableOptionsValues: OptionValueCreateManyInput
  variants: VariantCreateManyWithoutProductInput
  attributes: AttributeCreateManyWithoutProductsInput
}

input ProductCreateWithoutVariantsInput {
  deletedAt: DateTime
  SKU: String
  displayPrice: Float!
  available: Boolean!
  User: UserAdminCreateOneInput!
  category: CategoryCreateOneInput!
  options: OptionCreateManyInput
  unavailableOptionsValues: OptionValueCreateManyInput
  attributes: AttributeCreateManyWithoutProductsInput
  orderables: OrderableProductCreateManyWithoutProductInput
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  deletedAt_ASC
  deletedAt_DESC
  SKU_ASC
  SKU_DESC
  displayPrice_ASC
  displayPrice_DESC
  available_ASC
  available_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductPreviousValues {
  id: ID!
  deletedAt: DateTime
  SKU: String
  displayPrice: Float!
  available: Boolean!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateDataInput {
  deletedAt: DateTime
  SKU: String
  displayPrice: Float
  available: Boolean
  User: UserAdminUpdateOneInput
  category: CategoryUpdateOneInput
  options: OptionUpdateManyInput
  unavailableOptionsValues: OptionValueUpdateManyInput
  variants: VariantUpdateManyWithoutProductInput
  attributes: AttributeUpdateManyWithoutProductsInput
  orderables: OrderableProductUpdateManyWithoutProductInput
}

input ProductUpdateInput {
  deletedAt: DateTime
  SKU: String
  displayPrice: Float
  available: Boolean
  User: UserAdminUpdateOneInput
  category: CategoryUpdateOneInput
  options: OptionUpdateManyInput
  unavailableOptionsValues: OptionValueUpdateManyInput
  variants: VariantUpdateManyWithoutProductInput
  attributes: AttributeUpdateManyWithoutProductsInput
  orderables: OrderableProductUpdateManyWithoutProductInput
}

input ProductUpdateManyInput {
  create: [ProductCreateInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueNestedInput!]
  upsert: [ProductUpsertWithWhereUniqueNestedInput!]
}

input ProductUpdateManyWithoutAttributesInput {
  create: [ProductCreateWithoutAttributesInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutAttributesInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutAttributesInput!]
}

input ProductUpdateOneWithoutOrderablesInput {
  create: ProductCreateWithoutOrderablesInput
  connect: ProductWhereUniqueInput
  delete: Boolean
  update: ProductUpdateWithoutOrderablesDataInput
  upsert: ProductUpsertWithoutOrderablesInput
}

input ProductUpdateOneWithoutVariantsInput {
  create: ProductCreateWithoutVariantsInput
  connect: ProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductUpdateWithoutVariantsDataInput
  upsert: ProductUpsertWithoutVariantsInput
}

input ProductUpdateWithoutAttributesDataInput {
  deletedAt: DateTime
  SKU: String
  displayPrice: Float
  available: Boolean
  User: UserAdminUpdateOneInput
  category: CategoryUpdateOneInput
  options: OptionUpdateManyInput
  unavailableOptionsValues: OptionValueUpdateManyInput
  variants: VariantUpdateManyWithoutProductInput
  orderables: OrderableProductUpdateManyWithoutProductInput
}

input ProductUpdateWithoutOrderablesDataInput {
  deletedAt: DateTime
  SKU: String
  displayPrice: Float
  available: Boolean
  User: UserAdminUpdateOneInput
  category: CategoryUpdateOneInput
  options: OptionUpdateManyInput
  unavailableOptionsValues: OptionValueUpdateManyInput
  variants: VariantUpdateManyWithoutProductInput
  attributes: AttributeUpdateManyWithoutProductsInput
}

input ProductUpdateWithoutVariantsDataInput {
  deletedAt: DateTime
  SKU: String
  displayPrice: Float
  available: Boolean
  User: UserAdminUpdateOneInput
  category: CategoryUpdateOneInput
  options: OptionUpdateManyInput
  unavailableOptionsValues: OptionValueUpdateManyInput
  attributes: AttributeUpdateManyWithoutProductsInput
  orderables: OrderableProductUpdateManyWithoutProductInput
}

input ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateDataInput!
}

input ProductUpdateWithWhereUniqueWithoutAttributesInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutAttributesDataInput!
}

input ProductUpsertWithoutOrderablesInput {
  update: ProductUpdateWithoutOrderablesDataInput!
  create: ProductCreateWithoutOrderablesInput!
}

input ProductUpsertWithoutVariantsInput {
  update: ProductUpdateWithoutVariantsDataInput!
  create: ProductCreateWithoutVariantsInput!
}

input ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithWhereUniqueWithoutAttributesInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutAttributesDataInput!
  create: ProductCreateWithoutAttributesInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  SKU: String

  """All values that are not equal to given value."""
  SKU_not: String

  """All values that are contained in given list."""
  SKU_in: [String!]

  """All values that are not contained in given list."""
  SKU_not_in: [String!]

  """All values less than the given value."""
  SKU_lt: String

  """All values less than or equal the given value."""
  SKU_lte: String

  """All values greater than the given value."""
  SKU_gt: String

  """All values greater than or equal the given value."""
  SKU_gte: String

  """All values containing the given string."""
  SKU_contains: String

  """All values not containing the given string."""
  SKU_not_contains: String

  """All values starting with the given string."""
  SKU_starts_with: String

  """All values not starting with the given string."""
  SKU_not_starts_with: String

  """All values ending with the given string."""
  SKU_ends_with: String

  """All values not ending with the given string."""
  SKU_not_ends_with: String
  displayPrice: Float

  """All values that are not equal to given value."""
  displayPrice_not: Float

  """All values that are contained in given list."""
  displayPrice_in: [Float!]

  """All values that are not contained in given list."""
  displayPrice_not_in: [Float!]

  """All values less than the given value."""
  displayPrice_lt: Float

  """All values less than or equal the given value."""
  displayPrice_lte: Float

  """All values greater than the given value."""
  displayPrice_gt: Float

  """All values greater than or equal the given value."""
  displayPrice_gte: Float
  available: Boolean

  """All values that are not equal to given value."""
  available_not: Boolean
  User: UserAdminWhereInput
  category: CategoryWhereInput
  options_every: OptionWhereInput
  options_some: OptionWhereInput
  options_none: OptionWhereInput
  unavailableOptionsValues_every: OptionValueWhereInput
  unavailableOptionsValues_some: OptionValueWhereInput
  unavailableOptionsValues_none: OptionValueWhereInput
  variants_every: VariantWhereInput
  variants_some: VariantWhereInput
  variants_none: VariantWhereInput
  attributes_every: AttributeWhereInput
  attributes_some: AttributeWhereInput
  attributes_none: AttributeWhereInput
  orderables_every: OrderableProductWhereInput
  orderables_some: OrderableProductWhereInput
  orderables_none: OrderableProductWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  brands(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brand]!
  attributes(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attribute]!
  selectedOptions(where: SelectedOptionWhereInput, orderBy: SelectedOptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SelectedOption]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  orderableProducts(where: OrderableProductWhereInput, orderBy: OrderableProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderableProduct]!
  optionValues(where: OptionValueWhereInput, orderBy: OptionValueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OptionValue]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  orderLineItems(where: OrderLineItemWhereInput, orderBy: OrderLineItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderLineItem]!
  variants(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Variant]!
  shops(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Shop]!
  userAdmins(where: UserAdminWhereInput, orderBy: UserAdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserAdmin]!
  resorts(where: ResortWhereInput, orderBy: ResortOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resort]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  options(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Option]!
  brand(where: BrandWhereUniqueInput!): Brand
  attribute(where: AttributeWhereUniqueInput!): Attribute
  selectedOption(where: SelectedOptionWhereUniqueInput!): SelectedOption
  user(where: UserWhereUniqueInput!): User
  file(where: FileWhereUniqueInput!): File
  order(where: OrderWhereUniqueInput!): Order
  orderableProduct(where: OrderableProductWhereUniqueInput!): OrderableProduct
  optionValue(where: OptionValueWhereUniqueInput!): OptionValue
  product(where: ProductWhereUniqueInput!): Product
  orderLineItem(where: OrderLineItemWhereUniqueInput!): OrderLineItem
  variant(where: VariantWhereUniqueInput!): Variant
  shop(where: ShopWhereUniqueInput!): Shop
  userAdmin(where: UserAdminWhereUniqueInput!): UserAdmin
  resort(where: ResortWhereUniqueInput!): Resort
  category(where: CategoryWhereUniqueInput!): Category
  option(where: OptionWhereUniqueInput!): Option
  brandsConnection(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BrandConnection!
  attributesConnection(where: AttributeWhereInput, orderBy: AttributeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AttributeConnection!
  selectedOptionsConnection(where: SelectedOptionWhereInput, orderBy: SelectedOptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SelectedOptionConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderableProductsConnection(where: OrderableProductWhereInput, orderBy: OrderableProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderableProductConnection!
  optionValuesConnection(where: OptionValueWhereInput, orderBy: OptionValueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OptionValueConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  orderLineItemsConnection(where: OrderLineItemWhereInput, orderBy: OrderLineItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderLineItemConnection!
  variantsConnection(where: VariantWhereInput, orderBy: VariantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VariantConnection!
  shopsConnection(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShopConnection!
  userAdminsConnection(where: UserAdminWhereInput, orderBy: UserAdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserAdminConnection!
  resortsConnection(where: ResortWhereInput, orderBy: ResortOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResortConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  optionsConnection(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OptionConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Resort implements Node {
  id: ID!
  name: String!
  description: String
  address: String
  zipCode: String
  city: String!
  phoneNumber: String!
}

"""A connection to a list of items."""
type ResortConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ResortEdge]!
  aggregate: AggregateResort!
}

input ResortCreateInput {
  name: String!
  description: String
  address: String
  zipCode: String
  city: String!
  phoneNumber: String!
}

input ResortCreateManyInput {
  create: [ResortCreateInput!]
  connect: [ResortWhereUniqueInput!]
}

"""An edge in a connection."""
type ResortEdge {
  """The item at the end of the edge."""
  node: Resort!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ResortOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  address_ASC
  address_DESC
  zipCode_ASC
  zipCode_DESC
  city_ASC
  city_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ResortPreviousValues {
  id: ID!
  name: String!
  description: String
  address: String
  zipCode: String
  city: String!
  phoneNumber: String!
}

type ResortSubscriptionPayload {
  mutation: MutationType!
  node: Resort
  updatedFields: [String!]
  previousValues: ResortPreviousValues
}

input ResortSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ResortSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ResortSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ResortSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ResortWhereInput
}

input ResortUpdateDataInput {
  name: String
  description: String
  address: String
  zipCode: String
  city: String
  phoneNumber: String
}

input ResortUpdateInput {
  name: String
  description: String
  address: String
  zipCode: String
  city: String
  phoneNumber: String
}

input ResortUpdateManyInput {
  create: [ResortCreateInput!]
  connect: [ResortWhereUniqueInput!]
  disconnect: [ResortWhereUniqueInput!]
  delete: [ResortWhereUniqueInput!]
  update: [ResortUpdateWithWhereUniqueNestedInput!]
  upsert: [ResortUpsertWithWhereUniqueNestedInput!]
}

input ResortUpdateWithWhereUniqueNestedInput {
  where: ResortWhereUniqueInput!
  data: ResortUpdateDataInput!
}

input ResortUpsertWithWhereUniqueNestedInput {
  where: ResortWhereUniqueInput!
  update: ResortUpdateDataInput!
  create: ResortCreateInput!
}

input ResortWhereInput {
  """Logical AND on all given filters."""
  AND: [ResortWhereInput!]

  """Logical OR on all given filters."""
  OR: [ResortWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ResortWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  zipCode: String

  """All values that are not equal to given value."""
  zipCode_not: String

  """All values that are contained in given list."""
  zipCode_in: [String!]

  """All values that are not contained in given list."""
  zipCode_not_in: [String!]

  """All values less than the given value."""
  zipCode_lt: String

  """All values less than or equal the given value."""
  zipCode_lte: String

  """All values greater than the given value."""
  zipCode_gt: String

  """All values greater than or equal the given value."""
  zipCode_gte: String

  """All values containing the given string."""
  zipCode_contains: String

  """All values not containing the given string."""
  zipCode_not_contains: String

  """All values starting with the given string."""
  zipCode_starts_with: String

  """All values not starting with the given string."""
  zipCode_not_starts_with: String

  """All values ending with the given string."""
  zipCode_ends_with: String

  """All values not ending with the given string."""
  zipCode_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
}

input ResortWhereUniqueInput {
  id: ID
  name: String
}

enum Role {
  USER
  ADMIN
}

type SelectedOption implements Node {
  id: ID!
  deletedAt: DateTime
  option(where: OptionWhereInput): Option!
  variant(where: VariantWhereInput): Variant!
  value(where: OptionValueWhereInput): OptionValue!
}

"""A connection to a list of items."""
type SelectedOptionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SelectedOptionEdge]!
  aggregate: AggregateSelectedOption!
}

input SelectedOptionCreateInput {
  deletedAt: DateTime
  option: OptionCreateOneInput!
  variant: VariantCreateOneWithoutSelectedOptionsInput!
  value: OptionValueCreateOneInput!
}

input SelectedOptionCreateManyWithoutVariantInput {
  create: [SelectedOptionCreateWithoutVariantInput!]
  connect: [SelectedOptionWhereUniqueInput!]
}

input SelectedOptionCreateWithoutVariantInput {
  deletedAt: DateTime
  option: OptionCreateOneInput!
  value: OptionValueCreateOneInput!
}

"""An edge in a connection."""
type SelectedOptionEdge {
  """The item at the end of the edge."""
  node: SelectedOption!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SelectedOptionOrderByInput {
  id_ASC
  id_DESC
  deletedAt_ASC
  deletedAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SelectedOptionPreviousValues {
  id: ID!
  deletedAt: DateTime
}

type SelectedOptionSubscriptionPayload {
  mutation: MutationType!
  node: SelectedOption
  updatedFields: [String!]
  previousValues: SelectedOptionPreviousValues
}

input SelectedOptionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SelectedOptionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SelectedOptionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SelectedOptionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SelectedOptionWhereInput
}

input SelectedOptionUpdateInput {
  deletedAt: DateTime
  option: OptionUpdateOneInput
  variant: VariantUpdateOneWithoutSelectedOptionsInput
  value: OptionValueUpdateOneInput
}

input SelectedOptionUpdateManyWithoutVariantInput {
  create: [SelectedOptionCreateWithoutVariantInput!]
  connect: [SelectedOptionWhereUniqueInput!]
  disconnect: [SelectedOptionWhereUniqueInput!]
  delete: [SelectedOptionWhereUniqueInput!]
  update: [SelectedOptionUpdateWithWhereUniqueWithoutVariantInput!]
  upsert: [SelectedOptionUpsertWithWhereUniqueWithoutVariantInput!]
}

input SelectedOptionUpdateWithoutVariantDataInput {
  deletedAt: DateTime
  option: OptionUpdateOneInput
  value: OptionValueUpdateOneInput
}

input SelectedOptionUpdateWithWhereUniqueWithoutVariantInput {
  where: SelectedOptionWhereUniqueInput!
  data: SelectedOptionUpdateWithoutVariantDataInput!
}

input SelectedOptionUpsertWithWhereUniqueWithoutVariantInput {
  where: SelectedOptionWhereUniqueInput!
  update: SelectedOptionUpdateWithoutVariantDataInput!
  create: SelectedOptionCreateWithoutVariantInput!
}

input SelectedOptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SelectedOptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SelectedOptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SelectedOptionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  option: OptionWhereInput
  variant: VariantWhereInput
  value: OptionValueWhereInput
}

input SelectedOptionWhereUniqueInput {
  id: ID
}

type Shop implements Node {
  id: ID!
  name: String!
  address: String!
  zipCode: String!
  resort(where: ResortWhereInput, orderBy: ResortOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resort!]
  phoneNumber: String!
  openingHours: String!
  MOTD: String
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  newProducts(where: OrderableProductWhereInput, orderBy: OrderableProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderableProduct!]
  bestSellerProducts(where: OrderableProductWhereInput, orderBy: OrderableProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderableProduct!]
}

"""A connection to a list of items."""
type ShopConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ShopEdge]!
  aggregate: AggregateShop!
}

input ShopCreateInput {
  name: String!
  address: String!
  zipCode: String!
  phoneNumber: String!
  openingHours: String!
  MOTD: String
  resort: ResortCreateManyInput
  products: ProductCreateManyInput
  newProducts: OrderableProductCreateManyWithoutShopNewProductInput
  bestSellerProducts: OrderableProductCreateManyWithoutShopBestSellerInput
}

input ShopCreateOneInput {
  create: ShopCreateInput
  connect: ShopWhereUniqueInput
}

input ShopCreateOneWithoutBestSellerProductsInput {
  create: ShopCreateWithoutBestSellerProductsInput
  connect: ShopWhereUniqueInput
}

input ShopCreateOneWithoutNewProductsInput {
  create: ShopCreateWithoutNewProductsInput
  connect: ShopWhereUniqueInput
}

input ShopCreateWithoutBestSellerProductsInput {
  name: String!
  address: String!
  zipCode: String!
  phoneNumber: String!
  openingHours: String!
  MOTD: String
  resort: ResortCreateManyInput
  products: ProductCreateManyInput
  newProducts: OrderableProductCreateManyWithoutShopNewProductInput
}

input ShopCreateWithoutNewProductsInput {
  name: String!
  address: String!
  zipCode: String!
  phoneNumber: String!
  openingHours: String!
  MOTD: String
  resort: ResortCreateManyInput
  products: ProductCreateManyInput
  bestSellerProducts: OrderableProductCreateManyWithoutShopBestSellerInput
}

"""An edge in a connection."""
type ShopEdge {
  """The item at the end of the edge."""
  node: Shop!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ShopOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  zipCode_ASC
  zipCode_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  openingHours_ASC
  openingHours_DESC
  MOTD_ASC
  MOTD_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ShopPreviousValues {
  id: ID!
  name: String!
  address: String!
  zipCode: String!
  phoneNumber: String!
  openingHours: String!
  MOTD: String
}

type ShopSubscriptionPayload {
  mutation: MutationType!
  node: Shop
  updatedFields: [String!]
  previousValues: ShopPreviousValues
}

input ShopSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ShopSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ShopSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ShopSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ShopWhereInput
}

input ShopUpdateDataInput {
  name: String
  address: String
  zipCode: String
  phoneNumber: String
  openingHours: String
  MOTD: String
  resort: ResortUpdateManyInput
  products: ProductUpdateManyInput
  newProducts: OrderableProductUpdateManyWithoutShopNewProductInput
  bestSellerProducts: OrderableProductUpdateManyWithoutShopBestSellerInput
}

input ShopUpdateInput {
  name: String
  address: String
  zipCode: String
  phoneNumber: String
  openingHours: String
  MOTD: String
  resort: ResortUpdateManyInput
  products: ProductUpdateManyInput
  newProducts: OrderableProductUpdateManyWithoutShopNewProductInput
  bestSellerProducts: OrderableProductUpdateManyWithoutShopBestSellerInput
}

input ShopUpdateOneInput {
  create: ShopCreateInput
  connect: ShopWhereUniqueInput
  delete: Boolean
  update: ShopUpdateDataInput
  upsert: ShopUpsertNestedInput
}

input ShopUpdateOneWithoutBestSellerProductsInput {
  create: ShopCreateWithoutBestSellerProductsInput
  connect: ShopWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ShopUpdateWithoutBestSellerProductsDataInput
  upsert: ShopUpsertWithoutBestSellerProductsInput
}

input ShopUpdateOneWithoutNewProductsInput {
  create: ShopCreateWithoutNewProductsInput
  connect: ShopWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ShopUpdateWithoutNewProductsDataInput
  upsert: ShopUpsertWithoutNewProductsInput
}

input ShopUpdateWithoutBestSellerProductsDataInput {
  name: String
  address: String
  zipCode: String
  phoneNumber: String
  openingHours: String
  MOTD: String
  resort: ResortUpdateManyInput
  products: ProductUpdateManyInput
  newProducts: OrderableProductUpdateManyWithoutShopNewProductInput
}

input ShopUpdateWithoutNewProductsDataInput {
  name: String
  address: String
  zipCode: String
  phoneNumber: String
  openingHours: String
  MOTD: String
  resort: ResortUpdateManyInput
  products: ProductUpdateManyInput
  bestSellerProducts: OrderableProductUpdateManyWithoutShopBestSellerInput
}

input ShopUpsertNestedInput {
  update: ShopUpdateDataInput!
  create: ShopCreateInput!
}

input ShopUpsertWithoutBestSellerProductsInput {
  update: ShopUpdateWithoutBestSellerProductsDataInput!
  create: ShopCreateWithoutBestSellerProductsInput!
}

input ShopUpsertWithoutNewProductsInput {
  update: ShopUpdateWithoutNewProductsDataInput!
  create: ShopCreateWithoutNewProductsInput!
}

input ShopWhereInput {
  """Logical AND on all given filters."""
  AND: [ShopWhereInput!]

  """Logical OR on all given filters."""
  OR: [ShopWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ShopWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  zipCode: String

  """All values that are not equal to given value."""
  zipCode_not: String

  """All values that are contained in given list."""
  zipCode_in: [String!]

  """All values that are not contained in given list."""
  zipCode_not_in: [String!]

  """All values less than the given value."""
  zipCode_lt: String

  """All values less than or equal the given value."""
  zipCode_lte: String

  """All values greater than the given value."""
  zipCode_gt: String

  """All values greater than or equal the given value."""
  zipCode_gte: String

  """All values containing the given string."""
  zipCode_contains: String

  """All values not containing the given string."""
  zipCode_not_contains: String

  """All values starting with the given string."""
  zipCode_starts_with: String

  """All values not starting with the given string."""
  zipCode_not_starts_with: String

  """All values ending with the given string."""
  zipCode_ends_with: String

  """All values not ending with the given string."""
  zipCode_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  openingHours: String

  """All values that are not equal to given value."""
  openingHours_not: String

  """All values that are contained in given list."""
  openingHours_in: [String!]

  """All values that are not contained in given list."""
  openingHours_not_in: [String!]

  """All values less than the given value."""
  openingHours_lt: String

  """All values less than or equal the given value."""
  openingHours_lte: String

  """All values greater than the given value."""
  openingHours_gt: String

  """All values greater than or equal the given value."""
  openingHours_gte: String

  """All values containing the given string."""
  openingHours_contains: String

  """All values not containing the given string."""
  openingHours_not_contains: String

  """All values starting with the given string."""
  openingHours_starts_with: String

  """All values not starting with the given string."""
  openingHours_not_starts_with: String

  """All values ending with the given string."""
  openingHours_ends_with: String

  """All values not ending with the given string."""
  openingHours_not_ends_with: String
  MOTD: String

  """All values that are not equal to given value."""
  MOTD_not: String

  """All values that are contained in given list."""
  MOTD_in: [String!]

  """All values that are not contained in given list."""
  MOTD_not_in: [String!]

  """All values less than the given value."""
  MOTD_lt: String

  """All values less than or equal the given value."""
  MOTD_lte: String

  """All values greater than the given value."""
  MOTD_gt: String

  """All values greater than or equal the given value."""
  MOTD_gte: String

  """All values containing the given string."""
  MOTD_contains: String

  """All values not containing the given string."""
  MOTD_not_contains: String

  """All values starting with the given string."""
  MOTD_starts_with: String

  """All values not starting with the given string."""
  MOTD_not_starts_with: String

  """All values ending with the given string."""
  MOTD_ends_with: String

  """All values not ending with the given string."""
  MOTD_not_ends_with: String
  resort_every: ResortWhereInput
  resort_some: ResortWhereInput
  resort_none: ResortWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  newProducts_every: OrderableProductWhereInput
  newProducts_some: OrderableProductWhereInput
  newProducts_none: OrderableProductWhereInput
  bestSellerProducts_every: OrderableProductWhereInput
  bestSellerProducts_some: OrderableProductWhereInput
  bestSellerProducts_none: OrderableProductWhereInput
}

input ShopWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  brand(where: BrandSubscriptionWhereInput): BrandSubscriptionPayload
  attribute(where: AttributeSubscriptionWhereInput): AttributeSubscriptionPayload
  selectedOption(where: SelectedOptionSubscriptionWhereInput): SelectedOptionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderableProduct(where: OrderableProductSubscriptionWhereInput): OrderableProductSubscriptionPayload
  optionValue(where: OptionValueSubscriptionWhereInput): OptionValueSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  orderLineItem(where: OrderLineItemSubscriptionWhereInput): OrderLineItemSubscriptionPayload
  variant(where: VariantSubscriptionWhereInput): VariantSubscriptionPayload
  shop(where: ShopSubscriptionWhereInput): ShopSubscriptionPayload
  userAdmin(where: UserAdminSubscriptionWhereInput): UserAdminSubscriptionPayload
  resort(where: ResortSubscriptionWhereInput): ResortSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  option(where: OptionSubscriptionWhereInput): OptionSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  firstName: String
  lastName: String
  role: Role!
  cart(where: OrderLineItemWhereInput, orderBy: OrderLineItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderLineItem!]
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  oneSignalUserId: String
}

type UserAdmin implements Node {
  id: ID!
  email: String!
  password: String!
  firstName: String
  lastName: String
  selectedShop(where: ShopWhereInput): Shop!
  name: String!
  description: String
  category(where: CategoryWhereInput): Category!
  imageUrl: String
  role: Role!
  stripeCustomerId: String
  oneSignalUserId: String
}

"""A connection to a list of items."""
type UserAdminConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserAdminEdge]!
  aggregate: AggregateUserAdmin!
}

input UserAdminCreateInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  name: String!
  description: String
  imageUrl: String
  role: Role
  stripeCustomerId: String
  oneSignalUserId: String
  selectedShop: ShopCreateOneInput!
  category: CategoryCreateOneInput!
}

input UserAdminCreateOneInput {
  create: UserAdminCreateInput
  connect: UserAdminWhereUniqueInput
}

"""An edge in a connection."""
type UserAdminEdge {
  """The item at the end of the edge."""
  node: UserAdmin!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserAdminOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  imageUrl_ASC
  imageUrl_DESC
  role_ASC
  role_DESC
  stripeCustomerId_ASC
  stripeCustomerId_DESC
  oneSignalUserId_ASC
  oneSignalUserId_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserAdminPreviousValues {
  id: ID!
  email: String!
  password: String!
  firstName: String
  lastName: String
  name: String!
  description: String
  imageUrl: String
  role: Role!
  stripeCustomerId: String
  oneSignalUserId: String
}

type UserAdminSubscriptionPayload {
  mutation: MutationType!
  node: UserAdmin
  updatedFields: [String!]
  previousValues: UserAdminPreviousValues
}

input UserAdminSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserAdminSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserAdminSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserAdminSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserAdminWhereInput
}

input UserAdminUpdateDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  name: String
  description: String
  imageUrl: String
  role: Role
  stripeCustomerId: String
  oneSignalUserId: String
  selectedShop: ShopUpdateOneInput
  category: CategoryUpdateOneInput
}

input UserAdminUpdateInput {
  email: String
  password: String
  firstName: String
  lastName: String
  name: String
  description: String
  imageUrl: String
  role: Role
  stripeCustomerId: String
  oneSignalUserId: String
  selectedShop: ShopUpdateOneInput
  category: CategoryUpdateOneInput
}

input UserAdminUpdateOneInput {
  create: UserAdminCreateInput
  connect: UserAdminWhereUniqueInput
  delete: Boolean
  update: UserAdminUpdateDataInput
  upsert: UserAdminUpsertNestedInput
}

input UserAdminUpsertNestedInput {
  update: UserAdminUpdateDataInput!
  create: UserAdminCreateInput!
}

input UserAdminWhereInput {
  """Logical AND on all given filters."""
  AND: [UserAdminWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserAdminWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserAdminWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  imageUrl: String

  """All values that are not equal to given value."""
  imageUrl_not: String

  """All values that are contained in given list."""
  imageUrl_in: [String!]

  """All values that are not contained in given list."""
  imageUrl_not_in: [String!]

  """All values less than the given value."""
  imageUrl_lt: String

  """All values less than or equal the given value."""
  imageUrl_lte: String

  """All values greater than the given value."""
  imageUrl_gt: String

  """All values greater than or equal the given value."""
  imageUrl_gte: String

  """All values containing the given string."""
  imageUrl_contains: String

  """All values not containing the given string."""
  imageUrl_not_contains: String

  """All values starting with the given string."""
  imageUrl_starts_with: String

  """All values not starting with the given string."""
  imageUrl_not_starts_with: String

  """All values ending with the given string."""
  imageUrl_ends_with: String

  """All values not ending with the given string."""
  imageUrl_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  stripeCustomerId: String

  """All values that are not equal to given value."""
  stripeCustomerId_not: String

  """All values that are contained in given list."""
  stripeCustomerId_in: [String!]

  """All values that are not contained in given list."""
  stripeCustomerId_not_in: [String!]

  """All values less than the given value."""
  stripeCustomerId_lt: String

  """All values less than or equal the given value."""
  stripeCustomerId_lte: String

  """All values greater than the given value."""
  stripeCustomerId_gt: String

  """All values greater than or equal the given value."""
  stripeCustomerId_gte: String

  """All values containing the given string."""
  stripeCustomerId_contains: String

  """All values not containing the given string."""
  stripeCustomerId_not_contains: String

  """All values starting with the given string."""
  stripeCustomerId_starts_with: String

  """All values not starting with the given string."""
  stripeCustomerId_not_starts_with: String

  """All values ending with the given string."""
  stripeCustomerId_ends_with: String

  """All values not ending with the given string."""
  stripeCustomerId_not_ends_with: String
  oneSignalUserId: String

  """All values that are not equal to given value."""
  oneSignalUserId_not: String

  """All values that are contained in given list."""
  oneSignalUserId_in: [String!]

  """All values that are not contained in given list."""
  oneSignalUserId_not_in: [String!]

  """All values less than the given value."""
  oneSignalUserId_lt: String

  """All values less than or equal the given value."""
  oneSignalUserId_lte: String

  """All values greater than the given value."""
  oneSignalUserId_gt: String

  """All values greater than or equal the given value."""
  oneSignalUserId_gte: String

  """All values containing the given string."""
  oneSignalUserId_contains: String

  """All values not containing the given string."""
  oneSignalUserId_not_contains: String

  """All values starting with the given string."""
  oneSignalUserId_starts_with: String

  """All values not starting with the given string."""
  oneSignalUserId_not_starts_with: String

  """All values ending with the given string."""
  oneSignalUserId_ends_with: String

  """All values not ending with the given string."""
  oneSignalUserId_not_ends_with: String
  selectedShop: ShopWhereInput
  category: CategoryWhereInput
}

input UserAdminWhereUniqueInput {
  id: ID
  email: String
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  role: Role
  oneSignalUserId: String
  cart: OrderLineItemCreateManyWithoutOwnerInput
  orders: OrderCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCartInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  role: Role
  oneSignalUserId: String
  orders: OrderCreateManyWithoutOwnerInput
}

input UserCreateWithoutOrdersInput {
  email: String!
  password: String!
  firstName: String
  lastName: String
  role: Role
  oneSignalUserId: String
  cart: OrderLineItemCreateManyWithoutOwnerInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  role_ASC
  role_DESC
  oneSignalUserId_ASC
  oneSignalUserId_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  firstName: String
  lastName: String
  role: Role!
  oneSignalUserId: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  firstName: String
  lastName: String
  role: Role
  oneSignalUserId: String
  cart: OrderLineItemUpdateManyWithoutOwnerInput
  orders: OrderUpdateManyWithoutOwnerInput
}

input UserUpdateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
}

input UserUpdateOneWithoutOrdersInput {
  create: UserCreateWithoutOrdersInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutOrdersDataInput
  upsert: UserUpsertWithoutOrdersInput
}

input UserUpdateWithoutCartDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  role: Role
  oneSignalUserId: String
  orders: OrderUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutOrdersDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
  role: Role
  oneSignalUserId: String
  cart: OrderLineItemUpdateManyWithoutOwnerInput
}

input UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput!
  create: UserCreateWithoutCartInput!
}

input UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput!
  create: UserCreateWithoutOrdersInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  oneSignalUserId: String

  """All values that are not equal to given value."""
  oneSignalUserId_not: String

  """All values that are contained in given list."""
  oneSignalUserId_in: [String!]

  """All values that are not contained in given list."""
  oneSignalUserId_not_in: [String!]

  """All values less than the given value."""
  oneSignalUserId_lt: String

  """All values less than or equal the given value."""
  oneSignalUserId_lte: String

  """All values greater than the given value."""
  oneSignalUserId_gt: String

  """All values greater than or equal the given value."""
  oneSignalUserId_gte: String

  """All values containing the given string."""
  oneSignalUserId_contains: String

  """All values not containing the given string."""
  oneSignalUserId_not_contains: String

  """All values starting with the given string."""
  oneSignalUserId_starts_with: String

  """All values not starting with the given string."""
  oneSignalUserId_not_starts_with: String

  """All values ending with the given string."""
  oneSignalUserId_ends_with: String

  """All values not ending with the given string."""
  oneSignalUserId_not_ends_with: String
  cart_every: OrderLineItemWhereInput
  cart_some: OrderLineItemWhereInput
  cart_none: OrderLineItemWhereInput
  orders_every: OrderWhereInput
  orders_some: OrderWhereInput
  orders_none: OrderWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Variant implements Node {
  id: ID!
  deletedAt: DateTime
  selectedOptions(where: SelectedOptionWhereInput, orderBy: SelectedOptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SelectedOption!]
  price: Float!
  available: Boolean!
  product(where: ProductWhereInput): Product
}

"""A connection to a list of items."""
type VariantConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VariantEdge]!
  aggregate: AggregateVariant!
}

input VariantCreateInput {
  deletedAt: DateTime
  price: Float!
  available: Boolean!
  selectedOptions: SelectedOptionCreateManyWithoutVariantInput
  product: ProductCreateOneWithoutVariantsInput
}

input VariantCreateManyWithoutProductInput {
  create: [VariantCreateWithoutProductInput!]
  connect: [VariantWhereUniqueInput!]
}

input VariantCreateOneInput {
  create: VariantCreateInput
  connect: VariantWhereUniqueInput
}

input VariantCreateOneWithoutSelectedOptionsInput {
  create: VariantCreateWithoutSelectedOptionsInput
  connect: VariantWhereUniqueInput
}

input VariantCreateWithoutProductInput {
  deletedAt: DateTime
  price: Float!
  available: Boolean!
  selectedOptions: SelectedOptionCreateManyWithoutVariantInput
}

input VariantCreateWithoutSelectedOptionsInput {
  deletedAt: DateTime
  price: Float!
  available: Boolean!
  product: ProductCreateOneWithoutVariantsInput
}

"""An edge in a connection."""
type VariantEdge {
  """The item at the end of the edge."""
  node: Variant!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VariantOrderByInput {
  id_ASC
  id_DESC
  deletedAt_ASC
  deletedAt_DESC
  price_ASC
  price_DESC
  available_ASC
  available_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type VariantPreviousValues {
  id: ID!
  deletedAt: DateTime
  price: Float!
  available: Boolean!
}

type VariantSubscriptionPayload {
  mutation: MutationType!
  node: Variant
  updatedFields: [String!]
  previousValues: VariantPreviousValues
}

input VariantSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VariantSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [VariantSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VariantSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VariantWhereInput
}

input VariantUpdateDataInput {
  deletedAt: DateTime
  price: Float
  available: Boolean
  selectedOptions: SelectedOptionUpdateManyWithoutVariantInput
  product: ProductUpdateOneWithoutVariantsInput
}

input VariantUpdateInput {
  deletedAt: DateTime
  price: Float
  available: Boolean
  selectedOptions: SelectedOptionUpdateManyWithoutVariantInput
  product: ProductUpdateOneWithoutVariantsInput
}

input VariantUpdateManyWithoutProductInput {
  create: [VariantCreateWithoutProductInput!]
  connect: [VariantWhereUniqueInput!]
  disconnect: [VariantWhereUniqueInput!]
  delete: [VariantWhereUniqueInput!]
  update: [VariantUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [VariantUpsertWithWhereUniqueWithoutProductInput!]
}

input VariantUpdateOneInput {
  create: VariantCreateInput
  connect: VariantWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: VariantUpdateDataInput
  upsert: VariantUpsertNestedInput
}

input VariantUpdateOneWithoutSelectedOptionsInput {
  create: VariantCreateWithoutSelectedOptionsInput
  connect: VariantWhereUniqueInput
  delete: Boolean
  update: VariantUpdateWithoutSelectedOptionsDataInput
  upsert: VariantUpsertWithoutSelectedOptionsInput
}

input VariantUpdateWithoutProductDataInput {
  deletedAt: DateTime
  price: Float
  available: Boolean
  selectedOptions: SelectedOptionUpdateManyWithoutVariantInput
}

input VariantUpdateWithoutSelectedOptionsDataInput {
  deletedAt: DateTime
  price: Float
  available: Boolean
  product: ProductUpdateOneWithoutVariantsInput
}

input VariantUpdateWithWhereUniqueWithoutProductInput {
  where: VariantWhereUniqueInput!
  data: VariantUpdateWithoutProductDataInput!
}

input VariantUpsertNestedInput {
  update: VariantUpdateDataInput!
  create: VariantCreateInput!
}

input VariantUpsertWithoutSelectedOptionsInput {
  update: VariantUpdateWithoutSelectedOptionsDataInput!
  create: VariantCreateWithoutSelectedOptionsInput!
}

input VariantUpsertWithWhereUniqueWithoutProductInput {
  where: VariantWhereUniqueInput!
  update: VariantUpdateWithoutProductDataInput!
  create: VariantCreateWithoutProductInput!
}

input VariantWhereInput {
  """Logical AND on all given filters."""
  AND: [VariantWhereInput!]

  """Logical OR on all given filters."""
  OR: [VariantWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VariantWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  deletedAt: DateTime

  """All values that are not equal to given value."""
  deletedAt_not: DateTime

  """All values that are contained in given list."""
  deletedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  deletedAt_not_in: [DateTime!]

  """All values less than the given value."""
  deletedAt_lt: DateTime

  """All values less than or equal the given value."""
  deletedAt_lte: DateTime

  """All values greater than the given value."""
  deletedAt_gt: DateTime

  """All values greater than or equal the given value."""
  deletedAt_gte: DateTime
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  available: Boolean

  """All values that are not equal to given value."""
  available_not: Boolean
  selectedOptions_every: SelectedOptionWhereInput
  selectedOptions_some: SelectedOptionWhereInput
  selectedOptions_none: SelectedOptionWhereInput
  product: ProductWhereInput
}

input VariantWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type OrderableProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'position_ASC' |
  'position_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OptionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AttributeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type Role =   'USER' |
  'ADMIN'

export type ShopOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'address_ASC' |
  'address_DESC' |
  'zipCode_ASC' |
  'zipCode_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'openingHours_ASC' |
  'openingHours_DESC' |
  'MOTD_ASC' |
  'MOTD_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SelectedOptionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OrderOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC' |
  'totalRefunded_ASC' |
  'totalRefunded_DESC' |
  'totalTax_ASC' |
  'totalTax_DESC' |
  'orderStatus_ASC' |
  'orderStatus_DESC'

export type VariantOrderByInput =   'id_ASC' |
  'id_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'price_ASC' |
  'price_DESC' |
  'available_ASC' |
  'available_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'role_ASC' |
  'role_DESC' |
  'oneSignalUserId_ASC' |
  'oneSignalUserId_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BrandOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OptionValueOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ResortOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'address_ASC' |
  'address_DESC' |
  'zipCode_ASC' |
  'zipCode_DESC' |
  'city_ASC' |
  'city_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'SKU_ASC' |
  'SKU_DESC' |
  'displayPrice_ASC' |
  'displayPrice_DESC' |
  'available_ASC' |
  'available_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OrderStatus =   'SUBMITTED' |
  'PAID' |
  'PREPARED' |
  'FAILED'

export type OrderLineItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'deletedAt_ASC' |
  'deletedAt_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'url_ASC' |
  'url_DESC' |
  'contentType_ASC' |
  'contentType_DESC' |
  'secret_ASC' |
  'secret_DESC' |
  'size_ASC' |
  'size_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserAdminOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'imageUrl_ASC' |
  'imageUrl_DESC' |
  'role_ASC' |
  'role_DESC' |
  'stripeCustomerId_ASC' |
  'stripeCustomerId_DESC' |
  'oneSignalUserId_ASC' |
  'oneSignalUserId_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface OrderLineItemCreateManyInput {
  create?: OrderLineItemCreateInput[] | OrderLineItemCreateInput
  connect?: OrderLineItemWhereUniqueInput[] | OrderLineItemWhereUniqueInput
}

export interface BrandWhereInput {
  AND?: BrandWhereInput[] | BrandWhereInput
  OR?: BrandWhereInput[] | BrandWhereInput
  NOT?: BrandWhereInput[] | BrandWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  category?: CategoryWhereInput
  shop?: ShopWhereInput
}

export interface ProductCreateInput {
  deletedAt?: DateTime
  SKU?: String
  displayPrice: Float
  available: Boolean
  User: UserAdminCreateOneInput
  category: CategoryCreateOneInput
  options?: OptionCreateManyInput
  unavailableOptionsValues?: OptionValueCreateManyInput
  variants?: VariantCreateManyWithoutProductInput
  attributes?: AttributeCreateManyWithoutProductsInput
  orderables?: OrderableProductCreateManyWithoutProductInput
}

export interface OrderableProductUpdateWithWhereUniqueWithoutShopBestSellerInput {
  where: OrderableProductWhereUniqueInput
  data: OrderableProductUpdateWithoutShopBestSellerDataInput
}

export interface UserAdminCreateOneInput {
  create?: UserAdminCreateInput
  connect?: UserAdminWhereUniqueInput
}

export interface CategoryUpdateOneInput {
  create?: CategoryCreateInput
  connect?: CategoryWhereUniqueInput
  delete?: Boolean
  update?: CategoryUpdateDataInput
  upsert?: CategoryUpsertNestedInput
}

export interface UserAdminCreateInput {
  email: String
  password: String
  firstName?: String
  lastName?: String
  name: String
  description?: String
  imageUrl?: String
  role?: Role
  stripeCustomerId?: String
  oneSignalUserId?: String
  selectedShop: ShopCreateOneInput
  category: CategoryCreateOneInput
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CategoryWhereInput
}

export interface OptionCreateManyInput {
  create?: OptionCreateInput[] | OptionCreateInput
  connect?: OptionWhereUniqueInput[] | OptionWhereUniqueInput
}

export interface UserAdminSubscriptionWhereInput {
  AND?: UserAdminSubscriptionWhereInput[] | UserAdminSubscriptionWhereInput
  OR?: UserAdminSubscriptionWhereInput[] | UserAdminSubscriptionWhereInput
  NOT?: UserAdminSubscriptionWhereInput[] | UserAdminSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserAdminWhereInput
}

export interface OptionCreateInput {
  name: String
  values?: OptionValueCreateManyInput
  category: CategoryCreateOneWithoutOptionsInput
  shop: ShopCreateOneInput
}

export interface OrderableProductWhereInput {
  AND?: OrderableProductWhereInput[] | OrderableProductWhereInput
  OR?: OrderableProductWhereInput[] | OrderableProductWhereInput
  NOT?: OrderableProductWhereInput[] | OrderableProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  position?: Int
  position_not?: Int
  position_in?: Int[] | Int
  position_not_in?: Int[] | Int
  position_lt?: Int
  position_lte?: Int
  position_gt?: Int
  position_gte?: Int
  product?: ProductWhereInput
  shopBestSeller?: ShopWhereInput
  shopNewProduct?: ShopWhereInput
}

export interface CategoryCreateOneWithoutOptionsInput {
  create?: CategoryCreateWithoutOptionsInput
  connect?: CategoryWhereUniqueInput
}

export interface AttributeWhereInput {
  AND?: AttributeWhereInput[] | AttributeWhereInput
  OR?: AttributeWhereInput[] | AttributeWhereInput
  NOT?: AttributeWhereInput[] | AttributeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  value?: String
  value_not?: String
  value_in?: String[] | String
  value_not_in?: String[] | String
  value_lt?: String
  value_lte?: String
  value_gt?: String
  value_gte?: String
  value_contains?: String
  value_not_contains?: String
  value_starts_with?: String
  value_not_starts_with?: String
  value_ends_with?: String
  value_not_ends_with?: String
  category?: CategoryWhereInput
  shop?: ShopWhereInput
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
}

export interface CategoryCreateWithoutOptionsInput {
  name: String
  shop: ShopCreateOneInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface VariantCreateManyWithoutProductInput {
  create?: VariantCreateWithoutProductInput[] | VariantCreateWithoutProductInput
  connect?: VariantWhereUniqueInput[] | VariantWhereUniqueInput
}

export interface OptionValueSubscriptionWhereInput {
  AND?: OptionValueSubscriptionWhereInput[] | OptionValueSubscriptionWhereInput
  OR?: OptionValueSubscriptionWhereInput[] | OptionValueSubscriptionWhereInput
  NOT?: OptionValueSubscriptionWhereInput[] | OptionValueSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OptionValueWhereInput
}

export interface VariantCreateWithoutProductInput {
  deletedAt?: DateTime
  price: Float
  available: Boolean
  selectedOptions?: SelectedOptionCreateManyWithoutVariantInput
}

export interface OrderableProductSubscriptionWhereInput {
  AND?: OrderableProductSubscriptionWhereInput[] | OrderableProductSubscriptionWhereInput
  OR?: OrderableProductSubscriptionWhereInput[] | OrderableProductSubscriptionWhereInput
  NOT?: OrderableProductSubscriptionWhereInput[] | OrderableProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderableProductWhereInput
}

export interface SelectedOptionCreateManyWithoutVariantInput {
  create?: SelectedOptionCreateWithoutVariantInput[] | SelectedOptionCreateWithoutVariantInput
  connect?: SelectedOptionWhereUniqueInput[] | SelectedOptionWhereUniqueInput
}

export interface OrderSubscriptionWhereInput {
  AND?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  OR?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  NOT?: OrderSubscriptionWhereInput[] | OrderSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderWhereInput
}

export interface SelectedOptionCreateWithoutVariantInput {
  deletedAt?: DateTime
  option: OptionCreateOneInput
  value: OptionValueCreateOneInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface OptionCreateOneInput {
  create?: OptionCreateInput
  connect?: OptionWhereUniqueInput
}

export interface OrderLineItemWhereInput {
  AND?: OrderLineItemWhereInput[] | OrderLineItemWhereInput
  OR?: OrderLineItemWhereInput[] | OrderLineItemWhereInput
  NOT?: OrderLineItemWhereInput[] | OrderLineItemWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  variant?: VariantWhereInput
  owner?: UserWhereInput
  shop?: ShopWhereInput
}

export interface OptionValueCreateOneInput {
  create?: OptionValueCreateInput
  connect?: OptionValueWhereUniqueInput
}

export interface SelectedOptionSubscriptionWhereInput {
  AND?: SelectedOptionSubscriptionWhereInput[] | SelectedOptionSubscriptionWhereInput
  OR?: SelectedOptionSubscriptionWhereInput[] | SelectedOptionSubscriptionWhereInput
  NOT?: SelectedOptionSubscriptionWhereInput[] | SelectedOptionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SelectedOptionWhereInput
}

export interface AttributeCreateManyWithoutProductsInput {
  create?: AttributeCreateWithoutProductsInput[] | AttributeCreateWithoutProductsInput
  connect?: AttributeWhereUniqueInput[] | AttributeWhereUniqueInput
}

export interface BrandSubscriptionWhereInput {
  AND?: BrandSubscriptionWhereInput[] | BrandSubscriptionWhereInput
  OR?: BrandSubscriptionWhereInput[] | BrandSubscriptionWhereInput
  NOT?: BrandSubscriptionWhereInput[] | BrandSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BrandWhereInput
}

export interface AttributeCreateWithoutProductsInput {
  value: String
  category: CategoryCreateOneInput
  shop: ShopCreateOneInput
}

export interface OptionUpdateInput {
  name?: String
  values?: OptionValueUpdateManyInput
  category?: CategoryUpdateOneWithoutOptionsInput
  shop?: ShopUpdateOneInput
}

export interface OrderableProductCreateManyWithoutProductInput {
  create?: OrderableProductCreateWithoutProductInput[] | OrderableProductCreateWithoutProductInput
  connect?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
}

export interface CategoryUpdateInput {
  name?: String
  options?: OptionUpdateManyWithoutCategoryInput
  shop?: ShopUpdateOneInput
}

export interface OrderableProductCreateWithoutProductInput {
  position: Int
  shopBestSeller?: ShopCreateOneWithoutBestSellerProductsInput
  shopNewProduct?: ShopCreateOneWithoutNewProductsInput
}

export interface ShopWhereInput {
  AND?: ShopWhereInput[] | ShopWhereInput
  OR?: ShopWhereInput[] | ShopWhereInput
  NOT?: ShopWhereInput[] | ShopWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  zipCode?: String
  zipCode_not?: String
  zipCode_in?: String[] | String
  zipCode_not_in?: String[] | String
  zipCode_lt?: String
  zipCode_lte?: String
  zipCode_gt?: String
  zipCode_gte?: String
  zipCode_contains?: String
  zipCode_not_contains?: String
  zipCode_starts_with?: String
  zipCode_not_starts_with?: String
  zipCode_ends_with?: String
  zipCode_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  openingHours?: String
  openingHours_not?: String
  openingHours_in?: String[] | String
  openingHours_not_in?: String[] | String
  openingHours_lt?: String
  openingHours_lte?: String
  openingHours_gt?: String
  openingHours_gte?: String
  openingHours_contains?: String
  openingHours_not_contains?: String
  openingHours_starts_with?: String
  openingHours_not_starts_with?: String
  openingHours_ends_with?: String
  openingHours_not_ends_with?: String
  MOTD?: String
  MOTD_not?: String
  MOTD_in?: String[] | String
  MOTD_not_in?: String[] | String
  MOTD_lt?: String
  MOTD_lte?: String
  MOTD_gt?: String
  MOTD_gte?: String
  MOTD_contains?: String
  MOTD_not_contains?: String
  MOTD_starts_with?: String
  MOTD_not_starts_with?: String
  MOTD_ends_with?: String
  MOTD_not_ends_with?: String
  resort_every?: ResortWhereInput
  resort_some?: ResortWhereInput
  resort_none?: ResortWhereInput
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
  newProducts_every?: OrderableProductWhereInput
  newProducts_some?: OrderableProductWhereInput
  newProducts_none?: OrderableProductWhereInput
  bestSellerProducts_every?: OrderableProductWhereInput
  bestSellerProducts_some?: OrderableProductWhereInput
  bestSellerProducts_none?: OrderableProductWhereInput
}

export interface ShopCreateOneWithoutBestSellerProductsInput {
  create?: ShopCreateWithoutBestSellerProductsInput
  connect?: ShopWhereUniqueInput
}

export interface OptionValueWhereInput {
  AND?: OptionValueWhereInput[] | OptionValueWhereInput
  OR?: OptionValueWhereInput[] | OptionValueWhereInput
  NOT?: OptionValueWhereInput[] | OptionValueWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface ShopCreateWithoutBestSellerProductsInput {
  name: String
  address: String
  zipCode: String
  phoneNumber: String
  openingHours: String
  MOTD?: String
  resort?: ResortCreateManyInput
  products?: ProductCreateManyInput
  newProducts?: OrderableProductCreateManyWithoutShopNewProductInput
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput
  OR?: CategoryWhereInput[] | CategoryWhereInput
  NOT?: CategoryWhereInput[] | CategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  options_every?: OptionWhereInput
  options_some?: OptionWhereInput
  options_none?: OptionWhereInput
  shop?: ShopWhereInput
}

export interface OrderableProductCreateManyWithoutShopNewProductInput {
  create?: OrderableProductCreateWithoutShopNewProductInput[] | OrderableProductCreateWithoutShopNewProductInput
  connect?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
}

export interface AttributeWhereUniqueInput {
  id?: ID_Input
}

export interface OrderableProductCreateWithoutShopNewProductInput {
  position: Int
  product: ProductCreateOneWithoutOrderablesInput
  shopBestSeller?: ShopCreateOneWithoutBestSellerProductsInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ProductCreateOneWithoutOrderablesInput {
  create?: ProductCreateWithoutOrderablesInput
  connect?: ProductWhereUniqueInput
}

export interface OrderWhereUniqueInput {
  id?: ID_Input
}

export interface ProductCreateWithoutOrderablesInput {
  deletedAt?: DateTime
  SKU?: String
  displayPrice: Float
  available: Boolean
  User: UserAdminCreateOneInput
  category: CategoryCreateOneInput
  options?: OptionCreateManyInput
  unavailableOptionsValues?: OptionValueCreateManyInput
  variants?: VariantCreateManyWithoutProductInput
  attributes?: AttributeCreateManyWithoutProductsInput
}

export interface OptionValueWhereUniqueInput {
  id?: ID_Input
}

export interface ShopCreateOneWithoutNewProductsInput {
  create?: ShopCreateWithoutNewProductsInput
  connect?: ShopWhereUniqueInput
}

export interface OrderLineItemWhereUniqueInput {
  id?: ID_Input
}

export interface ShopCreateWithoutNewProductsInput {
  name: String
  address: String
  zipCode: String
  phoneNumber: String
  openingHours: String
  MOTD?: String
  resort?: ResortCreateManyInput
  products?: ProductCreateManyInput
  bestSellerProducts?: OrderableProductCreateManyWithoutShopBestSellerInput
}

export interface ShopWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface OrderableProductCreateManyWithoutShopBestSellerInput {
  create?: OrderableProductCreateWithoutShopBestSellerInput[] | OrderableProductCreateWithoutShopBestSellerInput
  connect?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
}

export interface ResortWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface OrderableProductCreateWithoutShopBestSellerInput {
  position: Int
  product: ProductCreateOneWithoutOrderablesInput
  shopNewProduct?: ShopCreateOneWithoutNewProductsInput
}

export interface OptionWhereUniqueInput {
  id?: ID_Input
}

export interface AttributeCreateInput {
  value: String
  category: CategoryCreateOneInput
  shop: ShopCreateOneInput
  products?: ProductCreateManyWithoutAttributesInput
}

export interface ShopUpdateInput {
  name?: String
  address?: String
  zipCode?: String
  phoneNumber?: String
  openingHours?: String
  MOTD?: String
  resort?: ResortUpdateManyInput
  products?: ProductUpdateManyInput
  newProducts?: OrderableProductUpdateManyWithoutShopNewProductInput
  bestSellerProducts?: OrderableProductUpdateManyWithoutShopBestSellerInput
}

export interface ProductCreateManyWithoutAttributesInput {
  create?: ProductCreateWithoutAttributesInput[] | ProductCreateWithoutAttributesInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface OrderLineItemUpdateInput {
  deletedAt?: DateTime
  quantity?: Int
  variant?: VariantUpdateOneInput
  owner?: UserUpdateOneWithoutCartInput
  shop?: ShopUpdateOneInput
}

export interface ProductCreateWithoutAttributesInput {
  deletedAt?: DateTime
  SKU?: String
  displayPrice: Float
  available: Boolean
  User: UserAdminCreateOneInput
  category: CategoryCreateOneInput
  options?: OptionCreateManyInput
  unavailableOptionsValues?: OptionValueCreateManyInput
  variants?: VariantCreateManyWithoutProductInput
  orderables?: OrderableProductCreateManyWithoutProductInput
}

export interface OptionValueUpdateInput {
  name?: String
}

export interface SelectedOptionCreateInput {
  deletedAt?: DateTime
  option: OptionCreateOneInput
  variant: VariantCreateOneWithoutSelectedOptionsInput
  value: OptionValueCreateOneInput
}

export interface UserUpsertWithoutOrdersInput {
  update: UserUpdateWithoutOrdersDataInput
  create: UserCreateWithoutOrdersInput
}

export interface VariantCreateOneWithoutSelectedOptionsInput {
  create?: VariantCreateWithoutSelectedOptionsInput
  connect?: VariantWhereUniqueInput
}

export interface UserUpdateOneWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutOrdersDataInput
  upsert?: UserUpsertWithoutOrdersInput
}

export interface VariantCreateWithoutSelectedOptionsInput {
  deletedAt?: DateTime
  price: Float
  available: Boolean
  product?: ProductCreateOneWithoutVariantsInput
}

export interface FileUpdateInput {
  name?: String
  url?: String
  contentType?: String
  secret?: String
  size?: Int
}

export interface ProductCreateOneWithoutVariantsInput {
  create?: ProductCreateWithoutVariantsInput
  connect?: ProductWhereUniqueInput
}

export interface OrderLineItemUpsertWithWhereUniqueNestedInput {
  where: OrderLineItemWhereUniqueInput
  update: OrderLineItemUpdateDataInput
  create: OrderLineItemCreateInput
}

export interface ProductCreateWithoutVariantsInput {
  deletedAt?: DateTime
  SKU?: String
  displayPrice: Float
  available: Boolean
  User: UserAdminCreateOneInput
  category: CategoryCreateOneInput
  options?: OptionCreateManyInput
  unavailableOptionsValues?: OptionValueCreateManyInput
  attributes?: AttributeCreateManyWithoutProductsInput
  orderables?: OrderableProductCreateManyWithoutProductInput
}

export interface UserUpdateWithoutCartDataInput {
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  role?: Role
  oneSignalUserId?: String
  orders?: OrderUpdateManyWithoutOwnerInput
}

export interface UserCreateInput {
  email: String
  password: String
  firstName?: String
  lastName?: String
  role?: Role
  oneSignalUserId?: String
  cart?: OrderLineItemCreateManyWithoutOwnerInput
  orders?: OrderCreateManyWithoutOwnerInput
}

export interface OrderLineItemUpdateDataInput {
  deletedAt?: DateTime
  quantity?: Int
  variant?: VariantUpdateOneInput
  owner?: UserUpdateOneWithoutCartInput
  shop?: ShopUpdateOneInput
}

export interface OrderLineItemCreateManyWithoutOwnerInput {
  create?: OrderLineItemCreateWithoutOwnerInput[] | OrderLineItemCreateWithoutOwnerInput
  connect?: OrderLineItemWhereUniqueInput[] | OrderLineItemWhereUniqueInput
}

export interface OrderLineItemUpdateManyInput {
  create?: OrderLineItemCreateInput[] | OrderLineItemCreateInput
  connect?: OrderLineItemWhereUniqueInput[] | OrderLineItemWhereUniqueInput
  disconnect?: OrderLineItemWhereUniqueInput[] | OrderLineItemWhereUniqueInput
  delete?: OrderLineItemWhereUniqueInput[] | OrderLineItemWhereUniqueInput
  update?: OrderLineItemUpdateWithWhereUniqueNestedInput[] | OrderLineItemUpdateWithWhereUniqueNestedInput
  upsert?: OrderLineItemUpsertWithWhereUniqueNestedInput[] | OrderLineItemUpsertWithWhereUniqueNestedInput
}

export interface OrderLineItemCreateWithoutOwnerInput {
  deletedAt?: DateTime
  quantity: Int
  variant?: VariantCreateOneInput
  shop: ShopCreateOneInput
}

export interface OrderUpdateWithWhereUniqueWithoutOwnerInput {
  where: OrderWhereUniqueInput
  data: OrderUpdateWithoutOwnerDataInput
}

export interface VariantCreateOneInput {
  create?: VariantCreateInput
  connect?: VariantWhereUniqueInput
}

export interface OrderLineItemUpsertWithWhereUniqueWithoutOwnerInput {
  where: OrderLineItemWhereUniqueInput
  update: OrderLineItemUpdateWithoutOwnerDataInput
  create: OrderLineItemCreateWithoutOwnerInput
}

export interface VariantCreateInput {
  deletedAt?: DateTime
  price: Float
  available: Boolean
  selectedOptions?: SelectedOptionCreateManyWithoutVariantInput
  product?: ProductCreateOneWithoutVariantsInput
}

export interface VariantUpdateDataInput {
  deletedAt?: DateTime
  price?: Float
  available?: Boolean
  selectedOptions?: SelectedOptionUpdateManyWithoutVariantInput
  product?: ProductUpdateOneWithoutVariantsInput
}

export interface OrderCreateManyWithoutOwnerInput {
  create?: OrderCreateWithoutOwnerInput[] | OrderCreateWithoutOwnerInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
}

export interface OrderLineItemUpdateWithoutOwnerDataInput {
  deletedAt?: DateTime
  quantity?: Int
  variant?: VariantUpdateOneInput
  shop?: ShopUpdateOneInput
}

export interface OrderCreateWithoutOwnerInput {
  totalPrice: Float
  totalRefunded: Float
  totalTax: Float
  orderStatus: OrderStatus
  lineItems?: OrderLineItemCreateManyInput
}

export interface OrderLineItemUpdateManyWithoutOwnerInput {
  create?: OrderLineItemCreateWithoutOwnerInput[] | OrderLineItemCreateWithoutOwnerInput
  connect?: OrderLineItemWhereUniqueInput[] | OrderLineItemWhereUniqueInput
  disconnect?: OrderLineItemWhereUniqueInput[] | OrderLineItemWhereUniqueInput
  delete?: OrderLineItemWhereUniqueInput[] | OrderLineItemWhereUniqueInput
  update?: OrderLineItemUpdateWithWhereUniqueWithoutOwnerInput[] | OrderLineItemUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: OrderLineItemUpsertWithWhereUniqueWithoutOwnerInput[] | OrderLineItemUpsertWithWhereUniqueWithoutOwnerInput
}

export interface OrderableProductUpsertWithWhereUniqueWithoutShopBestSellerInput {
  where: OrderableProductWhereUniqueInput
  update: OrderableProductUpdateWithoutShopBestSellerDataInput
  create: OrderableProductCreateWithoutShopBestSellerInput
}

export interface VariantUpsertWithoutSelectedOptionsInput {
  update: VariantUpdateWithoutSelectedOptionsDataInput
  create: VariantCreateWithoutSelectedOptionsInput
}

export interface OrderLineItemCreateInput {
  deletedAt?: DateTime
  quantity: Int
  variant?: VariantCreateOneInput
  owner?: UserCreateOneWithoutCartInput
  shop: ShopCreateOneInput
}

export interface ProductUpdateWithoutVariantsDataInput {
  deletedAt?: DateTime
  SKU?: String
  displayPrice?: Float
  available?: Boolean
  User?: UserAdminUpdateOneInput
  category?: CategoryUpdateOneInput
  options?: OptionUpdateManyInput
  unavailableOptionsValues?: OptionValueUpdateManyInput
  attributes?: AttributeUpdateManyWithoutProductsInput
  orderables?: OrderableProductUpdateManyWithoutProductInput
}

export interface UserCreateOneWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
}

export interface VariantUpdateWithoutSelectedOptionsDataInput {
  deletedAt?: DateTime
  price?: Float
  available?: Boolean
  product?: ProductUpdateOneWithoutVariantsInput
}

export interface UserCreateWithoutCartInput {
  email: String
  password: String
  firstName?: String
  lastName?: String
  role?: Role
  oneSignalUserId?: String
  orders?: OrderCreateManyWithoutOwnerInput
}

export interface SelectedOptionUpdateInput {
  deletedAt?: DateTime
  option?: OptionUpdateOneInput
  variant?: VariantUpdateOneWithoutSelectedOptionsInput
  value?: OptionValueUpdateOneInput
}

export interface FileCreateInput {
  name: String
  url: String
  contentType: String
  secret: String
  size: Int
}

export interface ProductUpdateWithoutAttributesDataInput {
  deletedAt?: DateTime
  SKU?: String
  displayPrice?: Float
  available?: Boolean
  User?: UserAdminUpdateOneInput
  category?: CategoryUpdateOneInput
  options?: OptionUpdateManyInput
  unavailableOptionsValues?: OptionValueUpdateManyInput
  variants?: VariantUpdateManyWithoutProductInput
  orderables?: OrderableProductUpdateManyWithoutProductInput
}

export interface OrderCreateInput {
  totalPrice: Float
  totalRefunded: Float
  totalTax: Float
  orderStatus: OrderStatus
  owner: UserCreateOneWithoutOrdersInput
  lineItems?: OrderLineItemCreateManyInput
}

export interface ProductUpdateManyWithoutAttributesInput {
  create?: ProductCreateWithoutAttributesInput[] | ProductCreateWithoutAttributesInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutAttributesInput[] | ProductUpdateWithWhereUniqueWithoutAttributesInput
  upsert?: ProductUpsertWithWhereUniqueWithoutAttributesInput[] | ProductUpsertWithWhereUniqueWithoutAttributesInput
}

export interface UserCreateOneWithoutOrdersInput {
  create?: UserCreateWithoutOrdersInput
  connect?: UserWhereUniqueInput
}

export interface CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput
  create: CategoryCreateInput
}

export interface UserCreateWithoutOrdersInput {
  email: String
  password: String
  firstName?: String
  lastName?: String
  role?: Role
  oneSignalUserId?: String
  cart?: OrderLineItemCreateManyWithoutOwnerInput
}

export interface ShopUpsertNestedInput {
  update: ShopUpdateDataInput
  create: ShopCreateInput
}

export interface OrderableProductCreateInput {
  position: Int
  product: ProductCreateOneWithoutOrderablesInput
  shopBestSeller?: ShopCreateOneWithoutBestSellerProductsInput
  shopNewProduct?: ShopCreateOneWithoutNewProductsInput
}

export interface OrderableProductUpsertWithWhereUniqueWithoutProductInput {
  where: OrderableProductWhereUniqueInput
  update: OrderableProductUpdateWithoutProductDataInput
  create: OrderableProductCreateWithoutProductInput
}

export interface BrandUpdateInput {
  name?: String
  category?: CategoryUpdateOneInput
  shop?: ShopUpdateOneInput
}

export interface BrandCreateInput {
  name: String
  category: CategoryCreateOneInput
  shop: ShopCreateOneInput
}

export interface OrderableProductUpdateWithoutShopBestSellerDataInput {
  position?: Int
  product?: ProductUpdateOneWithoutOrderablesInput
  shopNewProduct?: ShopUpdateOneWithoutNewProductsInput
}

export interface CategoryCreateInput {
  name: String
  options?: OptionCreateManyWithoutCategoryInput
  shop: ShopCreateOneInput
}

export interface CategoryUpdateDataInput {
  name?: String
  options?: OptionUpdateManyWithoutCategoryInput
  shop?: ShopUpdateOneInput
}

export interface OptionCreateWithoutCategoryInput {
  name: String
  values?: OptionValueCreateManyInput
  shop: ShopCreateOneInput
}

export interface OptionUpdateManyWithoutCategoryInput {
  create?: OptionCreateWithoutCategoryInput[] | OptionCreateWithoutCategoryInput
  connect?: OptionWhereUniqueInput[] | OptionWhereUniqueInput
  disconnect?: OptionWhereUniqueInput[] | OptionWhereUniqueInput
  delete?: OptionWhereUniqueInput[] | OptionWhereUniqueInput
  update?: OptionUpdateWithWhereUniqueWithoutCategoryInput[] | OptionUpdateWithWhereUniqueWithoutCategoryInput
  upsert?: OptionUpsertWithWhereUniqueWithoutCategoryInput[] | OptionUpsertWithWhereUniqueWithoutCategoryInput
}

export interface OptionValueCreateInput {
  name: String
}

export interface OptionUpdateWithWhereUniqueWithoutCategoryInput {
  where: OptionWhereUniqueInput
  data: OptionUpdateWithoutCategoryDataInput
}

export interface ShopCreateInput {
  name: String
  address: String
  zipCode: String
  phoneNumber: String
  openingHours: String
  MOTD?: String
  resort?: ResortCreateManyInput
  products?: ProductCreateManyInput
  newProducts?: OrderableProductCreateManyWithoutShopNewProductInput
  bestSellerProducts?: OrderableProductCreateManyWithoutShopBestSellerInput
}

export interface OptionUpdateWithoutCategoryDataInput {
  name?: String
  values?: OptionValueUpdateManyInput
  shop?: ShopUpdateOneInput
}

export interface ResortCreateInput {
  name: String
  description?: String
  address?: String
  zipCode?: String
  city: String
  phoneNumber: String
}

export interface OptionValueUpdateManyInput {
  create?: OptionValueCreateInput[] | OptionValueCreateInput
  connect?: OptionValueWhereUniqueInput[] | OptionValueWhereUniqueInput
  disconnect?: OptionValueWhereUniqueInput[] | OptionValueWhereUniqueInput
  delete?: OptionValueWhereUniqueInput[] | OptionValueWhereUniqueInput
  update?: OptionValueUpdateWithWhereUniqueNestedInput[] | OptionValueUpdateWithWhereUniqueNestedInput
  upsert?: OptionValueUpsertWithWhereUniqueNestedInput[] | OptionValueUpsertWithWhereUniqueNestedInput
}

export interface OptionSubscriptionWhereInput {
  AND?: OptionSubscriptionWhereInput[] | OptionSubscriptionWhereInput
  OR?: OptionSubscriptionWhereInput[] | OptionSubscriptionWhereInput
  NOT?: OptionSubscriptionWhereInput[] | OptionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OptionWhereInput
}

export interface OptionValueUpdateWithWhereUniqueNestedInput {
  where: OptionValueWhereUniqueInput
  data: OptionValueUpdateDataInput
}

export interface ShopSubscriptionWhereInput {
  AND?: ShopSubscriptionWhereInput[] | ShopSubscriptionWhereInput
  OR?: ShopSubscriptionWhereInput[] | ShopSubscriptionWhereInput
  NOT?: ShopSubscriptionWhereInput[] | ShopSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ShopWhereInput
}

export interface OptionValueUpdateDataInput {
  name?: String
}

export interface OrderLineItemSubscriptionWhereInput {
  AND?: OrderLineItemSubscriptionWhereInput[] | OrderLineItemSubscriptionWhereInput
  OR?: OrderLineItemSubscriptionWhereInput[] | OrderLineItemSubscriptionWhereInput
  NOT?: OrderLineItemSubscriptionWhereInput[] | OrderLineItemSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrderLineItemWhereInput
}

export interface OptionValueUpsertWithWhereUniqueNestedInput {
  where: OptionValueWhereUniqueInput
  update: OptionValueUpdateDataInput
  create: OptionValueCreateInput
}

export interface VariantWhereInput {
  AND?: VariantWhereInput[] | VariantWhereInput
  OR?: VariantWhereInput[] | VariantWhereInput
  NOT?: VariantWhereInput[] | VariantWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  available?: Boolean
  available_not?: Boolean
  selectedOptions_every?: SelectedOptionWhereInput
  selectedOptions_some?: SelectedOptionWhereInput
  selectedOptions_none?: SelectedOptionWhereInput
  product?: ProductWhereInput
}

export interface ShopUpdateOneInput {
  create?: ShopCreateInput
  connect?: ShopWhereUniqueInput
  delete?: Boolean
  update?: ShopUpdateDataInput
  upsert?: ShopUpsertNestedInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface ShopUpdateDataInput {
  name?: String
  address?: String
  zipCode?: String
  phoneNumber?: String
  openingHours?: String
  MOTD?: String
  resort?: ResortUpdateManyInput
  products?: ProductUpdateManyInput
  newProducts?: OrderableProductUpdateManyWithoutShopNewProductInput
  bestSellerProducts?: OrderableProductUpdateManyWithoutShopBestSellerInput
}

export interface OrderWhereInput {
  AND?: OrderWhereInput[] | OrderWhereInput
  OR?: OrderWhereInput[] | OrderWhereInput
  NOT?: OrderWhereInput[] | OrderWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  totalPrice?: Float
  totalPrice_not?: Float
  totalPrice_in?: Float[] | Float
  totalPrice_not_in?: Float[] | Float
  totalPrice_lt?: Float
  totalPrice_lte?: Float
  totalPrice_gt?: Float
  totalPrice_gte?: Float
  totalRefunded?: Float
  totalRefunded_not?: Float
  totalRefunded_in?: Float[] | Float
  totalRefunded_not_in?: Float[] | Float
  totalRefunded_lt?: Float
  totalRefunded_lte?: Float
  totalRefunded_gt?: Float
  totalRefunded_gte?: Float
  totalTax?: Float
  totalTax_not?: Float
  totalTax_in?: Float[] | Float
  totalTax_not_in?: Float[] | Float
  totalTax_lt?: Float
  totalTax_lte?: Float
  totalTax_gt?: Float
  totalTax_gte?: Float
  orderStatus?: OrderStatus
  orderStatus_not?: OrderStatus
  orderStatus_in?: OrderStatus[] | OrderStatus
  orderStatus_not_in?: OrderStatus[] | OrderStatus
  owner?: UserWhereInput
  lineItems_every?: OrderLineItemWhereInput
  lineItems_some?: OrderLineItemWhereInput
  lineItems_none?: OrderLineItemWhereInput
}

export interface ResortUpdateManyInput {
  create?: ResortCreateInput[] | ResortCreateInput
  connect?: ResortWhereUniqueInput[] | ResortWhereUniqueInput
  disconnect?: ResortWhereUniqueInput[] | ResortWhereUniqueInput
  delete?: ResortWhereUniqueInput[] | ResortWhereUniqueInput
  update?: ResortUpdateWithWhereUniqueNestedInput[] | ResortUpdateWithWhereUniqueNestedInput
  upsert?: ResortUpsertWithWhereUniqueNestedInput[] | ResortUpsertWithWhereUniqueNestedInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  SKU?: String
  SKU_not?: String
  SKU_in?: String[] | String
  SKU_not_in?: String[] | String
  SKU_lt?: String
  SKU_lte?: String
  SKU_gt?: String
  SKU_gte?: String
  SKU_contains?: String
  SKU_not_contains?: String
  SKU_starts_with?: String
  SKU_not_starts_with?: String
  SKU_ends_with?: String
  SKU_not_ends_with?: String
  displayPrice?: Float
  displayPrice_not?: Float
  displayPrice_in?: Float[] | Float
  displayPrice_not_in?: Float[] | Float
  displayPrice_lt?: Float
  displayPrice_lte?: Float
  displayPrice_gt?: Float
  displayPrice_gte?: Float
  available?: Boolean
  available_not?: Boolean
  User?: UserAdminWhereInput
  category?: CategoryWhereInput
  options_every?: OptionWhereInput
  options_some?: OptionWhereInput
  options_none?: OptionWhereInput
  unavailableOptionsValues_every?: OptionValueWhereInput
  unavailableOptionsValues_some?: OptionValueWhereInput
  unavailableOptionsValues_none?: OptionValueWhereInput
  variants_every?: VariantWhereInput
  variants_some?: VariantWhereInput
  variants_none?: VariantWhereInput
  attributes_every?: AttributeWhereInput
  attributes_some?: AttributeWhereInput
  attributes_none?: AttributeWhereInput
  orderables_every?: OrderableProductWhereInput
  orderables_some?: OrderableProductWhereInput
  orderables_none?: OrderableProductWhereInput
}

export interface ResortUpdateWithWhereUniqueNestedInput {
  where: ResortWhereUniqueInput
  data: ResortUpdateDataInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  contentType?: String
  contentType_not?: String
  contentType_in?: String[] | String
  contentType_not_in?: String[] | String
  contentType_lt?: String
  contentType_lte?: String
  contentType_gt?: String
  contentType_gte?: String
  contentType_contains?: String
  contentType_not_contains?: String
  contentType_starts_with?: String
  contentType_not_starts_with?: String
  contentType_ends_with?: String
  contentType_not_ends_with?: String
  secret?: String
  secret_not?: String
  secret_in?: String[] | String
  secret_not_in?: String[] | String
  secret_lt?: String
  secret_lte?: String
  secret_gt?: String
  secret_gte?: String
  secret_contains?: String
  secret_not_contains?: String
  secret_starts_with?: String
  secret_not_starts_with?: String
  secret_ends_with?: String
  secret_not_ends_with?: String
  size?: Int
  size_not?: Int
  size_in?: Int[] | Int
  size_not_in?: Int[] | Int
  size_lt?: Int
  size_lte?: Int
  size_gt?: Int
  size_gte?: Int
}

export interface ResortUpdateDataInput {
  name?: String
  description?: String
  address?: String
  zipCode?: String
  city?: String
  phoneNumber?: String
}

export interface OptionWhereInput {
  AND?: OptionWhereInput[] | OptionWhereInput
  OR?: OptionWhereInput[] | OptionWhereInput
  NOT?: OptionWhereInput[] | OptionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  values_every?: OptionValueWhereInput
  values_some?: OptionValueWhereInput
  values_none?: OptionValueWhereInput
  category?: CategoryWhereInput
  shop?: ShopWhereInput
}

export interface ResortUpsertWithWhereUniqueNestedInput {
  where: ResortWhereUniqueInput
  update: ResortUpdateDataInput
  create: ResortCreateInput
}

export interface SelectedOptionWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpdateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueNestedInput[] | ProductUpdateWithWhereUniqueNestedInput
  upsert?: ProductUpsertWithWhereUniqueNestedInput[] | ProductUpsertWithWhereUniqueNestedInput
}

export interface OrderableProductWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpdateWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateDataInput
}

export interface VariantWhereUniqueInput {
  id?: ID_Input
}

export interface ProductUpdateDataInput {
  deletedAt?: DateTime
  SKU?: String
  displayPrice?: Float
  available?: Boolean
  User?: UserAdminUpdateOneInput
  category?: CategoryUpdateOneInput
  options?: OptionUpdateManyInput
  unavailableOptionsValues?: OptionValueUpdateManyInput
  variants?: VariantUpdateManyWithoutProductInput
  attributes?: AttributeUpdateManyWithoutProductsInput
  orderables?: OrderableProductUpdateManyWithoutProductInput
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input
}

export interface UserAdminUpdateOneInput {
  create?: UserAdminCreateInput
  connect?: UserAdminWhereUniqueInput
  delete?: Boolean
  update?: UserAdminUpdateDataInput
  upsert?: UserAdminUpsertNestedInput
}

export interface VariantUpdateInput {
  deletedAt?: DateTime
  price?: Float
  available?: Boolean
  selectedOptions?: SelectedOptionUpdateManyWithoutVariantInput
  product?: ProductUpdateOneWithoutVariantsInput
}

export interface UserAdminUpdateDataInput {
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  name?: String
  description?: String
  imageUrl?: String
  role?: Role
  stripeCustomerId?: String
  oneSignalUserId?: String
  selectedShop?: ShopUpdateOneInput
  category?: CategoryUpdateOneInput
}

export interface OrderableProductUpdateInput {
  position?: Int
  product?: ProductUpdateOneWithoutOrderablesInput
  shopBestSeller?: ShopUpdateOneWithoutBestSellerProductsInput
  shopNewProduct?: ShopUpdateOneWithoutNewProductsInput
}

export interface UserAdminUpsertNestedInput {
  update: UserAdminUpdateDataInput
  create: UserAdminCreateInput
}

export interface OrderUpdateInput {
  totalPrice?: Float
  totalRefunded?: Float
  totalTax?: Float
  orderStatus?: OrderStatus
  owner?: UserUpdateOneWithoutOrdersInput
  lineItems?: OrderLineItemUpdateManyInput
}

export interface OptionUpdateManyInput {
  create?: OptionCreateInput[] | OptionCreateInput
  connect?: OptionWhereUniqueInput[] | OptionWhereUniqueInput
  disconnect?: OptionWhereUniqueInput[] | OptionWhereUniqueInput
  delete?: OptionWhereUniqueInput[] | OptionWhereUniqueInput
  update?: OptionUpdateWithWhereUniqueNestedInput[] | OptionUpdateWithWhereUniqueNestedInput
  upsert?: OptionUpsertWithWhereUniqueNestedInput[] | OptionUpsertWithWhereUniqueNestedInput
}

export interface UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput
  create: UserCreateWithoutCartInput
}

export interface OptionUpdateWithWhereUniqueNestedInput {
  where: OptionWhereUniqueInput
  data: OptionUpdateDataInput
}

export interface OrderLineItemUpdateWithWhereUniqueNestedInput {
  where: OrderLineItemWhereUniqueInput
  data: OrderLineItemUpdateDataInput
}

export interface OptionUpdateDataInput {
  name?: String
  values?: OptionValueUpdateManyInput
  category?: CategoryUpdateOneWithoutOptionsInput
  shop?: ShopUpdateOneInput
}

export interface OrderUpdateManyWithoutOwnerInput {
  create?: OrderCreateWithoutOwnerInput[] | OrderCreateWithoutOwnerInput
  connect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  disconnect?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  delete?: OrderWhereUniqueInput[] | OrderWhereUniqueInput
  update?: OrderUpdateWithWhereUniqueWithoutOwnerInput[] | OrderUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: OrderUpsertWithWhereUniqueWithoutOwnerInput[] | OrderUpsertWithWhereUniqueWithoutOwnerInput
}

export interface CategoryUpdateOneWithoutOptionsInput {
  create?: CategoryCreateWithoutOptionsInput
  connect?: CategoryWhereUniqueInput
  delete?: Boolean
  update?: CategoryUpdateWithoutOptionsDataInput
  upsert?: CategoryUpsertWithoutOptionsInput
}

export interface VariantUpdateOneInput {
  create?: VariantCreateInput
  connect?: VariantWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: VariantUpdateDataInput
  upsert?: VariantUpsertNestedInput
}

export interface CategoryUpdateWithoutOptionsDataInput {
  name?: String
  shop?: ShopUpdateOneInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  role?: Role
  oneSignalUserId?: String
  cart?: OrderLineItemUpdateManyWithoutOwnerInput
  orders?: OrderUpdateManyWithoutOwnerInput
}

export interface CategoryUpsertWithoutOptionsInput {
  update: CategoryUpdateWithoutOptionsDataInput
  create: CategoryCreateWithoutOptionsInput
}

export interface ProductUpdateOneWithoutVariantsInput {
  create?: ProductCreateWithoutVariantsInput
  connect?: ProductWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductUpdateWithoutVariantsDataInput
  upsert?: ProductUpsertWithoutVariantsInput
}

export interface OptionUpsertWithWhereUniqueNestedInput {
  where: OptionWhereUniqueInput
  update: OptionUpdateDataInput
  create: OptionCreateInput
}

export interface ProductUpsertWithWhereUniqueWithoutAttributesInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutAttributesDataInput
  create: ProductCreateWithoutAttributesInput
}

export interface VariantUpdateManyWithoutProductInput {
  create?: VariantCreateWithoutProductInput[] | VariantCreateWithoutProductInput
  connect?: VariantWhereUniqueInput[] | VariantWhereUniqueInput
  disconnect?: VariantWhereUniqueInput[] | VariantWhereUniqueInput
  delete?: VariantWhereUniqueInput[] | VariantWhereUniqueInput
  update?: VariantUpdateWithWhereUniqueWithoutProductInput[] | VariantUpdateWithWhereUniqueWithoutProductInput
  upsert?: VariantUpsertWithWhereUniqueWithoutProductInput[] | VariantUpsertWithWhereUniqueWithoutProductInput
}

export interface AttributeUpdateInput {
  value?: String
  category?: CategoryUpdateOneInput
  shop?: ShopUpdateOneInput
  products?: ProductUpdateManyWithoutAttributesInput
}

export interface VariantUpdateWithWhereUniqueWithoutProductInput {
  where: VariantWhereUniqueInput
  data: VariantUpdateWithoutProductDataInput
}

export interface ProductUpsertWithWhereUniqueNestedInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateDataInput
  create: ProductCreateInput
}

export interface VariantUpdateWithoutProductDataInput {
  deletedAt?: DateTime
  price?: Float
  available?: Boolean
  selectedOptions?: SelectedOptionUpdateManyWithoutVariantInput
}

export interface CategoryCreateOneInput {
  create?: CategoryCreateInput
  connect?: CategoryWhereUniqueInput
}

export interface SelectedOptionUpdateManyWithoutVariantInput {
  create?: SelectedOptionCreateWithoutVariantInput[] | SelectedOptionCreateWithoutVariantInput
  connect?: SelectedOptionWhereUniqueInput[] | SelectedOptionWhereUniqueInput
  disconnect?: SelectedOptionWhereUniqueInput[] | SelectedOptionWhereUniqueInput
  delete?: SelectedOptionWhereUniqueInput[] | SelectedOptionWhereUniqueInput
  update?: SelectedOptionUpdateWithWhereUniqueWithoutVariantInput[] | SelectedOptionUpdateWithWhereUniqueWithoutVariantInput
  upsert?: SelectedOptionUpsertWithWhereUniqueWithoutVariantInput[] | SelectedOptionUpsertWithWhereUniqueWithoutVariantInput
}

export interface OptionValueCreateManyInput {
  create?: OptionValueCreateInput[] | OptionValueCreateInput
  connect?: OptionValueWhereUniqueInput[] | OptionValueWhereUniqueInput
}

export interface SelectedOptionUpdateWithWhereUniqueWithoutVariantInput {
  where: SelectedOptionWhereUniqueInput
  data: SelectedOptionUpdateWithoutVariantDataInput
}

export interface ResortCreateManyInput {
  create?: ResortCreateInput[] | ResortCreateInput
  connect?: ResortWhereUniqueInput[] | ResortWhereUniqueInput
}

export interface SelectedOptionUpdateWithoutVariantDataInput {
  deletedAt?: DateTime
  option?: OptionUpdateOneInput
  value?: OptionValueUpdateOneInput
}

export interface ResortSubscriptionWhereInput {
  AND?: ResortSubscriptionWhereInput[] | ResortSubscriptionWhereInput
  OR?: ResortSubscriptionWhereInput[] | ResortSubscriptionWhereInput
  NOT?: ResortSubscriptionWhereInput[] | ResortSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ResortWhereInput
}

export interface OptionUpdateOneInput {
  create?: OptionCreateInput
  connect?: OptionWhereUniqueInput
  delete?: Boolean
  update?: OptionUpdateDataInput
  upsert?: OptionUpsertNestedInput
}

export interface SelectedOptionWhereInput {
  AND?: SelectedOptionWhereInput[] | SelectedOptionWhereInput
  OR?: SelectedOptionWhereInput[] | SelectedOptionWhereInput
  NOT?: SelectedOptionWhereInput[] | SelectedOptionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  deletedAt?: DateTime
  deletedAt_not?: DateTime
  deletedAt_in?: DateTime[] | DateTime
  deletedAt_not_in?: DateTime[] | DateTime
  deletedAt_lt?: DateTime
  deletedAt_lte?: DateTime
  deletedAt_gt?: DateTime
  deletedAt_gte?: DateTime
  option?: OptionWhereInput
  variant?: VariantWhereInput
  value?: OptionValueWhereInput
}

export interface OptionUpsertNestedInput {
  update: OptionUpdateDataInput
  create: OptionCreateInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  oneSignalUserId?: String
  oneSignalUserId_not?: String
  oneSignalUserId_in?: String[] | String
  oneSignalUserId_not_in?: String[] | String
  oneSignalUserId_lt?: String
  oneSignalUserId_lte?: String
  oneSignalUserId_gt?: String
  oneSignalUserId_gte?: String
  oneSignalUserId_contains?: String
  oneSignalUserId_not_contains?: String
  oneSignalUserId_starts_with?: String
  oneSignalUserId_not_starts_with?: String
  oneSignalUserId_ends_with?: String
  oneSignalUserId_not_ends_with?: String
  cart_every?: OrderLineItemWhereInput
  cart_some?: OrderLineItemWhereInput
  cart_none?: OrderLineItemWhereInput
  orders_every?: OrderWhereInput
  orders_some?: OrderWhereInput
  orders_none?: OrderWhereInput
}

export interface OptionValueUpdateOneInput {
  create?: OptionValueCreateInput
  connect?: OptionValueWhereUniqueInput
  delete?: Boolean
  update?: OptionValueUpdateDataInput
  upsert?: OptionValueUpsertNestedInput
}

export interface ResortWhereInput {
  AND?: ResortWhereInput[] | ResortWhereInput
  OR?: ResortWhereInput[] | ResortWhereInput
  NOT?: ResortWhereInput[] | ResortWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  zipCode?: String
  zipCode_not?: String
  zipCode_in?: String[] | String
  zipCode_not_in?: String[] | String
  zipCode_lt?: String
  zipCode_lte?: String
  zipCode_gt?: String
  zipCode_gte?: String
  zipCode_contains?: String
  zipCode_not_contains?: String
  zipCode_starts_with?: String
  zipCode_not_starts_with?: String
  zipCode_ends_with?: String
  zipCode_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
}

export interface OptionValueUpsertNestedInput {
  update: OptionValueUpdateDataInput
  create: OptionValueCreateInput
}

export interface BrandWhereUniqueInput {
  id?: ID_Input
}

export interface SelectedOptionUpsertWithWhereUniqueWithoutVariantInput {
  where: SelectedOptionWhereUniqueInput
  update: SelectedOptionUpdateWithoutVariantDataInput
  create: SelectedOptionCreateWithoutVariantInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface VariantUpsertWithWhereUniqueWithoutProductInput {
  where: VariantWhereUniqueInput
  update: VariantUpdateWithoutProductDataInput
  create: VariantCreateWithoutProductInput
}

export interface UserAdminUpdateInput {
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  name?: String
  description?: String
  imageUrl?: String
  role?: Role
  stripeCustomerId?: String
  oneSignalUserId?: String
  selectedShop?: ShopUpdateOneInput
  category?: CategoryUpdateOneInput
}

export interface AttributeUpdateManyWithoutProductsInput {
  create?: AttributeCreateWithoutProductsInput[] | AttributeCreateWithoutProductsInput
  connect?: AttributeWhereUniqueInput[] | AttributeWhereUniqueInput
  disconnect?: AttributeWhereUniqueInput[] | AttributeWhereUniqueInput
  delete?: AttributeWhereUniqueInput[] | AttributeWhereUniqueInput
  update?: AttributeUpdateWithWhereUniqueWithoutProductsInput[] | AttributeUpdateWithWhereUniqueWithoutProductsInput
  upsert?: AttributeUpsertWithWhereUniqueWithoutProductsInput[] | AttributeUpsertWithWhereUniqueWithoutProductsInput
}

export interface UserUpdateWithoutOrdersDataInput {
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  role?: Role
  oneSignalUserId?: String
  cart?: OrderLineItemUpdateManyWithoutOwnerInput
}

export interface AttributeUpdateWithWhereUniqueWithoutProductsInput {
  where: AttributeWhereUniqueInput
  data: AttributeUpdateWithoutProductsDataInput
}

export interface UserUpdateOneWithoutCartInput {
  create?: UserCreateWithoutCartInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutCartDataInput
  upsert?: UserUpsertWithoutCartInput
}

export interface AttributeUpdateWithoutProductsDataInput {
  value?: String
  category?: CategoryUpdateOneInput
  shop?: ShopUpdateOneInput
}

export interface VariantUpsertNestedInput {
  update: VariantUpdateDataInput
  create: VariantCreateInput
}

export interface AttributeUpsertWithWhereUniqueWithoutProductsInput {
  where: AttributeWhereUniqueInput
  update: AttributeUpdateWithoutProductsDataInput
  create: AttributeCreateWithoutProductsInput
}

export interface ProductUpsertWithoutVariantsInput {
  update: ProductUpdateWithoutVariantsDataInput
  create: ProductCreateWithoutVariantsInput
}

export interface OrderableProductUpdateManyWithoutProductInput {
  create?: OrderableProductCreateWithoutProductInput[] | OrderableProductCreateWithoutProductInput
  connect?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
  disconnect?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
  delete?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
  update?: OrderableProductUpdateWithWhereUniqueWithoutProductInput[] | OrderableProductUpdateWithWhereUniqueWithoutProductInput
  upsert?: OrderableProductUpsertWithWhereUniqueWithoutProductInput[] | OrderableProductUpsertWithWhereUniqueWithoutProductInput
}

export interface ProductUpdateWithWhereUniqueWithoutAttributesInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutAttributesDataInput
}

export interface OrderableProductUpdateWithWhereUniqueWithoutProductInput {
  where: OrderableProductWhereUniqueInput
  data: OrderableProductUpdateWithoutProductDataInput
}

export interface ShopUpsertWithoutNewProductsInput {
  update: ShopUpdateWithoutNewProductsDataInput
  create: ShopCreateWithoutNewProductsInput
}

export interface OrderableProductUpdateWithoutProductDataInput {
  position?: Int
  shopBestSeller?: ShopUpdateOneWithoutBestSellerProductsInput
  shopNewProduct?: ShopUpdateOneWithoutNewProductsInput
}

export interface ShopCreateOneInput {
  create?: ShopCreateInput
  connect?: ShopWhereUniqueInput
}

export interface ShopUpdateOneWithoutBestSellerProductsInput {
  create?: ShopCreateWithoutBestSellerProductsInput
  connect?: ShopWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ShopUpdateWithoutBestSellerProductsDataInput
  upsert?: ShopUpsertWithoutBestSellerProductsInput
}

export interface VariantSubscriptionWhereInput {
  AND?: VariantSubscriptionWhereInput[] | VariantSubscriptionWhereInput
  OR?: VariantSubscriptionWhereInput[] | VariantSubscriptionWhereInput
  NOT?: VariantSubscriptionWhereInput[] | VariantSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: VariantWhereInput
}

export interface ShopUpdateWithoutBestSellerProductsDataInput {
  name?: String
  address?: String
  zipCode?: String
  phoneNumber?: String
  openingHours?: String
  MOTD?: String
  resort?: ResortUpdateManyInput
  products?: ProductUpdateManyInput
  newProducts?: OrderableProductUpdateManyWithoutShopNewProductInput
}

export interface AttributeSubscriptionWhereInput {
  AND?: AttributeSubscriptionWhereInput[] | AttributeSubscriptionWhereInput
  OR?: AttributeSubscriptionWhereInput[] | AttributeSubscriptionWhereInput
  NOT?: AttributeSubscriptionWhereInput[] | AttributeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AttributeWhereInput
}

export interface OrderableProductUpdateManyWithoutShopNewProductInput {
  create?: OrderableProductCreateWithoutShopNewProductInput[] | OrderableProductCreateWithoutShopNewProductInput
  connect?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
  disconnect?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
  delete?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
  update?: OrderableProductUpdateWithWhereUniqueWithoutShopNewProductInput[] | OrderableProductUpdateWithWhereUniqueWithoutShopNewProductInput
  upsert?: OrderableProductUpsertWithWhereUniqueWithoutShopNewProductInput[] | OrderableProductUpsertWithWhereUniqueWithoutShopNewProductInput
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  url?: String
  secret?: String
}

export interface OrderableProductUpdateWithWhereUniqueWithoutShopNewProductInput {
  where: OrderableProductWhereUniqueInput
  data: OrderableProductUpdateWithoutShopNewProductDataInput
}

export interface ProductUpdateInput {
  deletedAt?: DateTime
  SKU?: String
  displayPrice?: Float
  available?: Boolean
  User?: UserAdminUpdateOneInput
  category?: CategoryUpdateOneInput
  options?: OptionUpdateManyInput
  unavailableOptionsValues?: OptionValueUpdateManyInput
  variants?: VariantUpdateManyWithoutProductInput
  attributes?: AttributeUpdateManyWithoutProductsInput
  orderables?: OrderableProductUpdateManyWithoutProductInput
}

export interface OrderableProductUpdateWithoutShopNewProductDataInput {
  position?: Int
  product?: ProductUpdateOneWithoutOrderablesInput
  shopBestSeller?: ShopUpdateOneWithoutBestSellerProductsInput
}

export interface OrderUpdateWithoutOwnerDataInput {
  totalPrice?: Float
  totalRefunded?: Float
  totalTax?: Float
  orderStatus?: OrderStatus
  lineItems?: OrderLineItemUpdateManyInput
}

export interface ProductUpdateOneWithoutOrderablesInput {
  create?: ProductCreateWithoutOrderablesInput
  connect?: ProductWhereUniqueInput
  delete?: Boolean
  update?: ProductUpdateWithoutOrderablesDataInput
  upsert?: ProductUpsertWithoutOrderablesInput
}

export interface VariantUpdateOneWithoutSelectedOptionsInput {
  create?: VariantCreateWithoutSelectedOptionsInput
  connect?: VariantWhereUniqueInput
  delete?: Boolean
  update?: VariantUpdateWithoutSelectedOptionsDataInput
  upsert?: VariantUpsertWithoutSelectedOptionsInput
}

export interface ProductUpdateWithoutOrderablesDataInput {
  deletedAt?: DateTime
  SKU?: String
  displayPrice?: Float
  available?: Boolean
  User?: UserAdminUpdateOneInput
  category?: CategoryUpdateOneInput
  options?: OptionUpdateManyInput
  unavailableOptionsValues?: OptionValueUpdateManyInput
  variants?: VariantUpdateManyWithoutProductInput
  attributes?: AttributeUpdateManyWithoutProductsInput
}

export interface OptionCreateManyWithoutCategoryInput {
  create?: OptionCreateWithoutCategoryInput[] | OptionCreateWithoutCategoryInput
  connect?: OptionWhereUniqueInput[] | OptionWhereUniqueInput
}

export interface ProductUpsertWithoutOrderablesInput {
  update: ProductUpdateWithoutOrderablesDataInput
  create: ProductCreateWithoutOrderablesInput
}

export interface UserAdminWhereInput {
  AND?: UserAdminWhereInput[] | UserAdminWhereInput
  OR?: UserAdminWhereInput[] | UserAdminWhereInput
  NOT?: UserAdminWhereInput[] | UserAdminWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  imageUrl?: String
  imageUrl_not?: String
  imageUrl_in?: String[] | String
  imageUrl_not_in?: String[] | String
  imageUrl_lt?: String
  imageUrl_lte?: String
  imageUrl_gt?: String
  imageUrl_gte?: String
  imageUrl_contains?: String
  imageUrl_not_contains?: String
  imageUrl_starts_with?: String
  imageUrl_not_starts_with?: String
  imageUrl_ends_with?: String
  imageUrl_not_ends_with?: String
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  stripeCustomerId?: String
  stripeCustomerId_not?: String
  stripeCustomerId_in?: String[] | String
  stripeCustomerId_not_in?: String[] | String
  stripeCustomerId_lt?: String
  stripeCustomerId_lte?: String
  stripeCustomerId_gt?: String
  stripeCustomerId_gte?: String
  stripeCustomerId_contains?: String
  stripeCustomerId_not_contains?: String
  stripeCustomerId_starts_with?: String
  stripeCustomerId_not_starts_with?: String
  stripeCustomerId_ends_with?: String
  stripeCustomerId_not_ends_with?: String
  oneSignalUserId?: String
  oneSignalUserId_not?: String
  oneSignalUserId_in?: String[] | String
  oneSignalUserId_not_in?: String[] | String
  oneSignalUserId_lt?: String
  oneSignalUserId_lte?: String
  oneSignalUserId_gt?: String
  oneSignalUserId_gte?: String
  oneSignalUserId_contains?: String
  oneSignalUserId_not_contains?: String
  oneSignalUserId_starts_with?: String
  oneSignalUserId_not_starts_with?: String
  oneSignalUserId_ends_with?: String
  oneSignalUserId_not_ends_with?: String
  selectedShop?: ShopWhereInput
  category?: CategoryWhereInput
}

export interface OrderableProductUpsertWithWhereUniqueWithoutShopNewProductInput {
  where: OrderableProductWhereUniqueInput
  update: OrderableProductUpdateWithoutShopNewProductDataInput
  create: OrderableProductCreateWithoutShopNewProductInput
}

export interface UserAdminWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface OrderLineItemUpdateWithWhereUniqueWithoutOwnerInput {
  where: OrderLineItemWhereUniqueInput
  data: OrderLineItemUpdateWithoutOwnerDataInput
}

export interface OrderableProductUpdateManyWithoutShopBestSellerInput {
  create?: OrderableProductCreateWithoutShopBestSellerInput[] | OrderableProductCreateWithoutShopBestSellerInput
  connect?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
  disconnect?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
  delete?: OrderableProductWhereUniqueInput[] | OrderableProductWhereUniqueInput
  update?: OrderableProductUpdateWithWhereUniqueWithoutShopBestSellerInput[] | OrderableProductUpdateWithWhereUniqueWithoutShopBestSellerInput
  upsert?: OrderableProductUpsertWithWhereUniqueWithoutShopBestSellerInput[] | OrderableProductUpsertWithWhereUniqueWithoutShopBestSellerInput
}

export interface ShopUpdateWithoutNewProductsDataInput {
  name?: String
  address?: String
  zipCode?: String
  phoneNumber?: String
  openingHours?: String
  MOTD?: String
  resort?: ResortUpdateManyInput
  products?: ProductUpdateManyInput
  bestSellerProducts?: OrderableProductUpdateManyWithoutShopBestSellerInput
}

export interface ShopUpdateOneWithoutNewProductsInput {
  create?: ShopCreateWithoutNewProductsInput
  connect?: ShopWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ShopUpdateWithoutNewProductsDataInput
  upsert?: ShopUpsertWithoutNewProductsInput
}

export interface ShopUpsertWithoutBestSellerProductsInput {
  update: ShopUpdateWithoutBestSellerProductsDataInput
  create: ShopCreateWithoutBestSellerProductsInput
}

export interface OptionUpsertWithWhereUniqueWithoutCategoryInput {
  where: OptionWhereUniqueInput
  update: OptionUpdateWithoutCategoryDataInput
  create: OptionCreateWithoutCategoryInput
}

export interface OrderUpsertWithWhereUniqueWithoutOwnerInput {
  where: OrderWhereUniqueInput
  update: OrderUpdateWithoutOwnerDataInput
  create: OrderCreateWithoutOwnerInput
}

export interface ResortUpdateInput {
  name?: String
  description?: String
  address?: String
  zipCode?: String
  city?: String
  phoneNumber?: String
}

export interface ProductCreateManyInput {
  create?: ProductCreateInput[] | ProductCreateInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface Order extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  owner: User
  lineItems?: OrderLineItem[]
  totalPrice: Float
  totalRefunded: Float
  totalTax: Float
  orderStatus: OrderStatus
}

export interface OptionPreviousValues {
  id: ID_Output
  name: String
}

export interface OrderLineItem extends Node {
  id: ID_Output
  deletedAt?: DateTime
  quantity: Int
  variant?: Variant
  owner?: User
  shop: Shop
}

export interface Category extends Node {
  id: ID_Output
  name: String
  options?: Option[]
  shop: Shop
}

export interface BatchPayload {
  count: Long
}

export interface AggregateOption {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface OptionConnection {
  pageInfo: PageInfo
  edges: OptionEdge[]
  aggregate: AggregateOption
}

/*
 * An edge in a connection.

 */
export interface CategoryEdge {
  node: Category
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  firstName?: String
  lastName?: String
  role: Role
  cart?: OrderLineItem[]
  orders?: Order[]
  oneSignalUserId?: String
}

export interface AggregateResort {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: CategoryEdge[]
  aggregate: AggregateCategory
}

export interface ResortPreviousValues {
  id: ID_Output
  name: String
  description?: String
  address?: String
  zipCode?: String
  city: String
  phoneNumber: String
}

/*
 * An edge in a connection.

 */
export interface ResortEdge {
  node: Resort
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ResortConnection {
  pageInfo: PageInfo
  edges: ResortEdge[]
  aggregate: AggregateResort
}

export interface AggregateUserAdmin {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserAdminConnection {
  pageInfo: PageInfo
  edges: UserAdminEdge[]
  aggregate: AggregateUserAdmin
}

export interface BrandSubscriptionPayload {
  mutation: MutationType
  node?: Brand
  updatedFields?: String[]
  previousValues?: BrandPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ShopEdge {
  node: Shop
  cursor: String
}

export interface BrandPreviousValues {
  id: ID_Output
  name: String
}

export interface AggregateVariant {
  count: Int
}

export interface Brand extends Node {
  id: ID_Output
  name: String
  category: Category
  shop: Shop
}

/*
 * A connection to a list of items.

 */
export interface VariantConnection {
  pageInfo: PageInfo
  edges: VariantEdge[]
  aggregate: AggregateVariant
}

export interface AttributeSubscriptionPayload {
  mutation: MutationType
  node?: Attribute
  updatedFields?: String[]
  previousValues?: AttributePreviousValues
}

/*
 * An edge in a connection.

 */
export interface OrderLineItemEdge {
  node: OrderLineItem
  cursor: String
}

export interface AttributePreviousValues {
  id: ID_Output
  value: String
}

export interface AggregateProduct {
  count: Int
}

export interface CategoryPreviousValues {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface SelectedOptionSubscriptionPayload {
  mutation: MutationType
  node?: SelectedOption
  updatedFields?: String[]
  previousValues?: SelectedOptionPreviousValues
}

/*
 * An edge in a connection.

 */
export interface OptionValueEdge {
  node: OptionValue
  cursor: String
}

export interface SelectedOptionPreviousValues {
  id: ID_Output
  deletedAt?: DateTime
}

export interface AggregateOrderableProduct {
  count: Int
}

export interface OrderableProduct extends Node {
  id: ID_Output
  product: Product
  position: Int
  shopBestSeller?: Shop
  shopNewProduct?: Shop
}

/*
 * A connection to a list of items.

 */
export interface OrderableProductConnection {
  pageInfo: PageInfo
  edges: OrderableProductEdge[]
  aggregate: AggregateOrderableProduct
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface OrderEdge {
  node: Order
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  firstName?: String
  lastName?: String
  role: Role
  oneSignalUserId?: String
}

export interface AggregateFile {
  count: Int
}

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category
  updatedFields?: String[]
  previousValues?: CategoryPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface FilePreviousValues {
  id: ID_Output
  name: String
  url: String
  contentType: String
  secret: String
  size: Int
}

export interface AggregateSelectedOption {
  count: Int
}

export interface Attribute extends Node {
  id: ID_Output
  value: String
  category: Category
  shop: Shop
  products?: Product[]
}

/*
 * A connection to a list of items.

 */
export interface SelectedOptionConnection {
  pageInfo: PageInfo
  edges: SelectedOptionEdge[]
  aggregate: AggregateSelectedOption
}

export interface OrderSubscriptionPayload {
  mutation: MutationType
  node?: Order
  updatedFields?: String[]
  previousValues?: OrderPreviousValues
}

/*
 * An edge in a connection.

 */
export interface AttributeEdge {
  node: Attribute
  cursor: String
}

export interface OrderPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  totalPrice: Float
  totalRefunded: Float
  totalTax: Float
  orderStatus: OrderStatus
}

export interface AggregateBrand {
  count: Int
}

export interface SelectedOption extends Node {
  id: ID_Output
  deletedAt?: DateTime
  option: Option
  variant: Variant
  value: OptionValue
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface OrderableProductSubscriptionPayload {
  mutation: MutationType
  node?: OrderableProduct
  updatedFields?: String[]
  previousValues?: OrderableProductPreviousValues
}

export interface File extends Node {
  id: ID_Output
  name: String
  url: String
  contentType: String
  secret: String
  size: Int
}

export interface OrderableProductPreviousValues {
  id: ID_Output
  position: Int
}

/*
 * An edge in a connection.

 */
export interface OptionEdge {
  node: Option
  cursor: String
}

export interface Variant extends Node {
  id: ID_Output
  deletedAt?: DateTime
  selectedOptions?: SelectedOption[]
  price: Float
  available: Boolean
  product?: Product
}

/*
 * An edge in a connection.

 */
export interface UserAdminEdge {
  node: UserAdmin
  cursor: String
}

export interface OptionValueSubscriptionPayload {
  mutation: MutationType
  node?: OptionValue
  updatedFields?: String[]
  previousValues?: OptionValuePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ShopConnection {
  pageInfo: PageInfo
  edges: ShopEdge[]
  aggregate: AggregateShop
}

export interface OptionValuePreviousValues {
  id: ID_Output
  name: String
}

export interface AggregateOrderLineItem {
  count: Int
}

export interface UserAdmin extends Node {
  id: ID_Output
  email: String
  password: String
  firstName?: String
  lastName?: String
  selectedShop: Shop
  name: String
  description?: String
  category: Category
  imageUrl?: String
  role: Role
  stripeCustomerId?: String
  oneSignalUserId?: String
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface OptionValueConnection {
  pageInfo: PageInfo
  edges: OptionValueEdge[]
  aggregate: AggregateOptionValue
}

export interface ProductPreviousValues {
  id: ID_Output
  deletedAt?: DateTime
  SKU?: String
  displayPrice: Float
  available: Boolean
}

export interface AggregateOrder {
  count: Int
}

export interface Product extends Node {
  id: ID_Output
  deletedAt?: DateTime
  User: UserAdmin
  category: Category
  SKU?: String
  options?: Option[]
  unavailableOptionsValues?: OptionValue[]
  variants?: Variant[]
  attributes?: Attribute[]
  displayPrice: Float
  available: Boolean
  orderables?: OrderableProduct[]
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface OrderLineItemSubscriptionPayload {
  mutation: MutationType
  node?: OrderLineItem
  updatedFields?: String[]
  previousValues?: OrderLineItemPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface OrderLineItemPreviousValues {
  id: ID_Output
  deletedAt?: DateTime
  quantity: Int
}

export interface AggregateAttribute {
  count: Int
}

export interface Resort extends Node {
  id: ID_Output
  name: String
  description?: String
  address?: String
  zipCode?: String
  city: String
  phoneNumber: String
}

/*
 * An edge in a connection.

 */
export interface BrandEdge {
  node: Brand
  cursor: String
}

export interface VariantSubscriptionPayload {
  mutation: MutationType
  node?: Variant
  updatedFields?: String[]
  previousValues?: VariantPreviousValues
}

export interface OptionSubscriptionPayload {
  mutation: MutationType
  node?: Option
  updatedFields?: String[]
  previousValues?: OptionPreviousValues
}

export interface VariantPreviousValues {
  id: ID_Output
  deletedAt?: DateTime
  price: Float
  available: Boolean
}

export interface AggregateShop {
  count: Int
}

export interface Shop extends Node {
  id: ID_Output
  name: String
  address: String
  zipCode: String
  resort?: Resort[]
  phoneNumber: String
  openingHours: String
  MOTD?: String
  products?: Product[]
  newProducts?: OrderableProduct[]
  bestSellerProducts?: OrderableProduct[]
}

/*
 * A connection to a list of items.

 */
export interface OrderLineItemConnection {
  pageInfo: PageInfo
  edges: OrderLineItemEdge[]
  aggregate: AggregateOrderLineItem
}

export interface ShopSubscriptionPayload {
  mutation: MutationType
  node?: Shop
  updatedFields?: String[]
  previousValues?: ShopPreviousValues
}

/*
 * An edge in a connection.

 */
export interface OrderableProductEdge {
  node: OrderableProduct
  cursor: String
}

export interface ShopPreviousValues {
  id: ID_Output
  name: String
  address: String
  zipCode: String
  phoneNumber: String
  openingHours: String
  MOTD?: String
}

export interface AggregateUser {
  count: Int
}

export interface OptionValue extends Node {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface AttributeConnection {
  pageInfo: PageInfo
  edges: AttributeEdge[]
  aggregate: AggregateAttribute
}

export interface AggregateCategory {
  count: Int
}

export interface ResortSubscriptionPayload {
  mutation: MutationType
  node?: Resort
  updatedFields?: String[]
  previousValues?: ResortPreviousValues
}

export interface Option extends Node {
  id: ID_Output
  name: String
  values?: OptionValue[]
  category: Category
  shop: Shop
}

export interface UserAdminPreviousValues {
  id: ID_Output
  email: String
  password: String
  firstName?: String
  lastName?: String
  name: String
  description?: String
  imageUrl?: String
  role: Role
  stripeCustomerId?: String
  oneSignalUserId?: String
}

export interface UserAdminSubscriptionPayload {
  mutation: MutationType
  node?: UserAdmin
  updatedFields?: String[]
  previousValues?: UserAdminPreviousValues
}

/*
 * An edge in a connection.

 */
export interface VariantEdge {
  node: Variant
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface BrandConnection {
  pageInfo: PageInfo
  edges: BrandEdge[]
  aggregate: AggregateBrand
}

/*
 * An edge in a connection.

 */
export interface SelectedOptionEdge {
  node: SelectedOption
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface OrderConnection {
  pageInfo: PageInfo
  edges: OrderEdge[]
  aggregate: AggregateOrder
}

export interface AggregateOptionValue {
  count: Int
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number