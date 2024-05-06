import React from "react";

const LandingSection = () => {
  return (
    <div id="home" className=" flex flex-col items-center ">
      <h1 className="text-white text-6xl font-bold text-center py-4">
        {" "}
        Make your dream <br />
        buisness goal come true
      </h1>
      <p className="text-gray-500 text-center py-4">
        {" "}
        when you need us for improve your business,
        <br /> then come with us to help your business have reach it, you just
        sit and feel that goal
      </p>
      <button className="w-fit mx-auto items-center  flex  justify-center px-10 py-2 rounded-full bg-white text black shadow-md shadow-sky-500    ">
        Start Project
      </button>
      <img src="HomePage.svg" />
    </div>
  );
};

export default LandingSection;
