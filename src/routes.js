import { Navigate } from 'react-router-dom';

import { Layout } from './components/layout';
import SignUp from './myPages/SignUp';
import SignIn from './myPages/SignIn';
import { NotFound } from './pages/not-found';
import { Orders } from './pages/orders';
import { Reports } from './pages/reports';
import { Settings } from './pages/settings';
import Store from './pages/Store';
import ForgotPassword from './myPages/ForgotPassword';
import { Payments } from "./pages/Payments";
import AppBar from "./myPages/AppBar";
export const routes = [
  {
    path: '/',
    element: <AppBar />,
    children: [
      {
        
        index: true,
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
    ]
  },
  
  {
    path: 'dashboard',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Reports />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'store',
        element: <Store />
      },
      {
        path: 'payments',
        element: <Payments />
      },
     
      {
        path: '*',
        element: <Navigate to="/404" />
      }
    ]
  },
  {
    path: '404',
    element: <NotFound />
  },
  {
    path: '*',
    element: <NotFound />
  }
];
