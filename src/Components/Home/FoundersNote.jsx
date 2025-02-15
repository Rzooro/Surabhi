import React from "react";
import foun from "../../assets/Images/founder1.png";

const FoundersNote = () => {
  return (
    <div>
      <h1 className="flex flex-col text-5xl font-Oswald tracking-tight font-bold text-center">
        FOUNDERS NOTE
      </h1>
      <div className="flex place-self-center w-fit ">
        <img src={foun} alt="" className="h-96" />
      </div>
    </div>
  );
};

export default FoundersNote;
