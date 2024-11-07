const routesConfig = {
  root: "/",
  signin: "/signin",
  signup: "/signup",
  products: "/products/:parent",
  productsChild: "/products/:parent/:child",
  detail: "/detail/:idProduct",
  createProduct: "/seller/createProduct",
  sellerTracking: "/seller/trackingorders",
  myProducts: "/seller/myProducts",
  Analytics: "/seller/analytics",
  Shop: "/seller/shop",
  Cart: "/cart",
  Checkout: "/checkout",
  HomeSeller: "/homeseller",
  TrackingOrders: "/trackingorders",
};

export default routesConfig;
