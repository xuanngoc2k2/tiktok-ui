import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layouts';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, conponent: Home },
    { path: config.routes.following, conponent: Following },
    { path: config.routes.profile, conponent: Profile },
    { path: config.routes.search, conponent: Search, layout: null },
    { path: config.routes.upload, conponent: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
