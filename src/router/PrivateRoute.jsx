import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/shared/Loader/Loader";
import { AuthContext } from "../provaider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
