import React from "react";
import { CiSettings } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { PiPenNib, PiTelevisionSimple } from "react-icons/pi";

const Services = () => {
  return (
    <div
      id="service"
      className="flex flex-row justify-center items-center py-56 gap-12"
    >
      <div className="px-12 w-1/2 gap-6 flex flex-col">
        <h1 className="text-xl text-gray-200">Our Services</h1>
        <h2 className="text-6xl text-gray-200">
          Perfect and Fast <br /> Movement
        </h2>
        <p className="text-gray-400 ">
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business
        </p>
        <div className="text-gray-300 flex items-center gap-2 hover:underline underline-offset-2 justify-end">
          Read More <FaArrowRight />
        </div>
      </div>
      <div className=" flex flex-col text-gray-200 gap-4 items-center">
        <div className=" flex gap-4 ">
          <div className="w-56 py-10 justify-center  border border-gray-600  rounded-xl flex flex-col gap-4 items-center">
            <div className=" bg-white text-3xl   text-gray-800  rounded-full w-fit p-3 ">
              <FiMonitor />
            </div>
            <div className="flex  text-gray-300 text-wrap text-sm ">
              Social Media <br /> Management
            </div>
          </div>
          <div className="w-56  py-10 justify-center  border border-gray-600  rounded-xl flex flex-col gap-4 items-center">
            <div className=" bg-red-500  text-3xl  text-gray-800  rounded-full w-fit p-3 ">
              <CiSettings />
            </div>
            <div className="flex  text-gray-300 text-wrap text-sm text-center">
              Search Engine <br /> Optimization
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-56 py-10 justify-center  border border-gray-600  rounded-xl flex flex-col gap-4 items-center">
            <div className=" bg-lime-500  text-3xl  text-gray-800  rounded-full w-fit p-3 ">
              <PiPenNib />
            </div>
            <div className="flex  text-gray-300 text-wrap text-sm ">Design</div>
          </div>
          <div className="w-56 py-10 justify-center  border border-gray-600  rounded-xl flex flex-col gap-4 items-center">
            <div className=" bg-yellow-300  text-3xl  text-gray-800  rounded-full w-fit p-3 ">
              <PiTelevisionSimple />
            </div>
            <div className="flex  text-gray-300 text-wrap text-sm ">Ads</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
