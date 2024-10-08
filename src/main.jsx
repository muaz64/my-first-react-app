import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact Us/Contact.jsx';
import ErrorPage from './components/Error Page/ErrorPage.jsx';
import MoreInfo from './components/MoreInfo/MoreInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/product",
        loader: () => fetch('https://fakestoreapi.com/products'),
        element: <Products></Products>
      },
      {
        path: "/product/:productID",
        loader: ({params}) => fetch (`https://fakestoreapi.com/products/${params.productID}`),
        element: <MoreInfo></MoreInfo>
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
