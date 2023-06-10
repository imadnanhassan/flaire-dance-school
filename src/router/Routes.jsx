import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../client/Error/ErrorPage";
import Mainlayout from "../layout/Mainlayout";
import Home from "../client/Pages/Home/Home";
import SignUp from "../client/Pages/SignUp/SignUp";
import Login from "../client/Pages/Login/Login";
import Blog from "../client/Pages/Blog/Blog";
import Instructor from "../client/Pages/Instructor/Instructor";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/sign-in",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <></>
  },
]);
export default router;
