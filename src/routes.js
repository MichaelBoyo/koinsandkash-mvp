import { Navigate } from 'react-router-dom';

import { Layout } from './components/layout';
import SignUp from './myPages/SignUp';
import SignIn from './myPages/SignIn';
import { NotFound } from './pages/not-found';
import { Exchange } from './pages/exchange';
import { Reports } from './pages/reports';
import { Settings } from './pages/settings';
import {Assets} from './pages/Assets';
import ForgotPassword from './myPages/ForgotPassword';
import { Payments } from "./pages/Payments";
import AppBar from "./myPages/AppBar";
import LandingPage from "./pages/LandingPage"
import { Faq } from "./pages/Faq";
import { Support } from "./pages/Support";
import { Agent } from "./pages/Agent";
import Welcome from "./pages/Welcome";

export const routes = [
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: '/app',
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
      {
        path: 'welcome',
        element: <Welcome />,
      },
      {
        path: 'agents',
        element: <Agent />,
      },
      {
        path: 'support',
        element: <Support />,
      },
      {
        path: 'faq',
        element: <Faq />,
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
        path: 'exchange',
        element: <Exchange />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'assets',
        element: <Assets />
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
