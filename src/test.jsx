import React, { useState, useEffect } from "react";
import "./Projects.css";
import Tooltip from "../Tooltip";
import { MdMedicalServices } from "react-icons/md";
import {
  FaBookOpen,
  FaPersonShelter,
  FaSeedling,
  FaChildReaching,
  FaCircle,
} from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { GiVillage } from "react-icons/gi";
import petaly from "../../assets/Petals/petaly.svg";
import petalo from "../../assets/Petals/petalo.svg";
import petalv from "../../assets/Petals/petalv.svg";
import petali from "../../assets/Petals/petali.svg";
import petalb from "../../assets/Petals/petalb.svg";
import petalg from "../../assets/Petals/petalg.svg";
import petalr from "../../assets/Petals/petalr.svg";
import logo from "../../assets/logo.png";
import Hongirana from "../ProjectModals/Hongirana";

const Projects = () => {
  const [ishoveringOr, setIsHoveringOr] = useState(false);
  const [showModalOr, setShowModalOr] = useState(false);
  const [ishoveringIn, setIsHoveringIn] = useState(false);
  const [showModalIn, setShowModalIn] = useState(false);
  const [ishoveringRe, setIsHoveringRe] = useState(false);
  const [showModalRe, setShowModalRe] = useState(false);
  const [ishoveringYe, setIsHoveringYe] = useState(false);
  const [showModalYe, setShowModalYe] = useState(false);
  const [ishoveringBl, setIsHoveringBl] = useState(false);
  const [showModalBl, setShowModalBl] = useState(false);
  const [ishoveringGr, setIsHoveringGr] = useState(false);
  const [showModalGr, setShowModalGr] = useState(false);
  const [ishoveringVi, setIsHoveringVi] = useState(false);
  const [showModalVi, setShowModalVi] = useState(false);

  const [wid, setWid] = useState(707);

  useEffect(() => {
    if (
      showModalOr ||
      showModalIn ||
      showModalRe ||
      showModalYe ||
      showModalBl ||
      showModalGr ||
      showModalVi
    ) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [
    showModalBl,
    showModalGr,
    showModalIn,
    showModalOr,
    showModalRe,
    showModalVi,
    showModalYe,
  ]);

  useEffect(() => {
    const calculateValue = () => {
      const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      const calculatedValue = Math.floor((1920 / width) * 707);
      setWid(calculatedValue);
    };

    window.addEventListener("resize", calculateValue);

    calculateValue();

    return () => {
      window.removeEventListener("resize", calculateValue);
    };
  }, []);

  return (
    <div className="flex flex-col pt-10 pb-16 relative">
      <h1 className="text-5xl font-Oswald font-bold text-center">
        OUR PROJECTS
      </h1>
      <div
        className="text-2xl font-Fira_Sans_Condensed tracking-tight font-semibold 
        py-10 relative z-10 flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center duration-300">
          <div
            className={`flex flex-col items-center duration-300 ${ishoveringYe ? "scale-105" : "scale-100"}`}>
            <div className="flex items-center gap-1">
              <FaCircle
                className={`text-yellow-400 duration-300 ${ishoveringYe ? "size-5" : "size-3"}`}
              />
              <h1>Hongirana</h1>
            </div>
            <p className="text-lg font-Inter font-extralight">
              A lifeline for underpriveleged children
            </p>
          </div>
        </div>
        <div className="flex gap-[30rem] justify-center">
          <div
            className={`flex flex-col items-center justify-center gap-1 duration-300 ${ishoveringRe ? "scale-105" : ""}`}>
            <div className="flex items-center gap-1">
              <FaCircle
                className={`text-red-700 duration-300 ${ishoveringRe ? "size-5" : "size-3"}`}
              />
              <h1>Arogya</h1>
            </div>
            <p className="text-lg text-center w-44 font-Inter font-extralight">
              Provides healthcare solutions to those in need
            </p>
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-1 duration-300 ${ishoveringBl ? "scale-105" : ""}`}>
            <div className="flex items-center gap-1">
              <FaCircle
                className={`text-sky-400 duration-300 ${ishoveringBl ? "size-5" : "size-3"}`}
              />
              <h1>Grama</h1>
            </div>
            <p className="text-lg text-center w-48 font-Inter font-extralight">
              Holistic development of villages by addressing fundamental needs
            </p>
          </div>
        </div>
        <div className="flex gap-[40rem] justify-center">
          <div
            className={`flex flex-col items-center justify-center gap-1 duration-300 ${ishoveringIn ? "scale-105" : ""}`}>
            <div className="flex gap-1 items-center">
              <FaCircle
                className={`text-sky-800 duration-300 ${ishoveringIn ? "size-5" : "size-3"}`}
              />
              <h1>Ashraya</h1>
            </div>
            <p className="text-lg text-center w-48 font-Inter font-extralight">
              Offers solace and support to homeless
            </p>
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-1 duration-300 ${ishoveringGr ? "scale-105" : ""}`}>
            <div className="flex gap-1 items-center">
              <FaCircle
                className={`text-lime-700 duration-300 ${ishoveringGr ? "size-5" : "size-3"}`}
              />
              <h1>Hasiru</h1>
            </div>
            <p className="text-lg text-center w-56 font-Inter font-extralight">
              Environmental conservation and promotion of awareness
            </p>
          </div>
        </div>
        <div className="flex gap-[50rem] justify-center">
          <div
            className={`flex flex-col items-center justify-center gap-1 duration-300 ${ishoveringOr ? "scale-105" : ""}`}>
            <div className="flex gap-1 items-center">
              <FaCircle
                className={`text-amber-600 duration-300 ${ishoveringOr ? "size-5" : "size-3"}`}
              />
              <h1>Saniha</h1>
            </div>
            <p className="text-lg text-center w-52 font-Inter font-extralight">
              School outreach program to help government schools
            </p>
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-1 duration-300 ${ishoveringVi ? "scale-105" : ""}`}>
            <div className="flex gap-1 items-center">
              <FaCircle
                className={`text-rose-600 duration-300 ${ishoveringVi ? "size-5" : "size-3"}`}
              />
              <h1>Vidya</h1>
            </div>
            <p className="text-lg text-center w-44 font-Inter font-extralight">
              Financial assistance for needy meritorious students
            </p>
          </div>
        </div>
      </div>
      <div className={`flex absolute left-[${wid}px] top-52 w-fit z-20`}>
        <div className="ml-[12rem] mb-20">
          <div
            className="group/or cursor-pointer"
            onMouseEnter={() => setIsHoveringOr(true)}
            onMouseLeave={() => setIsHoveringOr(false)}
            visible={showModalOr}>
            <img
              src={petalo}
              alt="Petal_Orange"
              className="petal size-60 transform -rotate-[85deg] drop-shadow-2xl lap:group-hover/or:-translate-x-3 duration-300 w-fit z-50"
            />
            <FaChildReaching className="size-10 absolute top-80 left-[4.5rem] z-50 lap:group-hover/or:-translate-x-3 duration-300 -rotate-[85deg]" />
          </div>
          <div
            className="group/in cursor-pointer"
            onMouseEnter={() => setIsHoveringIn(true)}
            onMouseLeave={() => setIsHoveringIn(false)}>
            <img
              src={petali}
              alt="Petal_Indigo"
              className="petal size-60 transform -rotate-[60deg] drop-shadow-2xl lap:group-hover/in:-translate-x-3 lap:group-hover/in:-translate-y-2 duration-300 w-fit z-40"
            />
            <FaPersonShelter className="size-10 absolute top-[14.8rem] left-[5rem] z-40 lap:group-hover/in:-translate-x-3 lap:group-hover/in:-translate-y-2 duration-300 -rotate-[60deg]" />
          </div>
          <div
            className="group/re cursor-pointer"
            onMouseEnter={() => setIsHoveringRe(true)}
            onMouseLeave={() => setIsHoveringRe(false)}>
            <img
              src={petalr}
              alt="Petal_Red"
              className="petal size-60 transform -rotate-[30deg] drop-shadow-2xl lap:group-hover/re:-translate-x-2 lap:group-hover/re:-translate-y-3 duration-300 w-fit z-30"
            />
            <MdMedicalServices className="size-10 absolute top-44 left-[9rem] z-30 lap:group-hover/re:-translate-x-2 lap:group-hover/re:-translate-y-3 duration-300 -rotate-[30deg]" />
          </div>
          <div
            className="group/ye cursor-pointer"
            onMouseEnter={() => setIsHoveringYe(true)}
            onMouseLeave={() => setIsHoveringYe(false)}
            onClick={() => setShowModalYe(true)}>
            <img
              src={petaly}
              alt="Petal_Yellow"
              className="petal size-60 drop-shadow-2xl w-fit z-20 lap:group-hover/ye:-translate-y-3 duration-300"
            />
            <LuSchool className="size-10 absolute top-36 left-[14.5rem] z-30 lap:group-hover/ye:-translate-y-3 duration-300" />
          </div>
          <div
            className="group/bl cursor-pointer"
            onMouseEnter={() => setIsHoveringBl(true)}
            onMouseLeave={() => setIsHoveringBl(false)}>
            <img
              src={petalb}
              alt="Petal_Blue"
              className="petal size-60 transform rotate-[30deg] drop-shadow-2xl lap:group-hover/bl:translate-x-2 lap:group-hover/bl:-translate-y-3 duration-300 w-fit z-30"
            />
            <GiVillage className="size-10 absolute top-44 left-[20rem] z-30 lap:group-hover/bl:translate-x-2 lap:group-hover/bl:-translate-y-3 duration-300 rotate-[30deg]" />
          </div>
          <div
            className="group/gr cursor-pointer"
            onMouseEnter={() => setIsHoveringGr(true)}
            onMouseLeave={() => setIsHoveringGr(false)}>
            <img
              src={petalg}
              alt="Petal_Green"
              className="petal size-60 transform rotate-[60deg] drop-shadow-2xl lap:group-hover/gr:translate-x-3 lap:group-hover/gr:-translate-y-2 duration-300 w-fit z-40"
            />
            <FaSeedling className="size-10 absolute top-60 left-[24rem] z-40 lap:group-hover/gr:translate-x-3 lap:group-hover/gr:-translate-y-2 duration-300 rotate-[60deg]" />
          </div>
          <div
            className="group/vi cursor-pointer"
            onMouseEnter={() => setIsHoveringVi(true)}
            onMouseLeave={() => setIsHoveringVi(false)}>
            <img
              src={petalv}
              alt="Petal_Violet"
              className="petal size-60 transform rotate-[85deg] drop-shadow-2xl lap:group-hover/vi:translate-x-3 duration-300 w-fit z-50"
            />
            <FaBookOpen className="size-10 absolute top-80 left-[25rem] z-50 lap:group-hover/vi:translate-x-3 duration-300 rotate-[85deg]" />
          </div>
        </div>
      </div>
      <img
        src={logo}
        alt="Logo"
        className="place-self-center -mt-[13rem] size-44"
      />
      <Hongirana
        visibleYe={showModalYe}
        onClose={() => setShowModalYe(false)}
      />
    </div>
  );
};

export default Projects;
