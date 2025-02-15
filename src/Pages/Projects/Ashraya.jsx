import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import H from "../../assets/Hero.jpg";

const Ashraya = () => {
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
          backgroundImage: `linear-gradient(rgba(21,128,61,0.55), rgba(21,128,61,0.55)), url(${H})`,
        }}>
        <div
          id="sticky-header"
          className={`flex items-center gap-1 z-50 transition-all duration-300 w-full justify-center py-2
             ${
               isFixed
                 ? `fixed top-0 left-0 right-0 backdrop-blur-sm bg-white bg-opacity-40 ${visible ? "translate-y-[5.1rem]" : ""}`
                 : ""
             }`}>
          <div className="h-0.5 bg-sky-800 w-2/3"></div>
          <h1 className="text-8xl whitespace-nowrap text-sky-800 font-Fira_Sans_Condensed font-bold">
            Surabhi Ashraya
          </h1>
          <div className="h-0.5 bg-sky-800 w-2/3"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-2 items-center">
        <h1 className="font-bold font-Oswald tracking-tight text-sky-800 text-6xl -translate-x-[22rem]">
          EMPOWERING LIVES
        </h1>
        <p className="font-Lato tracking-tight w-[60rem] font-bold text-2xl">
          Surabhi Foundation Trust is committed to providing a safe haven and
          essential support to individuals facing homelessness in Bangalore. Our
          night shelter initiative offers a lifeline to those in need, providing
          shelter, meals, healthcare, and counseling services.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 my-10">
        <div className="flex flex-col w-[55rem] bg-green-700 rounded-xl p-6 sticky top-32 gap-2">
          <h1 className="text-4xl text-sky-800 font-Oswald font-bold">
            QUALITY SHELTER
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            We provide a safe and dignified environment for residents, ensuring
            they have a comfortable and secure place to rest and rejuvenate. Our
            facilities are equipped with basic amenities and adhere to strict
            hygiene standards.
          </p>
        </div>
        <div className="flex flex-col w-[55rem] bg-green-600 rounded-xl p-6 sticky top-48 gap-2">
          <h1 className="text-4xl text-sky-800 font-Oswald font-bold">
            COMPREHENSIVE HEALTHCARE
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            Our dedicated team of medical professionals conducts regular health
            check-ups and provides necessary medical treatment to residents. We
            also coordinate with external healthcare providers to ensure access
            to specialized care when needed.
          </p>
        </div>
        <div className="flex flex-col w-[55rem] bg-green-500 rounded-xl p-6 sticky top-[16rem] gap-2">
          <h1 className="text-4xl text-sky-800 font-Oswald font-bold">
            MENTAL HEALTH SUPPORT
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            Our trained counselors offer individual and group counseling
            sessions to address the emotional and psychological needs of
            residents. We provide a safe and supportive space for individuals to
            cope with challenges and develop coping mechanisms.
          </p>
        </div>
        <div className="flex flex-col w-[55rem] bg-green-400 rounded-xl p-6 sticky top-[20rem] gap-2">
          <h1 className="text-4xl text-sky-800 font-Oswald font-bold">
            SOCIAL SECURITY SUPPORT
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            We assist residents in enrolling for various social security
            programs, such as Aadhaar cards, ration cards, and disability
            certificates. This ensures they have access to essential benefits
            and services.
          </p>
        </div>
        <div className="flex flex-col w-[55rem] bg-green-300 rounded-xl p-6 sticky top-[30rem] gap-2">
          <h1 className="text-4xl text-sky-800 font-Oswald font-bold">
            SKILL DEVELOPMENT AND EMPLOYMENT
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            We identify and facilitate vocational training programs tailored to
            the interests and abilities of residents. Our team works closely
            with local employers to help residents find suitable employment
            opportunities.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-8 gap-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-6xl text-sky-800 font-Fira_Sans_Condensed font-bold">
            IMPACT
          </h1>
          <p className="font-Lato tracking-tight w-[58rem] font-bold text-2xl">
            Surabhi's night shelter initiative has made a significant impact on
            the lives of hundreds of individuals facing homelessness. By
            providing essential services and fostering a sense of community, we
            are helping residents rebuild their lives and regain their hope for
            the future.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-6xl text-sky-800 font-Fira_Sans_Condensed font-bold">
            MAKE A DIFFERENCE
          </h1>
          <p className="font-Lato tracking-tight w-[55rem] font-bold text-2xl">
            Your support is vital in ensuring the continued success of our night
            shelter initiative. Consider making a donation or volunteering your
            time to help us provide essential services to those in need.
          </p>
          <Link to="/donate">
            <button
              className="bg-sky-800 rounded-xl text-white font-Outfit text-lg px-2 py-1 transition-transform
              duration-300 ease-out lap:hover:scale-[103%]
            ">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ashraya;
