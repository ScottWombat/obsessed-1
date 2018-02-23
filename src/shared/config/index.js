import Main from '../../app/components/main';
import Home from '../../app/components/home';
//import NotFound from '../../app/components/notfound';
import NotFound from '../../app/components/notfound';

const routes = [
  { component: Main,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;