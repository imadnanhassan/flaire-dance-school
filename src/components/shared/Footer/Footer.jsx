import React from "react";

import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";

import Container from "../../Container";
import Profile from "./Profile";
import Button from "../../Button/Button";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <Container>
        <div className="px-5 py-24 md:items-center  lg:items-start md:flex-row md:flex-nowrap flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <Profile></Profile>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full  px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none md:mt-[20px] mb-10 flex flex-col md:gap-6 ">
              <li>
                <a className="text-white hover:text-rose-600 cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a className="text-white hover:text-rose-600 cursor-pointer">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-white hover:text-rose-600 cursor-pointer">
                  Third Link
                </a>
              </li>
              <li>
                <a className="text-white hover:text-rose-600 cursor-pointer">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              OPENING HOURS
            </h2>
            <nav className="list-none md:mt-[20px] mb-10 flex flex-col md:gap-6 ">
              <li>
                <a className="text-white hover:text-rose-600 cursor-pointer">
                  09:00 AM - 11:00 AM
                </a>
              </li>
              <li>
                <a className="text-white hover:text-rose-600 cursor-pointer">
                  12:00 AM - 14:00 PM
                </a>
              </li>
              <li>
                <a className="text-white hover:text-rose-600 cursor-pointer">
                  15:00 AM - 17:00 PM
                </a>
              </li>
              <li>
                <a className="text-white hover:text-rose-600 cursor-pointer">
                  18:00 AM - 20:00 PM
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">
              NEWSLETTER
            </h2>
            <div className="list-none md:mt-[20px] mb-10 flex flex-col md:gap-6 ">
              <p>
                Sign up for our mailing list to get <br /> latest updates and
                offers from us.
              </p>
              <div className="lg:flex md:flex py-2  md:gap-3">
                <input
                  className=" py-3 px-5 sm:pt-3 border-[#505050] border-2 bg-[#050101]"
                  type="text"
                  placeholder="Your Email"
                />
                <Button label={"Subscribe"}></Button>
              </div>
              <div className="flex gap-4 item-center mx-auto py-2">
                <span className=" transition-all cursor-pointer rounded-full px-2 py-2 text-gray-300 bg-[#1C1919]  hover:bg-[#E6E6E6] hover:text-black text-2xl">
                  <FaFacebook></FaFacebook>
                </span>
                <span className=" transition-all cursor-pointer rounded-full px-2 py-2 text-gray-300 bg-[#1C1919]  hover:bg-[#E6E6E6] hover:text-black text-2xl">
                  <FaTwitter></FaTwitter>
                </span>
                <span className=" transition-all cursor-pointer rounded-full px-2 py-2 text-gray-300 bg-[#1C1919]  hover:bg-[#E6E6E6] hover:text-black text-2xl">
                  <FaInstagram></FaInstagram>
                </span>
                <span className=" transition-all cursor-pointer rounded-full px-2 py-2 text-gray-300 bg-[#1C1919]  hover:bg-[#E6E6E6] hover:text-black text-2xl">
                  <FaLinkedin></FaLinkedin>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black py-4 px-5">
          <p className="text-gray-500 text-lg text-center sm:text-left">
            © 2023 FLAIRE —
            <a className="text-white ml-1" target="_blank">
              @ Dev-Hassan
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
