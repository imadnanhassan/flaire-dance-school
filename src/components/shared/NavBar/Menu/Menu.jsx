import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({isOpen}) => {
  const menuItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="px-4 -mb-1 border-b-2 border-transparent text-rose-600 border-cyan-600"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="  px-4 -mb-1 border-b-2 border-transparent">
          Instructor
        </NavLink>
      </li>
      <li>
        <NavLink className="  px-4 -mb-1 border-b-2 border-transparent">
          Class
        </NavLink>
      </li>
      <li>
        <NavLink className="  px-4 -mb-1 border-b-2 border-transparent">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="  px-4 -mb-1 border-b-2 border-transparent">
          Blog
        </NavLink>
      </li>
     
    </>
  );

  return (
    <div className="relative">
      <ul className="items-stretch hidden space-x-3 lg:flex text-white">
        {menuItems}
      </ul>
      <ul className="lg:hidden absolute top-8 z-10 bg-black w-[500px] -right-8   text-white">
        {isOpen && menuItems }
      </ul>
    </div>
  );
};

export default Menu;
