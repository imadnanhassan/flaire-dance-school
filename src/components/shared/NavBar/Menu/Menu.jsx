import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="items-stretch hidden space-x-3 lg:flex text-white">
        <li>
          <NavLink
            to={"/"}
            className="px-4 -mb-1 border-b-2 border-transparent text-rose-600 border-cyan-600"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
          Instructor
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
            Class
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
            Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
