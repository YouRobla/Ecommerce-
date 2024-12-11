
import { createRoot } from 'react-dom/client'
import './index.css'
import IndexPage from './Pages/IndexPage'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ProductDetailPage from './Pages/ProductDetailPage';


const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage/>,
    },
    {
      path: "products/:Id",
      element:<ProductDetailPage/> ,

    },
  ]);  

createRoot(document.getElementById('root')!).render( <RouterProvider router={router} />)
