import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center py-32 gap-12 text-white bg-[#383638] w-full">
      <div className="flex flex-row gap-32  w-full justify-center">
        <div className="flex flex-row h-fit items-center gap-2 bg-gray-300 p-3 rounded-2xl">
          <img src="Logo.svg" />
          <div className="flex flex-col">
            <div className="font-semibold text-gray-800">Agency</div>
            <div className=" font-light text-gray-800 text-sm">Creative</div>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <h3 className="text-gray-200">Terms & Policies</h3>
          <p className="text-gray-400 text-sm">Terms of Service</p>
          <p className="text-gray-400 text-sm">Privacy Policy</p>
        </div>
        <div className=" flex flex-col gap-3">
          <h3 className="text-gray-200">Company</h3>
          <p className="text-gray-400 text-sm">Home</p>
          <p className="text-gray-400 text-sm">About Us</p>
          <p className="text-gray-400 text-sm">Contact Us</p>
        </div>
        <div className=" flex flex-col gap-3">
          <h3 className="text-gray-200">Contact</h3>
          <p className="text-gray-400 text-sm">(+62) 893912392190</p>
          <p className="text-gray-400 text-sm">agecnycr@gmail.com</p>
        </div>
        <div className=" flex flex-col gap-3">
          <h3 className="text-gray-200">Location</h3>
          <p className="text-gray-400 text-sm">
            PT Osiris Real Estate Internasional
          </p>
          <p className="text-gray-400 text-sm">
            Jl. KH. Wahid Hasyim Kel No.10D
          </p>
          <p className="text-gray-400 text-sm">Jakarta, Indonesia</p>
          <p className="text-gray-400 text-sm">team@OsirisRealEstate.com</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-row gap-6 py-4">
          <div className="p-2 rounded-full w-fit text-gray-700 bg-gray-200 text-xl">
            <FiFacebook />
          </div>
          <div className="p-2 rounded-full w-fit text-gray-700 bg-gray-200 text-xl">
            <FaInstagram />
          </div>
          <div className="p-2 rounded-full w-fit text-gray-700 bg-gray-200 text-xl">
            <FiLinkedin />
          </div>
          <div className="p-2 rounded-full w-fit text-gray-700 bg-gray-200 text-xl">
            <CiMail />
          </div>
          <div className="p-2 rounded-full w-fit text-gray-700 bg-gray-200 text-xl">
            <FaXTwitter />
          </div>
        </div>
        <div className="w-2/5 h-[1px] bg-gray-400"></div>
        <p className="text-gray-400 py-4 font-thin">
          {" "}
          Copyright @ 2024 Agency Creative. All Right Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
