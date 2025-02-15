import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import H from "../../assets/Hero.jpg";

const Vidya = () => {
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
        className={`mt-[5.1rem] bg-cover flex flex-col justify-center h-[32rem]`}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(15,118,110,0.6), rgba(15,118,110,0.6)), url(${H})`,
        }}>
        <div
          id="sticky-header"
          className={`flex items-center gap-1 z-50 transition-all duration-300 w-full justify-center py-2
             ${
               isFixed
                 ? `fixed top-0 left-0 right-0 backdrop-blur-sm bg-white bg-opacity-40 ${visible ? "translate-y-[5.1rem]" : ""}`
                 : ""
             }`}>
          <div className="h-0.5 bg-rose-600 w-2/3"></div>
          <h1 className="text-8xl whitespace-nowrap text-rose-600 font-Fira_Sans_Condensed font-bold">
            Vidya Surabhi
          </h1>
          <div className="h-0.5 bg-rose-600 w-2/3"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center py-5">
        <h1 className="font-bold font-Oswald tracking-tight text-rose-600 text-6xl pb-2 -translate-x-[15rem]">
          EMPOWERING YOUNG MINDS
        </h1>
        <p className="font-Lato tracking-tight w-[60rem] font-bold text-2xl">
          In our commitment to break down educational barriers, Surabhi has
          recognized a significant challenge faced by most children in the
          backward communities. Reluctancy to join the mainstream of education
          often stems from the lack of basic amenities, hindering their ability
          to fully engage in the learning process.
        </p>
        <p className="font-Lato tracking-tight w-[60rem] font-bold text-2xl">
          <span className="text-rose-600 font-extrabold pr-1">Our Answer:</span>{" "}
          Under this pledge we have taken proactive steps to bridge this gap.
          We've witnessed the transformative power of education and firmly
          believe that every child, regardless of their circumstances, should
          have access to quality learning opportunities.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 py-10">
        <div className="flex flex-col w-[50rem] bg-teal-500 rounded-xl p-6 sticky top-32 gap-2">
          <h1 className="text-4xl text-rose-600 font-Oswald font-bold">
            PROVIDING RESOURCES FOR THEIR <br />
            JOURNEY
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            Surabhi has played a central role by equipping youngsters with much
            needed essentials. These seemingly small gestures have profound
            impact on a child's readiness and enthusiasm for learning.
          </p>
        </div>
        <div className="flex flex-col w-[50rem] bg-teal-400 rounded-xl p-6 sticky top-48 gap-2">
          <h1 className="text-4xl text-rose-600 font-Oswald font-bold">
            BRIDGING FINANCIAL GAPS
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            We believe that academic excellence should not be hindered by
            financial constraints. Our financial assistance program supports
            deserving students, enabling them to continue their education
            without the burden of financial stress.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-8 bg-teal-500">
        <h1 className="text-6xl text-rose-600 font-Fira_Sans_Condensed font-bold mb-5">
          Impact
        </h1>
        <div className="flex flex-col items-center gap-5">
          <div className="flex border-b-[0.05rem] border-gray-300 items-baseline">
            <div className="space-y-2 border-r-[0.05rem] border-gray-300 pb-8">
              <h1 className="text-2xl text-rose-600 font-Archivo font-extralight">
                Increased Enrolment
              </h1>
              <p className="font-Lato w-[30rem]">
                Through our efforts, we've witnessed a noticeable increase in
                student enrolments, indicating a positive shift in perception
                and willingness to embrace formal education.
              </p>
            </div>
            <div className="space-y-2 pl-10 pb-8">
              <h1 className="text-2xl text-rose-600 font-Archivo font-extralight">
                Empowered Students
              </h1>
              <p className="font-Lato w-[30rem]">
                Students who may have been hesitant due to financial constraints
                or lack of resources are now empowered to actively participate
                in the education system, fostering a sense of confidence and
                achievement.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl text-rose-600 font-Archivo font-extralight">
              Community Engagement
            </h1>
            <p className="font-Lato w-[30rem]">
              Our initiatives go beyond individual students, creating a ripple
              effect in the community. By addressing these fundamental barriers,
              Surabhi is fostering a culture of education and learning.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[500px]"></div>
      <div className="flex flex-col items-center gap-5 py-14">
        <p className="font-Lato font-bold w-[45rem] text-lg">
          Your generous support can help us expand Vidya Surabhi's reach and
          ensure that more children have access to quality education. Donate
          today and make a lasting difference in the lives of young minds.
        </p>
        <Link to="/donate">
          <button
            className="bg-rose-600 rounded-xl font-Outfit text-lg px-2 py-1 transition-transform
            duration-300 ease-out lap:hover:-translate-y-0.5 lap:hover:shadow-lg
          ">
            Donate Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Vidya;
