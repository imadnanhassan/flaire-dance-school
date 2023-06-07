import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../client/Error/ErrorPage";
import Mainlayout from "../layout/Mainlayout";
import Home from "../client/Pages/Home/Home";

const router = createBrowserRouter([
   {
      path:'/',
      errorElement:<ErrorPage></ErrorPage>,
      element: <Mainlayout></Mainlayout>,
      children:[
         {
            path:'/',
            element:<Home></Home>
         }
      ]
   }
])
export default router;