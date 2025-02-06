import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>, 
      errorElement: <ErrorPage/>
    },
    {
      path: '/home',
      element: <Home/> 
    },
    {
      path: '/aboutus',
      element: <AboutUs/> 
    },
    {
      path: '/profile/:personId',
      element: <Profile/> 
    }
  ]);