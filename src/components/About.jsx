import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl text-[#afbadb] font-bold inline border-b-4 border-blue-950">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. this is Sharan, Hope you would like my profile. Please take a
              look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building awesome websites that improves the
              lives of those around me. Client satisfaction is primary for me no
              matter what. I would love to work with an organization to enhace
              my skills and contribute to the growth of the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
