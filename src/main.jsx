import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Root from './Layouts/Root.jsx';
import EventDetails from './components/EventDetails/EventDetails.jsx';
import Blog from './components/Blog/Blog.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute.jsx';
import MyProfile from './components/MyProfile/MyProfile.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import PrivacyPolicy from './Layouts/PrivacyPolicy.jsx';
import TermsAndConditions from './Layouts/TermsAndConditions.jsx';
import About from './Layouts/About.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [

      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: (<PrivateRoute>
          <Blog></Blog>
        </PrivateRoute>)
      },
      {
        path: "/event/:id",
        element: (<PrivateRoute>
          <EventDetails />
        </PrivateRoute>)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/my-profile",
        element: (<PrivateRoute>
          <MyProfile />
        </PrivateRoute>)

      },
      {
        path: "*",
        element: <ErrorPage />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path:"/privacy",
         element:<PrivacyPolicy />
      },
      {
        path:"/terms",
         element:<TermsAndConditions />
      },
      {
        path:"/about",
         element:<About />
      }
    ]

  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
     </HelmetProvider>
    
  </StrictMode>,
)
