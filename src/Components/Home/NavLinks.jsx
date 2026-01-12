import React, { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const NavLinks = ({ onNavigate }) => {
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
        { name: "Individual / Corporate", link: "/individual-or-corporate" },
      ],
    },
    { head: "Contact Us", submenu: false, link: "/contact-us" },
  ];

  const isLinkActive = (sublinks) =>
    sublinks.some(
      ({ link }) =>
        location.pathname === link || location.pathname.startsWith(`${link}/`)
    );

  const toggleSubMenu = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);

      if (window.innerWidth < 1024) {
        setTimeout(() => {
          activeSubmenuRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
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
              onClick={() => toggleSubMenu(index)}>
              <h1 className="inline-flex items-center">
                {l.head}
                <span
                  className={`ml-1 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}>
                  <IoIosArrowDown className="lap:group-hover:translate-y-0.5 transition-all duration-300" />
                </span>
              </h1>
            </div>
          ) : (
            <NavLink
              to={l.link}
              end
              className="inline-flex items-center"
              onClick={onNavigate}>
              <h1>{l.head}</h1>
            </NavLink>
          )}

          {l.submenu && (
            <SubMenu
              sublinks={l.sublinks}
              isOpen={activeIndex === index}
              ref={activeIndex === index ? activeSubmenuRef : null}
              onNavigate={onNavigate}
            />
          )}

          <div
            className={`lap:block hidden bg-lime-600 h-0.5 rounded-[2rem]
              ${
                l.submenu && isLinkActive(l.sublinks) ? "w-full" : "w-0"
              } lap:group-hover:w-full transition-all duration-300`}
          />
        </div>
      ))}
    </>
  );
};

const SubMenu = React.forwardRef(function SubMenu(
  { sublinks, isOpen, onNavigate },
  ref
) {
  return (
    <div
      ref={ref}
      className={`transition-all duration-300 w-fit ease-in-out overflow-hidden
        ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }
        lap:max-h-full lap:opacity-0 lap:invisible
        lap:group-hover:opacity-100 lap:group-hover:visible`}>
      <div
        className="p-4 bg-lime-600 shadow-lg rounded-lg mt-2 lap:mt-6
          lap:absolute lap:left-1/2 lap:-translate-x-1/2
          lap:transition-opacity lap:duration-300 text-white">
        {sublinks.map((sublink, subIndex) => (
          <NavLink
            key={subIndex}
            to={sublink.link}
            end
            onClick={onNavigate}
            className={({ isActive }) =>
              `block rounded-lg transition-all duration-300 ${
                isActive ? "bg-lime-700" : "hover:bg-lime-700"
              }`
            }>
            <span className="block px-4 py-2 text-white hover:-translate-y-0.5 transition-transform duration-300">
              {sublink.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
});

export default NavLinks;
