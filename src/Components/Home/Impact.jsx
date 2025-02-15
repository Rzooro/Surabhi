import React from "react";
import CountUp from "react-countup";

const Impact = () => {
  return (
    <div className="bg-gray-100 my-5 py-10">
      <h1 className="text-5xl font-Oswald font-semibold text-center py-2">
        OUR IMPACT
      </h1>
      <div className="flex lap:flex-row flex-col justify-center lap:gap-x-14 py-10 items-start gap-y-5 lap:gap-y-0">
        <div className="flex tab:gap-14 gap-10 place-self-center">
          <div className="items-center justify-center w-fit text-center flex flex-col gap-2">
            <h1 className="lap:text-8xl small:text-6xl mob:text-7xl font-Bebas_Neue font-bold">
              <CountUp
                start={0}
                end={2}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                scrollSpyDelay={0.5}></CountUp>
              <span className="text-lime-600">+</span>
            </h1>
            <p className="text-2xl font-bold">LAC</p>
            <p className="font-light w-40">
              people have benefitted by our work
            </p>
          </div>
          <div className="items-center justify-center w-fit text-center flex flex-col gap-2">
            <h1 className="lap:text-8xl small:text-6xl mob:text-7xl font-Bebas_Neue font-bold">
              <CountUp
                start={0}
                end={200}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                scrollSpyDelay={0.5}></CountUp>
              <span className="text-lime-600">+</span>
            </h1>
            <p className="text-2xl font-bold">DONORS</p>
            <p className="font-light w-32">support our cause every year</p>
          </div>
        </div>
        <div className="items-center justify-center w-fit text-center place-self-center flex flex-col gap-2">
          <h1 className="lap:text-8xl small:text-6xl mob:text-7xl font-Bebas_Neue font-bold">
            <CountUp
              start={0}
              end={2000}
              duration={3}
              separator=""
              enableScrollSpy={true}
              scrollSpyOnce={true}
              scrollSpyDelay={0.5}></CountUp>
            <span className="text-lime-600">+</span>
          </h1>
          <p className="text-2xl font-bold">VOLUNTEERS</p>
          <p className="font-light">work with us every year</p>
        </div>
        <div className="flex tab:gap-14 gap-10 place-self-center">
          <div className="items-center justify-center w-fit text-center flex flex-col gap-2">
            <h1 className="lap:text-8xl small:text-6xl mob:text-7xl font-Bebas_Neue font-bold">
              <CountUp
                start={0}
                end={200}
                duration={3}
                separator=""
                enableScrollSpy={true}
                scrollSpyOnce={true}
                scrollSpyDelay={0.5}></CountUp>
              <span className="text-lime-600">+</span>
            </h1>
            <p className="text-2xl font-bold">LAC</p>
            <p className="font-light">overall beneficiaries</p>
          </div>
          <div className="items-center justify-center w-fit text-center flex flex-col gap-2">
            <h1 className="lap:text-8xl small:text-6xl mob:text-7xl font-Bebas_Neue font-bold">
              <CountUp
                start={0}
                end={20}
                duration={3}
                separator=""
                enableScrollSpy={true}
                scrollSpyOnce={true}
                scrollSpyDelay={0.5}></CountUp>
              <span className="text-lime-600">+</span>
            </h1>
            <p className="text-2xl font-bold">LAC</p>
            <p className="font-light">overall beneficiaries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
