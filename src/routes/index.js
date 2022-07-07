import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import {HeaderOnly} from '~/components/Layout';
import Search from '~/pages/Search';
import routeConfig from '~/config/route';

const publicRoutes = [
  {
    path: routeConfig.Home,
    component: Home,
  },
 
  {
    path: routeConfig.Following,
    component: Following,
  },
  {
    path: routeConfig.Profile,
    component: Profile,
  },
  {
    path: routeConfig.Upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routeConfig.Search,
    component: Search,
    layout : null,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
