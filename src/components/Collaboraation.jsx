import React from "react";

const Collaboration = () => {
  return (
    <section
      id="collaboration"
      className="flex flex-row justify-center items-center py-56 gap-12 text-white "
    >
      <div className="flex flex-col gap-8 px-14 ">
        <h1 className=" text-gray-200  text-6xl">
          Interesting Collaboration with Us ?
        </h1>
        <h4 className="text-gray-400 ">Help you to reach your buisness goal</h4>
        <button className="px-12 py-2 bg-white text-gray-800 rounded-full w-fit">
          Get Started
        </button>
      </div>
      <img
        src="collaboration.svg"
        alt="collaboration image "
        className="w-1/2"
      />
    </section>
  );
};

export default Collaboration;
