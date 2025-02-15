import React from "react";
import cgi from "../../assets/Partners/cgi.png";
import lkq from "../../assets/Partners/lkq.png";
import lux from "../../assets/Partners/luxoft.png";
import mer from "../../assets/Partners/meritus.png";
import nas from "../../assets/Partners/nasdaq.png";
import rl from "../../assets/Partners/ralphLauren.svg";
import sz from "../../assets/Partners/suez.png";
import ve from "../../assets/Partners/veolia.png";
import vw from "../../assets/Partners/vmware.png";
import wm from "../../assets/Partners/walmart.png";
import net from "../../assets/Partners/netcracker.png";

const Partners = () => {
  return (
    <div className="py-5 relative">
      <h1 className="text-5xl font-Oswald font-bold tracking-tight text-center">
        OUR PARTNERS
      </h1>
      <div
        className="absolute top-[6.725rem] 
      bg-[linear-gradient(90deg,theme(colors.white),theme(colors.transparent),theme(colors.transparent),theme(colors.transparent),theme(colors.transparent),theme(colors.white))] 
      h-36 w-full z-10"></div>
      <div className="overflow-hidden flex space-x-16 my-10">
        <div className="flex gap-16 animate-scroll items-center">
          <img src={cgi} alt="CGI" className="h-32 max-w-none" />
          <img src={lkq} alt="LKQ" className="h-28 max-w-none" />
          <img src={lux} alt="Luxoft" className="h-36 max-w-none" />
          <img src={mer} alt="Meritus" className="h-32 max-w-none" />
          <img src={nas} alt="Nasdaq" className="h-24 max-w-none" />
          <img src={rl} alt="RalphLauren" className="h-32 max-w-none" />
          <img src={sz} alt="Suez" className="h-24 max-w-none" />
          <img src={ve} alt="Veolia" className="h-32 max-w-none" />
          <img src={vw} alt="VmWare" className="h-32 max-w-none" />
          <img src={wm} alt="Walmart" className="h-24 max-w-none" />
          <img src={net} alt="Walmart" className="h-24 max-w-none" />
        </div>
        <div className="flex gap-16 animate-scroll items-center">
          <img src={cgi} alt="CGI" className="h-32 max-w-none" />
          <img src={lkq} alt="LKQ" className="h-28 max-w-none" />
          <img src={lux} alt="Luxoft" className="h-36 max-w-none" />
          <img src={mer} alt="Meritus" className="h-32 max-w-none" />
          <img src={nas} alt="Nasdaq" className="h-24 max-w-none" />
          <img src={rl} alt="RalphLauren" className="h-32 max-w-none" />
          <img src={sz} alt="Suez" className="h-24 max-w-none" />
          <img src={ve} alt="Veolia" className="h-32 max-w-none" />
          <img src={vw} alt="VmWare" className="h-32 max-w-none" />
          <img src={wm} alt="Walmart" className="h-24 max-w-none" />
          <img src={net} alt="Walmart" className="h-24 max-w-none" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
