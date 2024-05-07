import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import MyOrders from "../Pages/MyOrders/MyOrders";
import PrivateRoutes from "./PrivateRoutes";
import Services from "../Pages/Home/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Register></Register>
        },
        {
          path: '/service',
          element: <Services></Services>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/order',
          element:<PrivateRoutes> <MyOrders></MyOrders></PrivateRoutes>
        }
      ]
    },
  ]);
  
  export default router