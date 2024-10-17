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

const publicRoutes = [
  { path: routesConfig.root, component: Home },
  { path: routesConfig.signin, component: Signin, layout: "no-layout" },
  { path: routesConfig.signup, component: Signup, layout: "no-layout" },
  { path: routesConfig.products, component: Products },
  { path: routesConfig.detail, component: DetailProduct },
  { path: routesConfig.createProduct , component: CreateProduct},
  { path: routesConfig.Cart , component: Cart},
  { path: routesConfig.Checkout , component: Checkout},
  { path: routesConfig.HomeSeller , component: HomeSeller}

];

export { publicRoutes };
