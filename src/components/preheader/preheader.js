import React from "react";
import "./preheader.css";

const PreHeader = () => {
  const width = window.innerWidth;
  console.log(width);
  return (
    <div className="bg-[#219653] px-6 py-2 md:inline-block hidden w-full">
      <div className="flex justify-between items-center ml-6">
        <div className="flex justify-center items-center">
          <img
            src="https://www.way2agribusiness.com/assets/images/logo.png"
            className="logo"
            alt=""
          />
          <p className="font-semibold text-white text-xs sm:text-sm ml-1">
            Way2AgriBusiness
          </p>
        </div>
        <div className="">
          <div className="" id="google_element"></div>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
