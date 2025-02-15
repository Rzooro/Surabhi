import React from "react";
import { CgClose } from "react-icons/cg";

const IntPopup = (props) => {
  return props.trigger ? (
    <div
      className="fixed top-0 left-0 flex flex-col h-screen w-full justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))`,
      }}>
      <div className="relative bg-white w-full max-w-[40rem] p-10">
        <CgClose
          className="absolute top-2 right-2 hover:cursor-pointer"
          onClick={() => props.setTrigger(false)}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default IntPopup;
