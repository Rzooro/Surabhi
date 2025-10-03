import React, { useEffect, useState, useRef } from "react";

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({
    mission: null,
    vision: null,
    approach: null,
    impact: null,
    projects: null,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col mb-20">
        <div className="h-16 min-w-[100%] bg-white bg-opacity-40 backdrop-blur-md fixed top-16 left-0 lap:invisible"></div>
        <div
          className="fixed flex lap:flex-col top-4 left-6 translate-y-[20%] desk:translate-y-[65%] lap:translate-y-[50%] desk:left-12 lap:left-10 
          lap:min-h-96 lap:w-1 lap:bg-lime-600 rounded-lg z-10
                        desk:scale-125">
          <div className="h-1 min-w-[22rem] bg-lime-600 absolute top-6 left-2 lap:invisible"></div>
          <div className="absolute top-4 -left-2 lap:top-4 lap:-left-2 flex flex-col lap:flex-row items-center gap-1">
            <div
              className={`${
                activeSection === "mission"
                  ? "bg-orange-700 scale-125"
                  : "bg-orange-600"
              } w-5 h-5 rounded-full border-2 border-white transition-all duration-300`}></div>
            <h3 className="lap:text-lg font-Fresca">Mission</h3>
          </div>
          <div className="absolute top-4 left-20 lap:top-24 lap:-left-2 flex flex-col lap:flex-row items-center gap-1">
            <div
              className={`${
                activeSection === "vision"
                  ? "bg-orange-700 scale-125"
                  : "bg-orange-600"
              } w-5 h-5 rounded-full border-2 border-white transition-all duration-300`}></div>
            <h3 className="text-lg font-Fresca">Vision</h3>
          </div>
          <div className="absolute top-4 left-40 lap:top-44 lap:-left-2 flex flex-col lap:flex-row items-center gap-1">
            <div
              className={`${
                activeSection === "approach"
                  ? "bg-orange-700 scale-125"
                  : "bg-orange-600"
              } w-5 h-5 rounded-full border-2 border-white transition-all duration-300`}></div>
            <h3 className="text-lg font-Fresca">Approach</h3>
          </div>
          <div className="absolute top-4 left-64 lap:top-64 lap:-left-2 flex flex-col lap:flex-row items-center gap-1">
            <div
              className={`${
                activeSection === "impact"
                  ? "bg-orange-700 scale-125"
                  : "bg-orange-600"
              } w-5 h-5 rounded-full border-2 border-white transition-all duration-300`}></div>
            <h3 className="text-lg font-Fresca">Impact</h3>
          </div>
          <div className="absolute top-4 left-[21rem] lap:top-[21.25rem] lap:-left-2 flex flex-col lap:flex-row items-center gap-1">
            <div
              className={`${
                activeSection === "projects"
                  ? "bg-orange-700 scale-125"
                  : "bg-orange-600"
              } w-5 h-5 rounded-full border-2 border-white transition-all duration-300`}></div>
            <h3 className="text-lg font-Fresca">Projects</h3>
          </div>
        </div>
        <div
          id="mission"
          ref={(el) => (sectionRefs.current.mission = el)}
          className="mt-[10rem] lap:mt-[9rem] desk:mt-[12rem] pl-10 lap:pl-24 pb-20 lap:pb-40 flex flex-col gap-12 lap:gap-24 items-center">
          <h1 className="text-7xl desk:text-[13rem] lap:lap:text-[10.5rem] text-lime-600 leading-none -tracking-[0.045em] font-Alegreya italic font-semibold">
            Empowering lives, <br /> changing Futures...
          </h1>
          <p className="font-Lato font-bold lap:text-xl desk:text-2xl desk:w-[74rem] lap:w-[62rem]">
            <span className="italic">Surabhi Foundation Trust®</span> is
            dedicated to making a positive impact on society through a variety
            of initiatives. One of our primary focuses is providing educational
            resources and support to underprivileged children. However, our work
            extends beyond this to include various projects aimed at improving
            the lives of individuals and communities. By addressing a range of
            needs, we strive to create a more equitable and just world.
          </p>
        </div>

        <div className="">
          <div
            id="vision"
            ref={(el) => (sectionRefs.current.vision = el)}
            className="mb-24 lap:mb-32 flex pl-10">
            <div className="lap:w-48"></div>
            <div className="flex-1 pr-1">
              <h1 className="text-4xl lap:text-6xl font-Fira_Sans_Condensed font-bold text-lime-600">
                Vision
              </h1>
              <p className="lap:text-xl mt-4 lap:w-[50rem]">
                The vision of Surabhi Foundation Trust is to anticipate and
                contribute to a future marked by significant social change
                through grassroots-level social movements. The organization
                envisions a transformative impact in the realms of education,
                environment, health, and women empowerment.
              </p>
            </div>
          </div>
          <div
            id="approach"
            ref={(el) => (sectionRefs.current.approach = el)}
            className="mb-24 lap:mb-32 flex justify-self-end">
            <div className="lap:w-48"></div>
            <div className="flex-1 lap:pr-10">
              <h1 className="text-4xl lap:text-6xl font-Fira_Sans_Condensed font-bold text-lime-600 w-fit justify-self-end pr-10">
                Approach
              </h1>
              <p className="lap:text-xl pl-10 mt-4 lap:w-[45rem]">
                We take a holistic approach to addressing societal challenges,
                focusing on education, healthcare, and community empowerment. We
                work closely with local communities to ensure our efforts are
                effective and sustainable.
              </p>
            </div>
          </div>
          <div
            id="impact"
            ref={(el) => (sectionRefs.current.impact = el)}
            className="mb-24 pl-10 lap:mb-32 flex items-center">
            <div className="lap:w-48"></div>
            <div className="flex-1">
              <h1 className="text-4xl lap:text-6xl font-Fira_Sans_Condensed font-bold text-lime-600">
                Impact
              </h1>
              <p className="lap:text-xl mt-4 lap:w-[45rem]">
                Over the years, our initiatives have reached thousands of
                individuals, providing them with the tools they need to improve
                their lives. We measure our success through the positive changes
                in the communities we serve.
              </p>
            </div>
          </div>
          <div
            id="projects"
            ref={(el) => (sectionRefs.current.projects = el)}
            className="lap:mb-32 flex items-center justify-self-end">
            <div className="lap:w-48"></div>
            <div className="flex-1">
              <h1 className="text-4xl lap:text-6xl font-Fira_Sans_Condensed font-bold justify-self-end pr-10 text-lime-600">
                Projects
              </h1>
              <p className="lap:text-xl pl-10 mt-4 lap:w-[46rem]">
                Our ongoing projects include educational programs, healthcare
                camps, and sustainable agriculture initiatives. Each project is
                designed to address a specific need within the community,
                ensuring maximum impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
