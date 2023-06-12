import React, { useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../components/shared/Loader/Loader";

const DashboardLayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="relative min-h-screen md:flex">
            <Sidebar></Sidebar>
            <div className="flex-1  md:ml-64">
              <div className="p-5">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardLayout;
