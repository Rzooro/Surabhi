import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import H from "../../assets/Hero.jpg";

const Saniha = () => {
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
          backgroundImage: `linear-gradient(rgba(67,56,202,0.55), rgba(67,56,202,0.55)), url(${H})`,
        }}>
        <div
          id="sticky-header"
          className={`flex items-center gap-1 z-50 transition-all duration-300 w-full justify-center py-2
             ${
               isFixed
                 ? `fixed top-0 left-0 right-0 backdrop-blur-sm bg-white bg-opacity-40 ${visible ? "translate-y-[5.1rem]" : ""}`
                 : ""
             }`}>
          <div className="h-0.5 bg-amber-600 w-2/3"></div>
          <h1 className="text-8xl whitespace-nowrap text-amber-600 font-Fira_Sans_Condensed font-bold">
            Surabhi Saniha
          </h1>
          <div className="h-0.5 bg-amber-600 w-2/3"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-2 items-center">
        <h1 className="font-bold font-Oswald tracking-tight text-amber-600 text-6xl -translate-x-[20rem]">
          BRIGHTER FUTURES
        </h1>
        <p className="font-Lato tracking-tight w-[60rem] font-bold text-2xl">
          Surabhi Foundation Trust is committed to identifying and empowering
          disregarded villages, fostering self-sustainability through community
          engagement. Our focus is on holistic development, addressing
          fundamental needs and creating a brighter future for rural
          communities.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 my-10">
        <div className="flex flex-col w-[55rem] bg-indigo-700 rounded-xl p-6 sticky top-32 gap-2">
          <h1 className="text-4xl text-amber-600 font-Oswald font-bold">
            INFRASTRUCTURE DEVELOPMENT
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            We are actively involved in constructing additional classrooms,
            libraries, and science laboratories to expand capacity and improve
            facilities in government schools. Our aim is to create modern and
            well-equipped learning spaces that foster creativity and innovation.
          </p>
        </div>
        <div className="flex flex-col w-[55rem] bg-indigo-600 rounded-xl p-6 sticky top-48 gap-2">
          <h1 className="text-4xl text-amber-600 font-Oswald font-bold">
            CULTURAL EXCHANGE
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            Our annual Surabhi Chinara Sambrama brings together thousands of
            students from various government schools for a vibrant cultural
            exchange. This event showcases the diverse talents of students,
            promotes unity, and fosters a sense of community.
          </p>
        </div>
        <div className="flex flex-col w-[55rem] bg-indigo-500 rounded-xl p-6 sticky top-[16rem] gap-2">
          <h1 className="text-4xl text-amber-500 font-Oswald font-bold">
            CAMPUS BEAUTIFICATION
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            We believe in creating inspiring and aesthetically pleasing learning
            environments. Our initiatives include planting trees, setting up
            gardens, and painting school walls with vibrant colors. These
            efforts not only enhance the physical appearance of schools but also
            contribute to a positive and uplifting atmosphere.
          </p>
        </div>
        <div className="flex flex-col w-[55rem] bg-[#7480f5] rounded-xl p-6 sticky top-[20rem] gap-2">
          <h1 className="text-4xl text-amber-500 font-Oswald font-bold">
            RESOURCE ENHANCEMENT
          </h1>
          <p className="w-[45rem] font-Lato text-xl">
            We provide essential educational resources, such as books,
            stationery, and digital learning tools, to ensure students have the
            necessary materials for their studies. Our goal is to bridge the
            digital divide and create equitable learning opportunities for all
            students.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl text-amber-600 font-Fira_Sans_Condensed font-bold mb-5">
          Impact
        </h1>
        <p className="font-Lato font-bold text-2xl tracking-tight w-[60rem] text-center">
          Surabhi Saniha has made a significant difference in the lives of
          government school students. Our initiatives have improved learning
          environments, fostered a sense of community, and provided
          opportunities for cultural exchange.
        </p>
      </div>
      <div className="h-96"></div>
      <div className="flex flex-col items-center gap-5 py-14">
        <h1 className="text-6xl text-amber-600 font-Fira_Sans_Condensed font-bold">
          MAKE A DIFFERENCE
        </h1>
        <p className="font-Lato tracking-tight w-[60rem] text-center font-bold text-2xl">
          Your support is vital in ensuring the continued success of our school
          outreach program. <br />
          <span className="text-indigo-600">
            Every donation, no matter the size, can make a tangible difference
            in the lives of these students.
          </span>{" "}
          <br />
          By partnering with us, you are investing in the future of our
          communities.
        </p>
        <Link to="/donate">
          <button
            className="bg-amber-600 rounded-xl font-Outfit text-lg px-2 py-1 transition-transform
              duration-300 ease-out lap:hover:scale-[103%]
            ">
            Donate Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Saniha;
