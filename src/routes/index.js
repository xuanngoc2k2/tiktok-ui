import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', conponent: Home },
    { path: '/following', conponent: Following },
    { path: '/upload', conponent: Upload, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
