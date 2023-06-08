
import React from 'react';
import Container from '../../Container';
import Banner from './Banner';
import Logo from './Logo/Logo';
import JoinBtn from './JoinBtn/JoinBtn';
import Menu from './Menu/Menu';

const NavBar = () => {
   return (
      <div className='w-full  z-10 shadow-lg'>
         <div className='py-4 border-b-[1px] bg-black sticky'>
            <Container>
               <div>
                  <div className='flex justify-between items-center'>
                     <Logo></Logo>
                     <Menu></Menu>
                     <JoinBtn></JoinBtn>
                  </div>
               </div>
            </Container>
         </div>
         <Banner></Banner>
      </div>
   );
};

export default NavBar;