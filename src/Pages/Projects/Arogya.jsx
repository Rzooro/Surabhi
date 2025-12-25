import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import H from "../../assets/Hero.jpg";

const Arogya = () => {
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
        className={`mt-[4rem] lap:mt-[5.1rem] bg-cover flex flex-col justify-center h-[24rem] lap:h-[32rem]`}
        style={{
          backgroundImage: `linear-gradient(rgba(255,0,0,0.55), rgba(255,0,0,0.55)), url(${H})`,
        }}>
        <div
          id="sticky-header"
          className={`flex items-center gap-1 z-50 transition-all duration-300 w-full justify-center py-2
             ${
               isFixed
                 ? `fixed top-0 left-0 right-0 backdrop-blur-sm bg-white bg-opacity-40 ${visible ? "translate-y-[4rem] lap:translate-y-[5.1rem]" : ""}`
                 : ""
             }`}>
          <div className="h-0.5 bg-green-500 w-2/3"></div>
          <h1 className="text-6xl lap:text-8xl whitespace-nowrap text-green-500 font-Fira_Sans_Condensed font-bold">
            Surabhi Arogya
          </h1>
          <div className="h-0.5 bg-green-500 w-2/3"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-2 items-center">
        <h1 className="font-bold font-Oswald tracking-tight text-green-500 text-4xl lap:text-6xl lap:-translate-x-[22rem]">
          COMMUNITY HEALTHCARE
        </h1>
        <p className="font-Lato tracking-tight w-[95%] lap:w-[60rem] font-bold text-xl lap:text-2xl">
          Arogya Surabhi is dedicated to improving health awareness and
          providing accessible healthcare to underserved individuals in rural
          and marginalized communities. We deliver doorstep health solutions
          through our trained Arogya Mitra workers, who assess family health
          needs and guide individuals on preventive measures. This initiative
          empowers communities to take control of their health while also
          creating employment opportunities for youth.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 lap:gap-5 my-6 lap:my-10">
        <div className="flex flex-col w-[95%] lap:w-[55rem] bg-red-800 rounded-xl p-6 sticky top-32 gap-2">
          <h1 className="text-3xl w-[95%] lap:text-4xl text-green-500 font-Oswald font-bold">
            EXTENSIVE REACH
          </h1>
          <p className="w-[95%] lap:w-[45rem] font-Lato text-lg lap:text-xl">
            Conducted over 56 health camps, benefiting approximately 10,450
            individuals across rural and urban areas with essential medical
            services and health education.
          </p>
        </div>
        <div className="flex flex-col w-[95%] lap:w-[55rem] bg-red-700 rounded-xl p-6 sticky top-48 gap-2">
          <h1 className="text-3xl lap:text-4xl text-green-500 font-Oswald font-bold">
            AROGYA MITRA PROJECT
          </h1>
          <p className="w-[95%] lap:w-[45rem] font-Lato text-lg lap:text-xl">
            Reached over 200,000 beneficiaries in Bengaluru Urban, Doddaballapur
            Taluk, and Nelamangala Taluk through our community health worker
            program, providing ongoing support and guidance within their
            communities.
          </p>
        </div>
        <div className="flex flex-col w-[95%] lap:w-[55rem] bg-red-600 rounded-xl p-6 sticky top-[16rem] gap-2">
          <h1 className="text-3xl lap:text-4xl text-green-500 font-Oswald font-bold">
            SUPPORTING STUDENTS
          </h1>
          <p className="w-[95%] lap:w-[45rem] font-Lato text-lg lap:text-xl">
            Provided spectacles to 230 students in need, ensuring their access
            to education is not hindered by vision problems and enabling them to
            learn effectively.
          </p>
        </div>
        <div className="flex flex-col w-[95%] lap:w-[55rem] bg-red-500 rounded-xl p-6 sticky top-[20rem] gap-2">
          <h1 className="text-3xl lap:text-4xl text-green-500 font-Oswald font-bold">
            DISASTER RELIEF
          </h1>
          <p className="w-[95%] lap:w-[45rem] font-Lato text-lg lap:text-xl">
            Organized mega health camps in flood-affected areas, benefiting
            approximately 1,600 people with critical medical assistance and
            resources during times of crisis.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-8 gap-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl lap:text-6xl text-green-500 font-Fira_Sans_Condensed font-bold">
            OUR APPROACH
          </h1>
          <p className="font-Lato tracking-tight w-[95%] lap:w-[58rem] font-bold text-xl lap:text-2xl text-center">
            Arogya Surabhi's holistic approach to community healthcare
            emphasizes prevention, education, and accessibility. By training and
            deploying Arogya Mitras, we ensure consistent and personalized
            healthcare support reaches those who need it most. We are committed
            to fostering healthier communities and improving lives.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl lap:text-6xl text-green-500 font-Fira_Sans_Condensed font-bold">
            MAKE A DIFFERENCE
          </h1>
          <p className="font-Lato tracking-tight w-[95%] lap:w-[55rem] font-bold text-xl lap:text-2xl text-center">
            Arogya Surabhi relies on the generosity of individuals like you to
            make a lasting impact on community health. Your donation fuels our
            programs, enabling us to conduct more health camps, train more
            Arogya Mitras, and provide critical support to those who lack access
            to quality healthcare. Invest in a healthier future for underserved
            communities – donate today.
          </p>
          <Link to="/donate">
            <button
              className="bg-green-500 rounded-xl text-white font-Outfit text-lg px-2 py-1 transition-transform
              duration-300 ease-out lap:hover:scale-[103%]
            ">
              Support Our Mission
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Arogya;
