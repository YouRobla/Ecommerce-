import { createRoot } from 'react-dom/client'
import './index.css'
import IndexPage from './Pages/IndexPage'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ProductDetailPage from './Pages/ProductDetailPage';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import { CartProvider } from './Context/CartContext';

const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage/>,
    },
    {
      path: "products/:Id",
      element: <ProductDetailPage/>,
    },
    {
      path: "/Cart",
      element: <ShoppingCartPage/>,
    },
]);  

createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
)