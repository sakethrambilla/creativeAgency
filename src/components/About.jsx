import React from "react";
import { FiPlayCircle } from "react-icons/fi";

const About = () => {
  return (
    <div
      id="about"
      className=" flex flex-col justify-center items-center py-36 gap-12"
    >
      <h1 className="text-xl text-white">About Us</h1>
      <h2 className="text-6xl text-white">Our Teammate</h2>
      <div className="flex flex-row items-center justify-center px-10 gap-8 py-4">
        <img src="AboutUs.svg" alt="about us" className="w-1/2" />
        <div className="gap-8 flex flex-col w-1/2 h-full">
          <p className="text-gray-300">
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <p className="text-gray-300">
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <div className="flex flex-row gap-8">
            <button className="px-10 py-2 rounded-full bg-white text-gray-800 font-bold shadow-md shadow-blue-500">
              {" "}
              About Us
            </button>
            <button className="px-10 py-2 rounded-full text-white border-2 flex gap-2 items-center">
              <FiPlayCircle />
              Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
