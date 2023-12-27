import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div name="work" className="w-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-[#bac0d2] font-bold inline border-b-4 border-blue-950">
            My projects
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <a href={item.live} target="_blank" rel="noreferrer">
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto mt-12 content-div hover:scale-110 duration-500 "
              >
                {/* Hover effect for images */}
              </div>
              <p className="mt-2 text-base font-bold">{item.name}</p>
              <p className="mt-2 text-base">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
