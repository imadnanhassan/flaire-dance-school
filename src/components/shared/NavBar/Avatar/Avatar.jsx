import React from "react";
import avatarImg from "../../../../assets/placeholder.jpg";
const Avatar = ({ user }) => {
  return (
    <div>
      <img
        className="rounded-full"
        src={user.uid ? user?.photoURL : avatarImg}
        alt="avatar img"
        height="30"
        width="30"
      />
    </div>
  );
};

export default Avatar;
