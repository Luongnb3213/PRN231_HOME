//Layout Header only
import routesConfig from "../config/routes"
import Home from '../pages/Home';
const publicRoutes = [
    { path: routesConfig.root, component: Home },
];

export { publicRoutes };
