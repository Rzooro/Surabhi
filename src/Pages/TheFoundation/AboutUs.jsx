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
      <div className="relative flex flex-col">
        <div
          className="fixed top-0 desk:translate-y-[65%] translate-y-[50%] desk:left-12 left-10 min-h-96 w-1 bg-lime-600 rounded-lg -z-10
                        desk:scale-125">
          <div className="absolute top-4 -left-2 flex items-center gap-1">
            <div
              className={`${
                activeSection === "mission"
                  ? "bg-orange-700 scale-125"
                  : "bg-orange-600"
              } w-5 h-5 rounded-full border-2 border-white transition-all duration-300`}></div>
            <h3 className="text-lg font-Fresca">Mission</h3>
          </div>
          <div className="absolute top-24 -left-2 flex items-center gap-1">
            <div
              className={`${
                activeSection === "vision"
                  ? "bg-orange-700 scale-125"
                  : "bg-orange-600"
              } w-5 h-5 rounded-full border-2 border-white transition-all duration-300`}></div>
            <h3 className="text-lg font-Fresca">Vision</h3>
          </div>
          <div className="absolute top-44 -left-2 flex items-center gap-1">
            <div
              className={`${
                activeSection === "approach"
                  ? "bg-orange-700 scale-125"
                  : "bg-orange-600"
              } w-5 h-5 rounded-full border-2 border-white transition-all duration-300`}></div>
            <h3 className="text-lg font-Fresca">Approach</h3>
          </div>
          <div className="absolute top-64 -left-2 flex items-center gap-1">
            <div
              className={`${
                activeSection === "impact"
                  ? "bg-orange-700 scale-125"
                  : "bg-orange-600"
              } w-5 h-5 rounded-full border-2 border-white transition-all duration-300`}></div>
            <h3 className="text-lg font-Fresca">Impact</h3>
          </div>
          <div className="absolute top-[21.25rem] -left-2 flex items-center gap-1">
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
          className="pt-[9rem] desk:pt-[12rem] pl-24 pb-40 flex flex-col gap-24 items-center">
          <h1 className="desk:text-[13rem] text-[10.5rem] text-lime-600 leading-none -tracking-[0.045em] font-Alegreya italic font-semibold">
            Empowering lives, <br /> changing Futures...
          </h1>
          <p className="font-Lato font-bold text-xl desk:text-2xl desk:w-[74rem] w-[62rem]">
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
            className="mb-32 flex">
            <div className="w-48"></div>
            <div className="flex-1">
              <h1 className="text-6xl font-Fira_Sans_Condensed font-bold text-lime-600">
                Vision
              </h1>
              <p className="text-xl mt-4 w-[50rem]">
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
            className="mb-32 flex justify-self-end">
            <div className="w-48"></div>
            <div className="flex-1 pr-10">
              <h1 className="text-6xl font-Fira_Sans_Condensed font-bold text-lime-600 w-fit">
                Approach
              </h1>
              <p className="text-xl mt-4 w-[45rem]">
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
            className="mb-32 flex items-center">
            <div className="w-48"></div>
            <div className="flex-1">
              <h1 className="text-6xl font-Fira_Sans_Condensed font-bold text-lime-600">
                Impact
              </h1>
              <p className="text-xl mt-4 w-[45rem]">
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
            className="mb-32 flex items-center justify-self-end">
            <div className="w-48"></div>
            <div className="flex-1">
              <h1 className="text-6xl font-Fira_Sans_Condensed font-bold text-lime-600">
                Projects
              </h1>
              <p className="text-xl mt-4 w-[46rem]">
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
