import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../client/Error/ErrorPage";
import Mainlayout from "../layout/Mainlayout";
import Home from "../client/Pages/Home/Home";
import SignUp from "../client/Pages/SignUp/SignUp";
import Login from "../client/Pages/Login/Login";
import Blog from "../client/Pages/Blog/Blog";
import Instructor from "../client/Pages/Instructor/Instructor";
import Classess from "../client/Pages/Home/Classess/Classess";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MySelectedClass from "../dashboard/Student/MySelectedClass";
import Dashboard from "../dashboard/Dashboard";
import AddClass from "../dashboard/Instructor/AddClass";
import MyClass from "../dashboard/Instructor/MyClass";
import ManageClass from "../dashboard/admin/ManageClass";
import AdminRoute from "./AdminRoute";
import ManageUser from "../dashboard/admin/ManageUser";

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
        path: "/classess",
        element: <Classess></Classess>,
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/mySelectedClass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "/dashboard/addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "/dashboard/allClass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
