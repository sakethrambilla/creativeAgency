import React from "react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center "
    >
      <div className=" flex flex-col items-center gap-6">
        <h1 className="text-2xl text-gray-200">Our Portfolio</h1>
        <h2 className="text-6xl text-gray-200">What do we do</h2>
        <p className="text-gray-400 text-center">
          all projects that we have already done , proven can help to use more
          <br />
          comfortable, then can used by client from our business
        </p>
      </div>
      <div className="flex flex-row gap-10 py-10">
        <img src="portfolio_1.svg" alt="protfolio iamges" />
        <img src="portfolio_2.svg" alt="protfolio iamges" />
        <img src="portfolio_3.svg" alt="protfolio iamges" />
      </div>
      <button className="px-14 text-white py-3 flex items-center border border-gray-400 rounded-full">
        See All Protflio
      </button>
    </section>
  );
};

export default Portfolio;
