import React from 'react';
import Container from '../../Container';

const Footer = () => {
   return (
      <div className='bg-[#050101] text-white'>
        <Container>
         <div className='flex justify-between items-center gap-4'>
            <div>Profile</div>
            <div>quick links</div>
            <div>opening houre</div>
            <div>newsletter</div>
         </div>
         <br />
         <div className='border-t-2'></div>
         <strong className='text-[#737373]'>Copyright © 2021 Flaire - Dance School & Studio Template Kit</strong>
        </Container>
      </div>
   );
};

export default Footer;