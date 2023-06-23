import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', conponent: Home },
    { path: '/following', conponent: Following },
    { path: '/:nickname', conponent: Profile },
    { path: '/search', conponent: Search, layout: null },
    { path: '/upload', conponent: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
