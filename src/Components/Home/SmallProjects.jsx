import React from "react";
import { MdMedicalServices } from "react-icons/md";
import {
  FaBookOpen,
  FaPersonShelter,
  FaSeedling,
  FaChildReaching,
} from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import { GiVillage } from "react-icons/gi";

const SmallProjects = () => {
  return (
    <div className="flex flex-col my-8 gap-5 lap:hidden">
      <h1 className="text-5xl my-2 font-Oswald font-bold text-center tracking-tight">
        OUR PROJECTS
      </h1>
      <div className="flex relative shadow-xl gap-4 overflow-hidden flex-col border border-gray-200 place-self-center items-center rounded-xl px-4 py-2">
        <div className="absolute -z-10 -top-14 -right-14 bg-yellow-400 size-32 rounded-[50%]"></div>
        <LuSchool className="size-20" />
        <h1 className="text-3xl font-Oswald font-semibold tracking-tight">
          Hongirana
        </h1>
        <p className="w-52 text-center">
          A lifeline for underpriveleged children
        </p>
        <button className="rounded-lg px-2 py-1 font-Kanit bg-yellow-400">
          Know More
        </button>
      </div>
      <div className="flex flex-col tab:flex-row justify-center gap-5">
        <div className="flex relative shadow-xl place-self-center overflow-hidden items-center px-4 py-2 flex-col border border-gray-200 rounded-xl gap-4">
          <div className="absolute -z-10 -top-14 -right-14 bg-sky-800 size-32 rounded-[50%]"></div>
          <FaPersonShelter className="size-14" />
          <h1 className="text-3xl font-Oswald font-semibold tracking-tight">
            Ashraya
          </h1>
          <p className="w-52 text-center">
            Offers solace and support to homeless
          </p>
          <button className="rounded-lg py-1 font-Kanit px-2 bg-sky-800">
            Know More
          </button>
        </div>
        <div className="flex relative shadow-xl place-self-center overflow-hidden items-center px-4 py-2 flex-col border border-gray-200 rounded-xl gap-4">
          <div className="absolute -z-10 -top-14 -right-14 bg-lime-600 size-32 rounded-[50%]"></div>
          <FaSeedling className="size-14" />
          <h1 className="text-3xl font-Oswald font-semibold tracking-tight">
            Hasiru
          </h1>
          <p className="w-52 text-center">
            Environmental conservation and promotion of awareness
          </p>
          <button className="rounded-lg py-1 font-Kanit px-2 bg-lime-600">
            Know More
          </button>
        </div>
      </div>
      <div className="flex flex-col tab:flex-row justify-center gap-5">
        <div className="flex relative shadow-xl place-self-center overflow-hidden items-center px-4 py-2 flex-col border border-gray-200 rounded-xl gap-4">
          <div className="absolute -z-10 -top-14 -right-14 bg-red-700 size-32 rounded-[50%]"></div>
          <MdMedicalServices className="size-14" />
          <h1 className="text-3xl font-Oswald font-semibold tracking-tight">
            Arogya
          </h1>
          <p className="w-52 text-center">
            Provides healthcare solutions to those in need
          </p>
          <button className="rounded-lg py-1 font-Kanit px-2 bg-red-700">
            Know More
          </button>
        </div>
        <div className="flex relative shadow-xl place-self-center overflow-hidden items-center px-4 py-2 flex-col border border-gray-200 rounded-xl gap-4">
          <div className="absolute -z-10 -top-14 -right-14 bg-amber-600 size-32 rounded-[50%]"></div>
          <FaChildReaching className="size-14" />
          <h1 className="text-3xl font-Oswald font-semibold tracking-tight">
            Saniha
          </h1>
          <p className="w-52 text-center">
            School outreach program to help government schools
          </p>
          <button className="rounded-lg py-1 font-Kanit px-2 bg-amber-600">
            Know More
          </button>
        </div>
      </div>
      <div className="flex flex-col tab:flex-row justify-center gap-5">
        <div className="flex relative shadow-xl place-self-center overflow-hidden items-center px-4 py-2 flex-col border border-gray-200 rounded-xl gap-4">
          <div className="absolute -z-10 -top-14 -right-14 bg-rose-600 size-32 rounded-[50%]"></div>
          <FaBookOpen className="size-14" />
          <h1 className="text-3xl font-Oswald font-semibold tracking-tight">
            Vidya
          </h1>
          <p className="w-52 text-center">
            Financial assistance for needy meritorious students
          </p>
          <button className="rounded-lg py-1 font-Kanit px-2 bg-rose-600">
            Know More
          </button>
        </div>
        <div className="flex relative shadow-xl place-self-center overflow-hidden items-center px-4 py-2 flex-col border border-gray-200 rounded-xl gap-4">
          <div className="absolute -z-10 -top-14 -right-14 bg-sky-400 size-32 rounded-[50%]"></div>
          <GiVillage className="size-14" />
          <h1 className="text-3xl font-Oswald font-semibold tracking-tight">
            Grama
          </h1>
          <p className="w-52 text-center">
            Holistic development of villages by addressing fundamental needs
          </p>
          <button className="rounded-lg py-1 font-Kanit px-2 bg-sky-400">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
