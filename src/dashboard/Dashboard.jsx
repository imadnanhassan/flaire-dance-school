import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provaider/AuthProvider";
import useAdmin from "../hook/useAdmin";
import useInstructor from "../hook/useInstructor";
import useStudent from "../hook/useStudent";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const { isAdmin } = useAdmin(user?.email);
  const { isInstructor } = useInstructor(user?.email);
  const { isStudent } = useStudent(user?.email);
  return (
    <div>
      <Helmet>
        <title>ADashboard | Flaire Dance School React App</title>
      </Helmet>
      
      <>
        {isStudent && (
          <>
            Student Dashboard 
          </>
        )}
        {isInstructor && (
          <>
            Instrucor Dashboard
          </>
        )}
        {isAdmin && (
          <>
            Admin Dashboard
          </>
        )}
      </>
    </div>
  );
};

export default Dashboard;
