import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provaider/AuthProvider";
import useAdmin from "../hook/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const {isAdmin, isLoading} = useAdmin(user?.email);
  const location = useLocation();
  if (loading || isLoading) {
    return <Loader></Loader>;
  }
  if (user && isAdmin) {
    return children;
  } else {
    return (
      <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>
    );
  }
};

export default AdminRoute;



 




 
