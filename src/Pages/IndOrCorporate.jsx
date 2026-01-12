import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const IndOrCorporate = () => {
  return (
    <div className="mt-[5rem] lap:mt-[9rem] flex flex-col items-center gap-16 lap:gap-24">
      {/* INDIVIDUALS */}
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-7xl lap:text-[7rem] leading-none font-Oswald tracking-tight text-lime-600">
          INDIVIDUALS
        </h1>

        <div className="flex gap-x-6 gap-y-4 flex-col items-center">
          <div className="flex flex-col lap:flex-row gap-y-3 gap-x-6">
            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">Donate</h1>
              <p className="font-Lato lap:text-lg text-center">
                Support our cause with a<br />
                one-time donation
              </p>
              <Link
                to="/donate"
                className="rounded-lg font-Lato px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                Donate
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">
                Become a Monthly Supporter
              </h1>
              <p className="font-Lato lap:text-lg text-center">
                Create a lasting impact by joining our
                <br />
                community of monthly supporters.
              </p>
              <Link
                to="/donate"
                className="rounded-lg font-Lato px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                Donate Monthly
              </Link>
            </div>
          </div>

          <div className="flex flex-col lap:flex-row gap-y-3 gap-x-6 lap:w-auto w-[95%]">
            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">
                Attend an Event
              </h1>
              <p className="font-Lato lap:text-lg text-center">
                Connect and contribute to our
                <br />
                mission at one of our events.
              </p>
              <Link
                to="/events"
                className="rounded-lg font-Lato px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                View our Events
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">
                Celebrate With Us
              </h1>
              <p className="font-Lato lap:text-lg text-center lap:w-[18rem]">
                Create memories with our children and share your joy! Your
                support makes a difference.
              </p>
              <Link
                to="/contact-us"
                className="rounded-lg font-Lato px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                Contact Us
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">
                In-Tribute Donations
              </h1>
              <p className="font-Lato lap:text-lg text-center">
                Remember someone special with a tribute gift.
                <br />
                Check "Dedicate this donation.
              </p>
              <Link
                to="/donate"
                className="rounded-lg font-Lato px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CORPORATE */}
      <div className="flex flex-col items-center gap-10 pb-10">
        <h1 className="text-7xl lap:text-[7rem] leading-none font-Oswald tracking-tight text-lime-600">
          CORPORATE
        </h1>

        <div className="flex gap-x-6 gap-y-4 flex-col items-center">
          <div className="flex flex-col lap:flex-row gap-y-3 gap-x-6">
            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">
                Corporate Giving
              </h1>
              <p className="font-Lato lap:text-lg text-center">
                Align your corporate values with social responsibility
                <br />
                through a direct donation.
              </p>
              <Link
                to="/donate"
                className="group rounded-lg flex gap-0.5 items-center font-Lato
                           px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                Donate
                <IoIosArrowDown className="translate-y-0.5" />
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">
                Become an Investor
              </h1>
              <p className="font-Lato text-lg text-center">
                Invest in targeted projects,
                <br />
                increasing our collaborative impact.
              </p>
              <Link
                to="/contact-us"
                className="rounded-lg font-Lato px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex flex-col lap:flex-row gap-y-3 gap-x-6">
            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">
                Sponsor an Event
              </h1>
              <p className="font-Lato text-lg text-center">
                Elevate your brand by sponsoring
                <br />
                one of our impactful events.
              </p>
              <Link
                to="/events"
                className="rounded-lg font-Lato px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                Learn More
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">
                Corporate Volunteering
              </h1>
              <p className="font-Lato text-lg text-center">
                Foster team building and social impact
                <br />
                through corporate volunteering initiatives.
              </p>
              <Link
                to="/contact-us"
                className="rounded-lg font-Lato px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                Contact Us
              </Link>
            </div>

            <div className="flex flex-col rounded-2xl border-2 border-black px-2 lap:px-4 py-3 items-center gap-2">
              <h1 className="font-Oswald text-3xl lap:text-4xl">
                In-Kind Contributions
              </h1>
              <p className="font-Lato text-lg text-center">
                Contribute goods or services to
                <br />
                support our initiatives.
              </p>
              <Link
                to="/contact-us"
                className="rounded-lg font-Lato px-2 py-1 bg-lime-100 outline outline-lime-600 transition-all duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndOrCorporate;
