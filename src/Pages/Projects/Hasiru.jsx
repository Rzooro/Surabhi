import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import H from "../../assets/Hero.jpg";

const Hasiru = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [headerPosition, setHeaderPosition] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = document.getElementById("sticky-header");

    if (element) {
      setHeaderPosition(element.offsetTop);
    }

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > headerPosition) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      if (currentScrollPos < 290) {
        setIsFixed(false);
      }

      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerPosition, prevScrollPos]);

  return (
    <>
      <div
        className={`mt-[5.1rem] bg-cover flex flex-col justify-center h-[32rem]`}
        style={{
          backgroundImage: `linear-gradient(rgba(194,65,12,0.6), rgba(194,65,12,0.6)), url(${H})`,
        }}>
        <div
          id="sticky-header"
          className={`flex items-center gap-1 z-50 transition-all duration-300 w-full justify-center py-2
             ${
               isFixed
                 ? `fixed top-0 left-0 right-0 backdrop-blur-sm bg-white bg-opacity-40 ${visible ? "translate-y-[5.1rem]" : ""}`
                 : ""
             }`}>
          <div className="h-0.5 bg-lime-700 w-2/3"></div>
          <h1 className="text-8xl whitespace-nowrap text-lime-700 font-Fira_Sans_Condensed font-bold">
            Surabhi Hasiru
          </h1>
          <div className="h-0.5 bg-lime-700 w-2/3"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-5 items-center">
        <h1 className="font-bold font-Oswald tracking-tight text-lime-700 text-6xl -translate-x-[16rem]">
          NURTURING NATURE'S LEGACY
        </h1>
        <p className="font-Lato tracking-tight w-[60rem] font-bold text-2xl">
          Surabhi Foundation Trust is deeply committed to preserving our
          planet's natural resources for future generations. Our environmental
          initiatives are grounded in a passion for nature and a belief in the
          power of collective action. We recognize the critical role of healthy
          ecosystems in supporting healthy life on Earth and are dedicated to
          taking concrete steps to protect and restore them.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 py-10">
        <div className="flex flex-col w-[50rem] bg-orange-600 rounded-xl p-6 sticky top-32 gap-4">
          <h1 className="text-4xl text-lime-700 font-Oswald font-bold">
            AFFORESTATION EFFORTS
          </h1>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <p className="w-[45rem] font-Lato text-xl">
                We have successfully planted over 10,000 saplings, contributing
                to a greener and healthier planet.
              </p>
            </li>
            <li>
              <p className="w-[45rem] font-Lato text-xl">
                Enhanced the aesthetic appeal of local landscapes and created
                new green spaces.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-[50rem] bg-orange-500 rounded-xl p-6 sticky top-48 gap-2">
          <h1 className="text-4xl text-lime-700 font-Oswald font-bold">
            WATER BODIES' RESTORATION
          </h1>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <p className="w-[45rem] font-Lato text-xl">
                We have successfully planted over 10,000 saplings, contributing
                to a greener and healthier planet.
              </p>
            </li>
            <li>
              <p className="w-[45rem] font-Lato text-xl">
                Improved water quality and restored the lake's natural habitat.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col bg-gray-200 items-center gap-3 py-5">
        <h1 className="text-6xl text-lime-700 font-Oswald font-bold">
          OUR VISION
        </h1>
        <p className="font-Lato tracking-tight w-[60rem] font-bold text-xl">
          Surabhi Foundation Trust aims to plant an additional 40,000 trees in
          the coming years, further strengthening our commitment to
          environmental conservation and combating climate change.
        </p>
      </div>
      <div className="flex flex-col items-center py-8 gap-5">
        <h1 className="text-6xl text-lime-700 font-Fira_Sans_Condensed font-bold">
          Be the Change<span className="text-orange-500">!</span>
        </h1>
        <div className="flex tab:flex-row flex-col items-center gap-3">
          <Link to="/Volunteer-or-Intern">
            <div
              className="rounded-2xl px-5 py-2 flex flex-col gap-2 ring-1 ring-orange-500 lap:hover:ring-4 
            lap:hover:ring-orange-500 transition-all duration-300 w-60">
              <h1 className="text-4xl text-lime-700 font-Fresca font-bold tracking-tight">
                Volunteer
              </h1>
              <p className="font-Lato">
                Join our tree-planting drives and environmental initiatives.
              </p>
            </div>
          </Link>
          <Link to="/Donate">
            <div
              className="rounded-2xl px-5 py-2 flex flex-col gap-2 ring-1 ring-orange-500 lap:hover:ring-4 
            lap:hover:ring-orange-500 transition-all duration-300 w-60">
              <h1 className="text-4xl text-lime-700 font-Fresca font-bold tracking-tight">
                Donate
              </h1>
              <p className="font-Lato">
                Join our tree-planting drives and environmental initiatives.
              </p>
            </div>
          </Link>
          <Link to="/Contact-us">
            <div
              className="rounded-2xl px-5 py-2 flex flex-col gap-2 ring-1 ring-orange-500 lap:hover:ring-4 
            lap:hover:ring-orange-500 transition-all duration-300 w-72">
              <h1 className="text-4xl text-lime-700 whitespace-nowrap font-Fresca font-bold tracking-tight">
                Spread Awareness
              </h1>
              <p className="font-Lato w-56">
                Advocate for environmental consciousness in your community.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <p className="font-Lato font-bold text-2xl">
          Together, can create a sustainable future for generations to come.
        </p>
      </div>
    </>
  );
};

export default Hasiru;
