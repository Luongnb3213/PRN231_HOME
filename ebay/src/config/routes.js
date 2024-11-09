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
  updateProducts: "/seller/updateProducts/:id",
  Analytics: "/seller/analytics",
  Shop: "/seller/shop/:idSeller",
  Cart: "/cart",
  Checkout: "/checkout",
  HomeSeller: "/homeseller",
  TrackingBid: "/trackingbid",
  Authorization: "/authorization",
};

export default routesConfig;
