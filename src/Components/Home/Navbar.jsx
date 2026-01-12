import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div>
      <nav
        className={`fixed top-0 right-0 left-0 lap:px-8 lap:py-1 inline-flex px-2 py-1 justify-between items-center z-[101] bg-white shadow-md transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}>
        {/* LOGO */}
        <div className="inline-flex items-center cursor-pointer">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src={logo}
              alt="Logo"
              className="desk:w-24 lap:w-[5rem] w-[3.3rem]"
            />
          </Link>
        </div>

        {/* NAV CONTENT */}
        <div className="items-center desk:text-lg lap:text-base text-sm py-0">
          <ul className="flex desk:gap-6 lap:gap-5 items-center gap-2">
            {/* DESKTOP LINKS */}
            <div className="hidden lap:flex gap-5">
              <NavLinks />
            </div>

            {/* DONATE BUTTON */}
            <Link to="/donate">
              <button
                className="bg-lime-600 rounded-2xl px-3 py-3 scale-[80%] font-Outfit font-[600]
                text-white transition ease-in-out lap:hover:bg-lime-700 duration-200 lap:scale-100">
                Donate Now
              </button>
            </Link>

            {/* MOBILE TOGGLE */}
            <div
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="lap:hidden cursor-pointer">
              {isOpen ? (
                <AiOutlineClose className="size-7" />
              ) : (
                <AiOutlineMenu className="size-7" />
              )}
            </div>
          </ul>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[100] transition duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={toggleMenu}
      />

      {/* MOBILE MENU */}
      <ul
        className={`lap:hidden fixed top-20 flex flex-col gap-8 z-[101] bg-white
          py-5 pl-5 w-[95%] left-[2.5%] h-80 rounded-lg overflow-auto
          transition duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}>
        <NavLinks onNavigate={() => setIsOpen(false)} />

        {/* MOBILE DONATE */}
        <Link to="/donate" onClick={() => setIsOpen(false)}>
          <li
            className="bg-lime-600 rounded-2xl px-3 py-3 -ml-3 scale-90
            font-Outfit font-[600] transition duration-200 w-fit text-black">
            Donate Now
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
