const routesConfig = {
  root: "/",
  signin: "/signin",
  signup: "/signup",
  products: "/products/:parent",
  productsChild: "/products/:parent/:child",
  detail: "/detail/:idProduct",
  detailBid: "/detailBid/:idProduct",
  createProduct: "/seller/createProduct",
  sellerTracking: "/seller/trackingorders",
  myProducts: "/seller/myProducts",
  Analytics: "/seller/analytics",
  Shop: "/seller/shop",
  Cart: "/cart",
  Checkout: "/checkout",
  HomeSeller: "/homeseller",
  TrackingBid: "/trackingbid",
  Authorization: "/authorization",
};

export default routesConfig;
