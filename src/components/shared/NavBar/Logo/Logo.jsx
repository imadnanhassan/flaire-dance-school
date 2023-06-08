import React from 'react';
import logo from '../../../../assets/flaireLogo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
   return (
      <Link to={'/'}>
         <img
            src={logo}
            alt="airCNC"
            width="120"
            height="120"
         />
      </Link>
   );
};

export default Logo;