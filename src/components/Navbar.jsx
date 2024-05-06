import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="z-10 ">
      {/* Mobile View */}

      {/* Desktop View */}
      <div className="flex flex-row justify-between items-center py-24 ">
        <div className="flex flex-row  items-center gap-2">
          <img src="Logo.svg" />
          <div className="flex flex-col">
            <div className="font-semibold text-[#E2E2E2]">Agency</div>
            <div className=" font-light text-[#E2E2E2] text-sm">Creative</div>
          </div>
        </div>
        <div className=" flex flex-row gap-4 items-center">
          <Link
            to="home"
            smooth={true}
            offset={0}
            className="text-[#E2e2e2] font-light"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={20}
            className="text-[#E2e2e2] font-light"
          >
            About
          </Link>
          <Link
            to="service"
            smooth={true}
            offset={0}
            className="text-[#E2e2e2] font-light"
          >
            Services
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            offset={-10}
            className="text-[#E2e2e2] font-light"
          >
            Projects
          </Link>
        </div>
        <button className="px-12 py-2 rounded-full border border-[#e2e2e2] text-[#e2e2e2]">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
