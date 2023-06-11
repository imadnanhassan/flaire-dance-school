import React, { useEffect, useState } from "react";
import NavBar from "../components/shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Loader from "../components/shared/Loader/Loader";

const Mainlayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader lable={'Welcome'}></Loader>
      ) : (
        <>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Mainlayout;
