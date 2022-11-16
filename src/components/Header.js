import React, { useState } from "react";

import rust from "../photos/rustlogo.png";

import AnyCountry from "./AnyCountry";
import GroupSize from "./GroupSize";
import Server from "./Server";
import Type from "./Type";
import Whenever from "./Whenever";

const Header = () => {
  return (
    <div className="flex flex-col  items-center  bg-[#2d2d2d]  px-4  pb-3">
      {/* Logo */}
      <div className="flex items-center   text-[40px] sm:text-[50px]   text-white pt-2">
        <h1 className="pr-[0.7rem]  ">NEXT</h1>
        <img
          src={rust}
          className="w-[2rem] h-[2rem] sm:w-[2.3rem] sm:h-[2.3rem]"
        />
        <h1 className="pl-[0.7rem] ">WIPE</h1>
      </div>
      {/* Get Ready for next wipe */}
      <div className="text-[#6e6e6e] text-[18px] sm:text-[20px] sm:pt-3">
        <p>Get Ready for next wipe</p>
      </div>
      {/* Get Ready for next wipeNext FOrce Wipe is in 10day 20h 23m! */}
      <div className="  text-center text-[#37b57a] text-[17px] sm:text-[20px] pt-1 sm:flex sm:space-x-2 ">
        <p className=" ">Next FOrce Wipe is in</p>
        <p className="font-['Poppins'] font-semibold">10day 20h 23m!</p>
      </div>
      {/* Input Search */}
      <div className="pt-1  sm:w-[30rem] sm:py-2">
        <input
          type="text"
          className="font-['Poppins'] placeholder:font-semibold bg-[#878787] border border-gray-300 rounded-[0.2rem] placeholder:text-gray-600 pl-1 sm:pl-3 sm:w-full "
          placeholder="Search..."
        />
      </div>
      {/* Filter Buttons*/}
      <div className="pt-3 flex  justify-center space-x-2 sm:py-2">
        <div className="sm:flex sm:items-center  sm:space-x-2 ">
          <AnyCountry />
          <div className="pt-2 sm:pt-0">
            <GroupSize />
          </div>
        </div>
        <div className="sm:flex sm:space-x-2 ">
          <Type />
          <div className="pt-2 sm:pt-0">
            <Whenever />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
