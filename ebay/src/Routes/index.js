//Layout Header only
import routesConfig from "../config/routes";
import Home from "../pages/Home";
import Signin from "../pages/Authentication/Signin/Signin";
import Signup from "../pages/Authentication/Signup/Signup";
import Products from "../pages/Products/Products.jsx";
import DetailProduct from "../pages/DetailProduct/DetailProduct.jsx";
import CreateProduct from "../pages/Seller/CreateProduct.js";
import Cart from "../pages/Cart/Cart.js";
import Checkout from "../pages/Checkout/Checkout.js";
import HomeSeller from "../pages/Seller/Home/HomeSeller.js";
import TrackingOrders from "../pages/TrackingOrders/TrackingOrders.jsx";
import SellerTracking from "../pages/Seller/TrackingOrders/SellerTracking.jsx";
import Analytics from "../pages/Seller/Analytics/Analytics.jsx";
import MyProducts from "../pages/Seller/MyProducts/MyProducts.jsx";
import Shop from "../pages/Seller/Shop/Shop.jsx";
import Authorization from "../pages/Authentication/Authorization/Authorization.js";

const publicRoutes = [
  { path: routesConfig.root, component: Home },
  { path: routesConfig.signin, component: Signin, layout: "no-layout" },
  { path: routesConfig.signup, component: Signup, layout: "no-layout" },
  { path: routesConfig.products, component: Products },
  { path: routesConfig.productsChild, component: Products },
  { path: routesConfig.detail, component: DetailProduct },
  {
    path: routesConfig.createProduct,
    component: CreateProduct,
    layout: "seller-layout",
  },
  { path: routesConfig.Cart, component: Cart },
  { path: routesConfig.Checkout, component: Checkout },
  { path: routesConfig.HomeSeller, component: HomeSeller },
  {
    path: routesConfig.sellerTracking,
    component: SellerTracking,
    layout: "seller-layout",
  },
  {
    path: routesConfig.TrackingOrders,
    component: TrackingOrders,
  },
  {
    path: routesConfig.Analytics,
    component: Analytics,
    layout: "seller-layout",
  },
  {
    path: routesConfig.Shop,
    component: Shop,
  },
  {
    path: routesConfig.myProducts,
    component: MyProducts,
    layout: "seller-layout",
  },

  {
    path: routesConfig.Authorization,
    component: Authorization,
    layout: "no-layout",
  },

];

export { publicRoutes };
