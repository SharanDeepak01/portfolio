import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white text-2xl ">Hi this is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          SHARAN DEEPAK
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I’m a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          In love with Javascript and React
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              Projects
            </Link>

            <span className="group-hover:rotate-90 duration-300">
              <Link to="work" smooth={true} duration={500}>
                <HiArrowNarrowRight className="ml-3 " />
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;