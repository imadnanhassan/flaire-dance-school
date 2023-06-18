import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provaider/AuthProvider";
import Logo from "../components/shared/NavBar/Logo/Logo";
import { AiOutlineBars } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { GrLogout, GrHomeRounded } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import useAdmin from "../hook/useAdmin";
import useInstructor from "../hook/useInstructor";
import useStudent from "../hook/useStudent";

const Sidebar = () => {
  const [isActive, setActive] = useState("false");
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const { isAdmin } = useAdmin(user?.email);
  const { isInstructor } = useInstructor(user?.email);
  const { isStudent } = useStudent(user?.email);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div>
      <div className="bg-white text-gray-500 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 bg-fuchsia-50 focus:outline-none focus:bg-white"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-slate-900 text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
            <Logo />
          </div>

          <div className="flex flex-col items-center px-5 mt-6 -mx-2">
            <Link to="/dashboard">
              <img
                className="object-cover w-24 h-24 mx-2 border rounded-full"
                src={user?.photoURL}
                alt="avatar"
                referrerPolicy="no-referrer"
              />
            </Link>
            <Link to="/dashboard">
              <h4 className="mx-2 mt-2 font-medium text-white  hover:underline">
                {user?.displayName}
              </h4>
            </Link>
            <Link to="/dashboard">
              <p className="mx-2 mt-1 text-sm font-medium text-white  hover:underline">
                {user?.email}
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <hr />
          {isStudent && (
            <>
              <NavLink to={"/dashboard/mySelectedClass"}>
                My Selected Classes
              </NavLink>
              <NavLink>My Enroll Classes</NavLink>
              <NavLink>Payment History</NavLink>
            </>
          )}
          {isInstructor && (
            <>
              <NavLink to={"/dashboard/addClass"}>Add Class</NavLink>
              <NavLink to={"/dashboard/myClass"}>My Class</NavLink>
            </>
          )}
          {isAdmin && (
            <>
              <NavLink to={"/dashboard/allClass"}>Manage Class</NavLink>
              <NavLink to={"/dashboard/users"}>Manage Users</NavLink>
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 ">
          <hr />
          <Link
            to={"/dashboard"}
            className="flex gap-4 item-center bg-gray-300 px-3 py-3 font-medium  text-gray-900"
          >
            <GrHomeRounded className="mt-1"></GrHomeRounded>
            <p>Home</p>
          </Link>
          <Link
            to={"/classess"}
            className="flex gap-4 item-center bg-gray-300 px-3 py-3 font-medium  text-gray-900"
          >
            <SiGoogleclassroom className="mt-1"></SiGoogleclassroom>
            <p>All Dance Class</p>
          </Link>
          <Link
            to={"/instructor"}
            className="flex gap-4 item-center bg-gray-300 px-3 py-3 font-medium  text-gray-900"
          >
            <FaChalkboardTeacher className="mt-1"></FaChalkboardTeacher>

            <p>Our Instrocture</p>
          </Link>
        </div>

        <div>
          <hr />
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-100 ${
                isActive
                  ? "bg-gray-300 hover:bg-stone-900 border-2  text-stone-900"
                  : "text-gray-100"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium  ">Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5   bg-gray-300 hover:bg-stone-100 border-2  text-stone-900 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5 " />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
