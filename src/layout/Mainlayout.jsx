import React from 'react';
import NavBar from '../components/shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer';

const Mainlayout = () => {
   return (
      <div className='text-center'>
         <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Mainlayout;