import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, conponent: Home },
    { path: routesConfig.following, conponent: Following },
    { path: routesConfig.profile, conponent: Profile },
    { path: routesConfig.search, conponent: Search, layout: null },
    { path: routesConfig.upload, conponent: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
