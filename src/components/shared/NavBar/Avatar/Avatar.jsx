import React from 'react';
import avatarImg from '../../../../assets/placeholder.jpg'
const Avatar = () => {
   return (
      <div>
         <img
            className='rounded-full'
            src={avatarImg}
            alt="avatar img"
            height="30"
            width="30"
         />
      </div>
   );
};

export default Avatar;