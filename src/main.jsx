import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
// TODO - Check why jsx isn't working in js file with Vite newer version
import { router } from './routes.jsx';

// import { BrowserRouter, Routes, Route } from 'react-router';
// Declarative Component Router - Older (not as powerful)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/profile" element={<Profile/>}/>
//         <Route path="/aboutus" element={<AboutUs/>}/>
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
