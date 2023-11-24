import React from "react";
import linkedin from "../assets/linkedin.png";
import Mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" bg-[#0a192f] flex flex-col items-center p-4"
    >
      <h2 className="text-white text-3xl font-semibold">Contact me</h2>
      <div className="flex items-center mt-8">
        <img className="w-10" alt="mail" src={Mail} />
        <p className="text-white ml-2">sharandeepak8525@gmail.com</p>
      </div>
      <a href="https://www.linkedin.com/in/sharan-deepak-908b0a19b/">
        <div className="flex items-center mt-8">
          <img className="w-10" alt="linkedin" src={linkedin} />
          <p className="text-white ml-2">linkedin</p>
        </div>
      </a>
    </div>
  );
};

export default Contact;
