import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import {HeaderOnly} from '~/Layout';
import Search from '~/pages/Search';
import config from '~/config';

const publicRoutes = [
  {
    path: config.routes.Home,
    component: Home,
  },
 
  {
    path: config.routes.Following,
    component: Following,
  },
  {
    path: config.routes.Profile,
    component: Profile,
  },
  {
    path: config.routes.Upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.Search,
    component: Search,
    layout : null,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
