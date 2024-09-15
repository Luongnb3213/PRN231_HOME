//Layout Header only
import routesConfig from "../config/routes";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
const publicRoutes = [
  { path: routesConfig.root, component: Home },
  { path: routesConfig.login, component: Login, layout: "no-layout" },
];

export { publicRoutes };
