import Home from '~/Page/Home';
import Following from '~/Page/Following';
import Profiles from '~/Page/Profiles';
import Upload from '~/Page/Upload';
import Search from '~/Page/Search';
import { LayoutOnly } from '~/Component/Layout';

//Public Routes
export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profiles', component: Profiles },
  { path: '/upload', component: Upload, layout: LayoutOnly },
  { path: '/search', component: Search, layout: null },
];

export const privateRoutes = [];
