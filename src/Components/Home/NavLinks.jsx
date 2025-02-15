import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NavLinks = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);
  const activeSubmenuRef = useRef(null);

  const links = [
    {
      head: "The Foundation",
      submenu: true,
      sublinks: [
        { name: "About Us", link: "/about-us" },
        { name: "How we Work", link: "/how-we-work" },
        { name: "Our Impact", link: "/our-impact" },
        { name: "Resources", link: "/resources" },
      ],
    },
    {
      head: "Projects",
      submenu: true,
      sublinks: [
        { name: "Surabhi Hongirana", link: "/hongirana" },
        { name: "Vidya Surabhi", link: "/vidya" },
        { name: "Surabhi Hasiru", link: "/hasiru" },
        { name: "Surabhi Ashraya", link: "/ashraya" },
        { name: "Surabhi Grama", link: "/grama" },
        { name: "Surabhi Saniha", link: "/saniha" },
        { name: "Arogya Surabhi", link: "/arogya" },
      ],
    },
    {
      head: "Get Involved",
      submenu: true,
      sublinks: [
        { name: "Volunteer / Intern", link: "/volunteer-or-intern" },
        { name: "Individual / Corporate", link: "/individual-0r-corporate" },
      ],
    },
    { head: "Contact Us", submenu: false, link: "/contact-us" },
  ];

  const isLinkActive = (sublinks) => {
    return sublinks.some((sublink) => {
      if (sublink.link === "/") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith(sublink.link);
    });
  };

  const toggleSubMenu = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setTimeout(() => {
        if (activeSubmenuRef.current) {
          activeSubmenuRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <>
      {links.map((l, index) => (
        <div
          key={index}
          className="relative group font-Lato font-[600] whitespace-nowrap lap:py-6">
          {l.submenu ? (
            <div
              className="cursor-pointer lap:flex lap:items-center"
              onClick={() => toggleSubMenu(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`submenu-${index}`}>
              <h1
                className={`inline-flex items-center ${
                  isLinkActive(l.sublinks) ? "underline-active" : ""
                }`}>
                {l.head}
                <span
                  className={`ml-1 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}>
                  <IoIosArrowDown className="duration-300 lap:group-hover:translate-y-0.5" />
                </span>
              </h1>
            </div>
          ) : (
            <NavLink
              to={l.link}
              className="cursor-pointer inline-flex items-center">
              <h1>{l.head}</h1>
            </NavLink>
          )}
          {l.submenu && (
            <SubMenu
              sublinks={l.sublinks}
              isOpen={activeIndex === index}
              ref={activeIndex === index ? activeSubmenuRef : null}
            />
          )}
          <div
            className={`lap:block hidden bg-lime-600 h-0.5 rounded-[2rem] ${
              l.submenu && isLinkActive(l.sublinks) ? "w-full" : "w-0"
            } lap:group-hover:w-full transition-all duration-300`}></div>
        </div>
      ))}
    </>
  );
};

const SubMenu = React.forwardRef(({ sublinks, isOpen }, ref) => (
  <div
    ref={ref}
    className={`transition-all duration-300 w-fit ease-in-out overflow-hidden ${
      isOpen
        ? "max-h-screen opacity-100 visible"
        : "max-h-0 opacity-0 invisible"
    } lap:max-h-full lap:opacity-0 lap:invisible lap:group-hover:opacity-100 lap:group-hover:visible`}>
    <div
      className="p-4 bg-lime-600 shadow-lg rounded-lg mt-2 lap:mt-6 lap:absolute lap:left-1/2 lap:transform 
    lap:-translate-x-1/2 lap:shadow-lg lap:rounded-lg lap:transition-opacity lap:duration-300 text-white">
      {sublinks.map((sublink, subIndex) => (
        <NavLink
          to={sublink.link}
          key={subIndex}
          className={({ isActive }) => (isActive ? "active block" : "block")}>
          <button
            className="block px-4 py-2 text-start desk:text-lg text-white ease-in-out w-full
                      hover:bg-lime-700 transition-all duration-300 rounded-lg hover:-translate-y-0.5">
            {sublink.name}
          </button>
        </NavLink>
      ))}
    </div>
  </div>
));

export default NavLinks;
