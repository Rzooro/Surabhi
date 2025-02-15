import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import { ImOffice } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-gray-900 mt-auto z-[101]">
      <div
        className="grid lap:grid-cols-4 grid-cols-2 lap:px-12 lap:py-5 border-b border-gray-500 px-6 py-4 gap-y-5
           tab:grid-cols-4">
        <div className="text-white w-fit h-fit">
          <h1 className="desk:text-3xl lap:text-2xl text-lg mb-4 font-bold whitespace-nowrap w-fit h-fit">
            The Foundation
          </h1>
          <ul className="desk:text-lg lap:text-base text-sm font-Outfit flex-col flex gap-2">
            <Link
              to="about-us"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              About Us
            </Link>
            <Link
              to="how-we-work"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              How we Work
            </Link>
            <Link
              to="our-impact"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Our Impact
            </Link>
          </ul>
        </div>
        <div className="text-white whitespace-nowrap w-fit h-fit">
          <h1 className="desk:text-3xl lap:text-2xl text-lg mb-4 font-bold">
            Projects
          </h1>
          <ul className="desk:text-lg lap:text-base text-sm font-Outfit flex-col flex gap-2">
            <Link
              to="hongirana"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Surabhi Hongirana
            </Link>
            <Link
              to="vidya"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Vidya Surabhi
            </Link>
            <Link
              to="hasiru"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Surabhi Hasiru
            </Link>
            <Link
              to="ashraya"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Surabhi Ashraya
            </Link>
            <Link
              to="grama"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Surabhi Grama
            </Link>
            <Link
              to="saniha"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Surabhi Saniha
            </Link>
            <Link
              to="arogya"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Arogya Surabhi
            </Link>
          </ul>
        </div>
        <div className="text-white whitespace-nowrap w-fit h-fit">
          <h1 className="desk:text-3xl lap:text-2xl text-lg mb-4 font-bold">
            Get Involved
          </h1>
          <ul className="desk:text-lg lap:text-base text-sm font-Outfit flex-col flex gap-1">
            <Link
              to="volunteer-or-intern"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Volunteer / Intern
            </Link>
            <Link
              to="fundraise"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Fundraise
            </Link>
            <Link
              to="individual"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Individual
            </Link>
            <Link
              to="corporate"
              className="cursor-pointer lap:hover:text-gray-400 duration-100">
              Corporate
            </Link>
          </ul>
        </div>
        <div className="text-white w-fit h-fit">
          <h1 className="desk:text-3xl lap:text-2xl text-lg mb-4 font-bold">
            Connect with Us
          </h1>
          <ul className="desk:text-lg lap:text-base text-sm font-Outfit flex-col flex gap-2">
            <li className="flex items-center gap-2 cursor-pointer lap:hover:text-gray-400 duration-100">
              <MdCall className="size-4" />
              +91 8073779126
            </li>
            <li className="flex items-center gap-2 cursor-pointer lap:hover:text-gray-400 duration-100">
              <MdEmail className="size-4" />
              surabhitrust@gmail.com
            </li>
            <li className="flex gap-2 cursor-pointer lap:hover:text-gray-400 duration-100">
              <ImOffice className="size-4" />
              #22, 1st cross, Siddappa Layout, Gubbalala, <br /> near
              Vajarahalli metro station, <br />
              Kanakpura Main road, <br />
              Bengaluru-560061
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 text-white justify-center lap:py-5 py-4">
        <FaFacebookF className="desk:size-8 size-6 lap:hover:bg-white lap:hover:text-gray-900 duration-300 rounded-sm" />
        <FaInstagram className="desk:size-8 size-6 lap:hover:bg-white lap:hover:text-gray-900 duration-300 rounded-sm" />
        <FaLinkedin className="desk:size-8 size-6 lap:hover:bg-white lap:hover:text-gray-900 duration-300 rounded-sm" />
        <FaYoutube className="desk:size-8 size-6 lap:hover:bg-white lap:hover:text-gray-900 duration-300 rounded-sm" />
        <FaXTwitter className="desk:size-8 size-6 lap:hover:bg-white lap:hover:text-gray-900 duration-300 rounded-sm" />
      </div>
    </div>
  );
};

export default Footer;
