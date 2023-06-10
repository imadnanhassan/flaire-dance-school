import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";
import { useContext } from "react";
import { AuthContext } from "../../../../provaider/AuthProvider";
import { Link } from "react-router-dom";

const JoinBtn = ({ setIsOpen, isOpen }) => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 text-rose-500">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-rose-500 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <div className="hidden sm:block relative  ">
            {user ? (
              <>
                <Avatar></Avatar>
              </>
            ) : (
              <Link to={"/sign-in"}>Login</Link>
            )}

            {isOpen && user ? (
              <div className="absolute top-12 right-0 bg-white py-10 px-8 flex flex-col gap-4 rounded-md shadow-lg">
                <Link to={'/dashboard'}>DashBoard</Link>
                <span onClick={logOut}>LogOut</span>
              </div>
            ) : null}
          </div>
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default JoinBtn;
