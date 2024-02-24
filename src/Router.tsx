import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './pages/Admin/dashboard/dashboard';
import { Products } from './pages/Admin/products/products';
import { Circulation } from './pages/Admin/inandout/inandout';
import {Request} from './pages/Admin/request/request';
import { Login } from './pages/Login/welcome';
import { About } from './pages/user/about/about';
import { Welcome } from './components/Welcome/Welcome';;
import { Landing } from './pages/user/Landing';
import { UserDashboard } from './pages/user/dashboard/userdashboard';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/inandout',
    element: <Circulation />,
  },
  {
    path: '/request',
    element: <Request />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
  {
    path: '/userDash',
    element: <UserDashboard />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
