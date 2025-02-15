import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import H from "../../assets/Hero.jpg";

const Grama = () => {
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
          backgroundImage: `linear-gradient(rgba(190,24,93,0.55), rgba(190,24,93,0.55)), url(${H})`,
        }}>
        <div
          id="sticky-header"
          className={`flex items-center gap-1 z-50 transition-all duration-300 w-full justify-center py-2
             ${
               isFixed
                 ? `fixed top-0 left-0 right-0 backdrop-blur-sm bg-white bg-opacity-40 ${visible ? "translate-y-[5.1rem]" : ""}`
                 : ""
             }`}>
          <div className="h-0.5 bg-sky-400 w-2/3"></div>
          <h1 className="text-8xl whitespace-nowrap text-sky-400 font-Fira_Sans_Condensed font-bold">
            Surabhi Grama
          </h1>
          <div className="h-0.5 bg-sky-400 w-2/3"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-2 items-center">
        <h1 className="font-bold font-Oswald tracking-tight text-sky-400 text-6xl -translate-x-[20rem]">
          BRIGHTER FUTURES
        </h1>
        <p className="font-Lato tracking-tight w-[60rem] font-bold text-2xl">
          Surabhi Foundation Trust is committed to identifying and empowering
          disregarded villages, fostering self-sustainability through community
          engagement. Our focus is on holistic development, addressing
          fundamental needs and creating a brighter future for rural
          communities.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 my-10">
        <div className="flex flex-col w-[55rem] bg-pink-700 rounded-xl p-6 sticky top-32 gap-2">
          <h1 className="text-4xl text-sky-400 font-Oswald font-bold">
            EDUCATION AWARENESS
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            We conduct awareness campaigns and organize parent-teacher meetings
            to promote the importance of education and encourage parental
            involvement. Our initiatives aim to dispel misconceptions about
            education and highlight its long-term benefits for individuals and
            communities.
          </p>
        </div>
        <div className="flex flex-col w-[55rem] bg-pink-600 rounded-xl p-6 sticky top-48 gap-2">
          <h1 className="text-4xl text-sky-400 font-Oswald font-bold">
            EDUCATIONAL SUPPORT
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            We provide free tuition classes and essential educational materials
            to support students' academic growth. Our goal is to ensure that
            every child has access to quality education and the opportunity to
            reach their full potential.
          </p>
        </div>
        <div className="flex flex-col w-[55rem] bg-pink-500 rounded-xl p-6 sticky top-[18.5rem] gap-2">
          <h1 className="text-4xl text-sky-300 font-Oswald font-bold">
            SKILL DEVELOPMENT
          </h1>
          <p className="w-[47rem] font-Lato text-xl">
            We offer a comprehensive range of vocational training programs,
            including agriculture, livestock rearing, carpentry, and tailoring,
            to equip villagers with the skills necessary to earn a sustainable
            livelihood. Our training programs are conducted by experienced
            professionals who provide hands-on training and mentorship.
          </p>
        </div>
      </div>
      <div className="h-96"></div>
      <div className="flex flex-col items-center gap-5 py-14">
        <h1 className="text-6xl text-sky-400 font-Fira_Sans_Condensed font-bold">
          MAKE A DIFFERENCE
        </h1>
        <p className="font-Lato tracking-tight w-[55rem] font-bold text-2xl">
          Your support is vital in ensuring the continued success of our rural
          empowerment initiative. Consider making a donation or volunteering
          your time to help us create a brighter future for these communities.
        </p>
        <Link to="/donate">
          <button
            className="bg-sky-400 rounded-xl font-Outfit text-lg px-2 py-1 transition-transform
              duration-300 ease-out lap:hover:scale-[103%]
            ">
            Donate Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Grama;
