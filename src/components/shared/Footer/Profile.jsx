import React from "react";
import { Link } from "react-router-dom";

import { FaLocationArrow, FaPhone, FaVoicemail } from "react-icons/fa";
import Logo from "../NavBar/Logo/Logo";

const Profile = () => {
  return (
    <>
      <div className=" md:mx-0 mx-auto items-center text-center  md:text-left">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <Logo></Logo>
        </Link>
        <p className="mt-2 text-sm text-white mb-3">
          Air plant banjo lyft occupy retro adaptogen indego
        </p>

        <div className="flex gap-3 items-center py-2 ">
          <FaLocationArrow></FaLocationArrow>
          <span>Jl. Menteng Raya, Jakarta</span>
        </div>
        <div className="flex gap-3 items-center py-2">
          <FaVoicemail></FaVoicemail>
          <span>mail@adnanhassan.com</span>
        </div>
        <div className="flex gap-3 items-center py-2 ">
          <FaPhone></FaPhone>
          <span>+62 876-543-210</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
