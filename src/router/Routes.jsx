import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../client/Error/ErrorPage";
import Mainlayout from "../layout/Mainlayout";
import Home from "../client/Pages/Home/Home";
import SignUp from "../client/Pages/SignUp/SignUp";
import Login from "../client/Pages/Login/Login";
import Blog from "../client/Pages/Blog/Blog";
import Dashboard from "../dashboard/Dashboard";

const router = createBrowserRouter([
   {
      path:'/',
      errorElement:<ErrorPage></ErrorPage>,
      element: <Mainlayout></Mainlayout>,
      children:[
         {
            path:'/',
            element:<Home></Home>
         },
         {
            path:'/blog',
            element:<Blog></Blog>
         },
         {
            path:'/sign-in',
            element: <Login></Login>
            
         },
         {
            path:'/signup',
            element: <SignUp></SignUp>
         }
      ]
   },
   {
      path:'/dashboard',
      element: <Dashboard></Dashboard>
   }
])
export default router;