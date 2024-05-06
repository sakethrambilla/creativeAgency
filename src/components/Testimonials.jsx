import React from "react";

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="flex flex-col justify-center items-center py-56 gap-6 text-white"
    >
      <div className=" flex gap-4 w-full">
        <div className="">
          <img src="dots.svg" className="w-24" />
        </div>
        <div className=" text-center w-4/5 ">
          <h1 className="text-xl text-gray-300"> Testimonial</h1>
          <h2 className="text-6xl text-gray-300">People Talk about Us</h2>
        </div>
      </div>
      <div className="flex flex-row gap-10 px-14 py-8 ">
        <div className="p-4 bg-[#0B0F15] flex flex-col rounded-xl shadow-md shadow-gray-800 pb-24 py-10 gap-6">
          <div className="flex flex-row gap-4 items-center">
            <img src="testimonial_1.svg" />
            <div className=" flex flex-col gap-2">
              <p className="text-gray-300">Angel Rose</p>
              <p className="text-xs text-gray-500">Creative Manager</p>
            </div>
          </div>
          <p className="text-wrap text-gray-400">
            There are many variations passages of Lorem Ipsum majority some by
            words which don't look .
          </p>
        </div>

        <div className="p-4 bg-[#0B0F15] flex flex-col rounded-xl shadow-md shadow-gray-800 pb-24 py-10 gap-6">
          <div className="flex flex-row gap-4 items-center">
            <img src="testimonial_1.svg" />
            <div className=" flex flex-col gap-2">
              <p className="text-gray-300">Angel Rose</p>
              <p className="text-xs text-gray-500">Creative Manager</p>
            </div>
          </div>
          <p className="text-wrap text-gray-400">
            There are many variations passages of Lorem Ipsum majority some by
            words which don't look .
          </p>
        </div>

        <div className="p-4 bg-[#0B0F15] flex flex-col rounded-xl shadow-md shadow-gray-800 pb-24 py-10 gap-6">
          <div className="flex flex-row gap-4 items-center">
            <img src="testimonial_1.svg" />
            <div className=" flex flex-col gap-2">
              <p className="text-gray-300">Angel Rose</p>
              <p className="text-xs text-gray-500">Creative Manager</p>
            </div>
          </div>
          <p className="text-wrap text-gray-400">
            There are many variations passages of Lorem Ipsum majority some by
            words which don't look .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
