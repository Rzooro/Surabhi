import { useState } from "react";
import VolPopup from "./VolPopup";
import IntPopup from "./IntPopup";

const VolunteerOrIntern = () => {
  const [popupV, setPopupV] = useState(false);
  const [popupI, setPopupI] = useState(false);

  return (
    <div className="mt-24 lap:mt-36 mb-20 desk:mt-[10rem] flex flex-col items-center">
      <div className="space-y-10 flex flex-col items-center">
        <h1 className="desk:text-9xl lap:text-8xl text-7xl font-bold text-lime-600 font-Oswald tracking-tight text-center">
          MAKE A DIFFERENCE
        </h1>
        <p className="font-Lato desk:text-lg tracking-tight w-[95%] lap:w-[70%] text-center">
          Join the Surabhi Foundation Trust and be a part of positive change in
          diverse communities. We offer a range of volunteer and internship
          opportunities, from working with underprivileged children and
          empowering young women, to supporting our literacy programs, community
          development projects, environmental initiatives, and care for the
          elderly. Become an integral part of our holistic approach to community
          development, contributing your skills and passion to a cause you care
          about and making a real difference in the lives of those we serve.
        </p>
        <div className="flex items-center lap:gap-1 lap:items-start flex-col lap:flex-row gap-3">
          <button
            className="rounded-lg lap:rounded-r-none font-Kanit lap:text-base text-sm text-white lap:hover:bg-lime-700
          duration-300 bg-lime-600 w-fit px-4 py-2"
            onClick={() => setPopupV(true)}>
            Register as a Volunteer
          </button>
          <button
            className="rounded-lg lap:rounded-l-none font-Kanit lap:text-base text-sm text-white lap:hover:bg-lime-700
          duration-300 bg-lime-600 w-fit px-4 py-2"
            onClick={() => setPopupI(true)}>
            Register for Internship
          </button>
        </div>
      </div>
      <VolPopup trigger={popupV} setTrigger={setPopupV}></VolPopup>
      <IntPopup trigger={popupI} setTrigger={setPopupI}></IntPopup>
    </div>
  );
};

export default VolunteerOrIntern;
