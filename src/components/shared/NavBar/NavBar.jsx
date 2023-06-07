
import React from 'react';
import Container from '../../Container';
import Banner from './Banner';

const NavBar = () => {
   return (
      <div>
         <Container>
            <div >
               <div className='flex justify-between items-center'>
                  <div>Logo</div>
                  <div>Menu</div>
                  <div>Join Btn</div>
               </div>
               <Banner></Banner>
            </div>
         </Container>
      </div>
   );
};

export default NavBar;