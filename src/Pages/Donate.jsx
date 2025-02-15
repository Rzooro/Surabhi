import React from "react";
import { DonationCard } from "../Components/Home";

const Donate = () => {
  return (
    <div className="flex flex-col lap:mt-40 mt-28">
      <div className="flex flex-col lap:flex-row lap:gap-28 gap-10 place-self-center">
        <div className="flex flex-col gap-4 lap:w-fit w-[20rem] place-self-center lap:place-self-auto">
          <h1 className="lap:text-7xl text-5xl font-Oswald lap:w-[38rem] font-bold text-lime-600">
            DONATE TO MAKE A DIFFERENCE.
          </h1>
          <p className="lap:w-[39rem] lap:text-base text-sm font-Kanit font-light">
            <span className="font-bold">
              Your generosity is the heart of our mission.
            </span>{" "}
            Thank you for your invaluable support. Every contribution, no matter
            the size, brings us closer to promoting positive change in our
            community. Your belief in our work inspires us to strive for greater
            impact. Together, we are building a brighter future.
          </p>
          <button className="rounded-lg font-Kanit lap:text-base text-sm text-white lap:hover:bg-lime-700 duration-300 bg-lime-600 w-fit px-2 py-1">
            Our Mission
          </button>
        </div>
        <DonationCard className="" />
      </div>
      <div className="mt-10">
        <div className="flex flex-col gap-5 text-white pb-12 h-1/2 bg-orange-800 sticky top-0 left-0">
          <div className="flex flex-col lap:m-20 m-10 gap-3 lap:gap-10">
            <h1 className="lap:text-6xl text-4xl font-Oswald font-bold">
              CELEBRATE WITH OUR CHILDREN!
            </h1>
            <p className="font-Kanit font-light text-sm lap:text-xl lap:w-[38rem]">
              <span className="font-bold">
                Make your special day even more meaningful.
              </span>{" "}
              Turn your birthday, anniversary, or any special occasion into a
              celebration of giving. By choosing to celebrate with our children,
              you not only bring joy to their lives but also contribute to their
              holistic development. Your generosity will create lasting memories
              for them and inspire others to join our cause. Let's spread
              happiness together!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 h-1/2 bg-sky-500 sticky top-0 left-0">
          <div className="flex flex-col lap:m-20 m-10 gap-3 lap:gap-10 place-self-end items-end text-right">
            <h1 className="lap:text-6xl text-4xl font-Oswald font-bold">
              BUILD A BRIGHTER FUTURE
            </h1>
            <p className="font-Kanit text-sm lap:text-xl font-light lap:w-[43rem]">
              <span className="font-bold">
                Help us build a world-class campus for 1000 children.
              </span>{" "}
              Your support is crucial in transforming the lives of these young
              minds. Our under-construction campus is a beacon of hope, offering
              a nurturing environment for learning, growth, and development. By
              contributing, you're investing in the future leaders of our
              community. Join us in creating a space where dreams take flight.
              Every contribution, big or small, brings us closer to realizing
              this ambitious project. Let's build a brighter tomorrow together!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-white pb-2 h-1/2 bg-zinc-800 sticky top-0 left-0">
          <div className="flex flex-col lap:m-20 m-10 gap-3 lap:gap-10">
            <h1 className="lap:text-6xl text-4xl font-Oswald font-bold">
              JOIN OUR MISSION
            </h1>
            <p className="font-Kanit font-light text-sm lap:text-xl lap:w-[38rem]">
              <span className="font-bold">Become a catalyst for change!</span>{" "}
              Your time and skills can make a significant difference in the
              lives of countless individuals. Volunteer with Surabhi Foundation
              and be part of a movement that creates lasting impact. Whether you
              have a passion for education, healthcare, or community
              development, there's a role for you. Together, we can build a
              stronger, more equitable society. Join our dedicated team of
              volunteers today and experience the joy of giving back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
