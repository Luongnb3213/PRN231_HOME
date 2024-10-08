//Layout Header only
import routesConfig from "../config/routes";
import Home from "../pages/Home";
import Signin from "../pages/Authentication/Signin/Signin";
import Signup from "../pages/Authentication/Signup/Signup";
const publicRoutes = [
  { path: routesConfig.root, component: Home },
  { path: routesConfig.signin, component: Signin, layout: "no-layout" },
  { path: routesConfig.signup, component: Signup, layout: "no-layout" },
];

export { publicRoutes };
