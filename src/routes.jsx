import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import RootLayout from './layout/RootLayout.jsx'
import RandomPage from './pages/RandomPage.jsx'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          path: '/home',
          element: <Home/>,
          errorElement: <ErrorPage/>,
          children: [
            {
              path: '/home/:personId',
              element: <Profile/> 
            }
          ]
        },
        {
          path: '/aboutus',
          element: <AboutUs/> 
        },
        {
          path: '/*',
          element: <RandomPage/> 
        }
      ]
    }
  ]);