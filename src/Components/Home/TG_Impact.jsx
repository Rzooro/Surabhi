import { FaMale, FaFemale } from "react-icons/fa";
import { Link } from "react-router-dom";
import b1 from "../../assets/SVGS/b1.svg";
import b2 from "../../assets/SVGS/b2.svg";

const TG_Impact = () => {
  return (
    <div className="justify-center py-10 flex flex-col gap-5">
      <h1 className="lap:text-5xl text-4xl text-center font-bold font-Oswald leading-[1.5] text-lime-600">
        TOGETHER, WE CAN MAKE A{" "}
        <span className="bg-lime-600 text-white px-2">BIGGER</span> IMPACT.
      </h1>
      <h1 className="text-center font-Lato text-lg w-80 place-self-center lap:text-2xl text-gray-500 pt-2 tracking-tight">
        Get Involved in helping us make the society a better place
      </h1>
      <div className="flex lap:flex-row flex-col gap-10 justify-center pt-5 place-self-center">
        <div className="flex flex-col gap-5 w-fit bg-teal-600 rounded-2xl place-self-center mob:px-2 py-4">
          <h1 className="font-Oswald text-4xl text-white pl-3">INDIVIDUALS</h1>
          <div className="flex text-white">
            <FaMale className="size-44 " />
            <div className="bg-white w-0.5 block rounded-lg"></div>
            <FaFemale className="size-44 " />
          </div>
          <span className="pl-3 w-[23rem] text-white font-Lato text-lg py-1">
            Help support our projects to ensure a better future by making a
            donaiton or getting involved in other ways.
          </span>
          <div className="flex gap-4 justify-center">
            <Link
              to="donate"
              className="bg-white rounded-lg px-3 py-2 font-Kanit lap:hover:bg-gray-200 duration-200">
              Make a Donation
            </Link>
            <Link
              to="individual-or-corporate"
              className="bg-white rounded-lg px-3 py-2 font-Kanit lap:hover:bg-gray-200 duration-200">
              Get Involved
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-pink-600 rounded-2xl place-self-center mob:px-2 py-4">
          <h1 className="font-Oswald text-4xl text-white pl-5">CORPORATIONS</h1>
          <div className="flex text-white gap-4 px-8">
            <img src={b1} alt="Building1" className="size-36" />
            <img src={b2} alt="Building2" className="size-36" />
          </div>
          <div className="size-3"></div>
          <span className="pl-3 w-80 text-white font-Lato text-lg py-3">
            Join our network of partners and help make our initiatives a
            reality.
          </span>
          <Link
            to="individual-or-corporate"
            className="bg-white rounded-lg px-3 py-2 font-Kanit lap:hover:bg-gray-200 w-fit place-self-center mt-2 duration-200">
            Become a Partner
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TG_Impact;
