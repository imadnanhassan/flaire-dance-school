import React from "react";

import { Link } from "react-router-dom";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitterSquare,
  FaVoicemail,
} from "react-icons/fa";

import Container from "../../Container";
import Profile from "./Profile";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <Container>
        <div className=" px-5 py-24  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <Profile></Profile>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className=" py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-around">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a className="text-white ml-1" target="_blank">
                @knyttneve
              </a>
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center items-center sm:justify-start">
              <a className="text-gray-500 text-2xl">
                <FaFacebookSquare></FaFacebookSquare>
              </a>
              <a className="ml-3 text-gray-500 text-2xl">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
              <a className="ml-3 text-gray-500 text-2xl">
                <FaLinkedin></FaLinkedin>
              </a>
              <a className="ml-3 text-gray-500 text-2xl"></a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
