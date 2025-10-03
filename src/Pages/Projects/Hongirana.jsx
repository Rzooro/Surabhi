import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import H from "../../assets/Hero.jpg";
import { FaPuzzlePiece, FaShieldHeart } from "react-icons/fa6";
import { FaTools, FaBasketballBall } from "react-icons/fa";

const Hongirana = () => {
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
          backgroundImage: `linear-gradient(rgba(135, 80, 156, 0.6), rgba(135, 80, 156, 0.6)), url(${H})`,
        }}>
        <div
          id="sticky-header"
          className={`flex items-center gap-1 z-50 transition-all duration-300 w-full justify-center py-2
             ${
               isFixed
                 ? `fixed top-0 left-0 right-0 backdrop-blur-sm bg-white bg-opacity-40 ${visible ? "translate-y-[4rem] lap:translate-y-[5.1rem]" : ""}`
                 : ""
             }`}>
          <div className="h-0.5 bg-yellow-500 w-2/3"></div>
          <h1 className="text-5xl lap:text-8xl whitespace-nowrap text-yellow-500 font-Fira_Sans_Condensed font-bold">
            Surabhi Hongirana
          </h1>
          <div className="h-0.5 bg-yellow-500 w-2/3"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3 lap:gap-5 py-2 items-center">
        <h1 className="font-bold font-Oswald tracking-tight text-yellow-500 text-3xl -translate-x-[8rem] lap:text-6xl lap:-translate-x-[25rem]">
          OUR DREAM
        </h1>
        <p className="font-Lato tracking-tight lap:w-[60rem] font-bold w-[95%] lap:text-2xl">
          "Hongirana," the flagship project of Surabhi Foundation Trust®, is a
          transformative initiative that provides a lifeline for children facing
          any form of deprivation. This project reaches out to orphans,
          single-parent families, financially deprived youngsters, rag pickers,
          runaways, and those facing challenges such as parental alcoholism or
          abuse, sickness and dropouts with a compassionate approach.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 lap:gap-5 my-6 lap:my-10">
        <div className="flex flex-col w-[25rem] lap:w-[55rem] bg-fuchsia-800 rounded-xl p-6 sticky top-32 gap-2">
          <h1 className="text-2xl lap:text-4xl text-yellow-500 font-Oswald font-bold">
            COMPREHENSIVE SUPPORT
          </h1>
          <p className="lap:w-[45rem] font-Lato text-white lap:text-xl">
            Hongirana goes beyond basic necessities, offering food,
            accommodation, clothing, and education to the children it serves.
            The project is designed to address the multifaceted needs of the
            beneficiaries.
          </p>
        </div>
        <div className="flex flex-col w-[25rem] lap:w-[55rem] bg-fuchsia-700 rounded-xl p-6 sticky top-48 gap-2">
          <h1 className="text-2xl lap:text-4xl text-yellow-500 font-Oswald font-bold">
            PERSONALITY DEVELOPMENT AND <br /> SOCIAL VALUES
          </h1>
          <p className="lap:w-[45rem] font-Lato text-white lap:text-xl">
            Recognizing the importance of holistic development, Hongirana
            focuses on imparting personality development and instilling
            essential social values in the children under its care. This
            approach aims to prepare them for a well-rounded and positive
            future.
          </p>
        </div>
        <div className="flex flex-col w-[25rem] lap:w-[55rem] bg-fuchsia-600 rounded-xl p-6 sticky top-[18rem] lap:top-[18.5rem] gap-2">
          <h1 className="text-2xl lap:text-4xl text-yellow-500 font-Oswald font-bold">
            HEALTH AND HYGIENE
          </h1>
          <p className="lap:w-[45rem] font-Lato text-white lap:text-xl">
            The project places a significant emphasis on the health and hygiene
            of the children. Regular health check-ups, conducted under the
            guidance of medical professionals, ensure that the well-being of
            each child is monitored and maintained.
          </p>
        </div>
        <div className="flex flex-col w-[25rem] lap:w-[55rem] bg-fuchsia-500 rounded-xl p-6 sticky top-[30rem] gap-2">
          <h1 className="text-2xl lap:text-4xl text-yellow-400 font-Oswald font-bold">
            SCALE AND IMPACT
          </h1>
          <p className="lap:w-[45rem] font-Lato text-white lap:text-xl">
            Hongirana has expanded its reach to encompass 235 children across
            seven different Surabhi homes in urban and suburban Bangalore. The
            project's impact is evident in its successful rescue and
            rehabilitation of approximately 5250 children, reintegrating them
            into mainstream society.
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-gray-200 items-center gap-3 lap:gap-5 py-6 lap:py-10">
        <h1 className="font-bold font-Oswald tracking-tight text-yellow-500 text-3xl lap:text-6xl flex flex-col lap:flex-row lap:gap-3 lap:items-center">
          SURABHI SEVADHAMA:{" "}
          <span className="font-Dancing_Script text-fuchsia-600">
            A Home away from home
          </span>
        </h1>
        <p className="w-[95%] lap:w-[52rem] font-Lato lap:text-lg pt-2">
          Surabhi Sevadhama is a visionary project dedicated to providing a
          nurturing home for 1000 opportunity-deprived children from the
          northern part of Karnataka. Our state-of-the-art campus, currently
          under construction, will offer a safe and supportive environment where
          these children can thrive.
        </p>
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-bold font-Oswald text-yellow-500 mt-10 text-3xl lap:text-5xl flex items-center">
            THINGS YOU
            <span className="text-fuchsia-600">'</span>LL LOVE ABOUT US
            <span className="text-fuchsia-600">!</span>
          </h1>
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col w-fit items-center lap:flex-row lap:gap-14 gap-3">
              <div className="flex justify-center gap-5">
                <div className="mt-3 lap:mt-0 px-2 lap:px-4 py-2 lap:py-4 bg-yellow-500 rounded-2xl lap:rounded-3xl h-fit">
                  <FaShieldHeart className="size-8 lap:size-10" />
                </div>
                <div className="lap:mt-2 flex flex-col">
                  <h1 className="font-Inter font-bold text-lg w-fit">
                    Comprehensive Care
                  </h1>
                  <p className="font-lato w-[20rem]">
                    {" "}
                    We provide holistic care, including quality education,
                    healthcare, nutrition, and emotional support.
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-5">
                <div className="mt-3 lap:mt-0 px-2 lap:px-4 py-2 lap:py-4 bg-yellow-500 rounded-2xl lap:rounded-3xl h-fit">
                  <FaPuzzlePiece className="size-8 lap:size-10 translate-x-1" />
                </div>
                <div className="lap:mt-2">
                  <h1 className="font-Inter font-bold text-lg w-fit">
                    Personalized Attention
                  </h1>
                  <p className="font-lato w-[20rem]">
                    {" "}
                    Our dedicated staff work closely with each child to
                    understand their unique needs and provide tailored
                    assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lap:flex-row lap:gap-14 gap-3">
              <div className="flex justify-center gap-5">
                <div className="mt-3 lap:mt-0 px-2 lap:px-4 py-2 lap:py-4 bg-yellow-500 rounded-2xl lap:rounded-3xl h-fit">
                  <FaTools className="size-8 lap:size-10" />
                </div>
                <div className="">
                  <h1 className="font-Inter font-bold text-lg w-fit">
                    Skill Attention
                  </h1>
                  <p className="font-lato w-[20rem]">
                    {" "}
                    We foster a range of skills, including academic, vocational,
                    and life skills, to prepare children for a brighter future.
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-5">
                <div className="mt-3 lap:mt-0 px-2 lap:px-4 py-2 lap:py-4 bg-yellow-500 rounded-2xl lap:rounded-3xl h-fit">
                  <FaBasketballBall className="size-8 lap:size-10" />
                </div>
                <div className="">
                  <h1 className="font-Inter font-bold text-lg w-fit">
                    Recreational Activities
                  </h1>
                  <p className="font-lato w-[20rem]">
                    We offer a variety of recreational activities, such as
                    sports, arts, and cultural programs, to promote holistic
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 gap-8">
        <p className="font-Lato font-bold lap:text-lg w-[95%] lap:w-[58rem]">
          Your generous donation will help us complete the construction of
          Surabhi Sevadhama and ensure that these children have the opportunity
          to reach their full potential. Every contribution, no matter the size,
          makes a difference. <br /> Join us in building a better tomorrow for
          the next generation.
        </p>
        <Link to="/donate">
          <button
            className="bg-yellow-500 rounded-xl font-Outfit lap:text-lg px-2 py-1 transition-transform
            duration-300 ease-out lap:hover:scale-[103%]
          ">
            Donate Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hongirana;
