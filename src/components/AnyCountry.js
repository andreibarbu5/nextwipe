import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const AnyCountry = () => {
  const [isCountry, setIsCountry] = useState(false);
  return (
    <div>
      {/* ANY COUNTRY */}
      <div className="relative" onClick={() => setIsCountry(!isCountry)}>
        <div className="bg-gray-300 p-1 rounded-[0.3rem] text-[14px] font-['Poppins'] font-semibold flex items-center justify-center w-[8rem] ">
          <button>COUNTRY</button>
          <MdKeyboardArrowDown className="text-[17px]" />
        </div>
        {/* DROPDOWN */}
        {isCountry && (
          <div className="absolute -mt-[0.2rem]  bg-gray-300 rounded-b-[1rem] w-full z-50 shadow-xl border border-gray-400">
            <ul className="flex flex-col items-center font-semibold">
              <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400">
                <button className="font-['Poppins']">EUROPE</button>
              </li>
              <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400">
                <button className="font-['Poppins']">UK</button>
              </li>
              <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400">
                <button className="font-['Poppins']">USA</button>
              </li>
              <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400">
                <button className="font-['Poppins']">NETHERLANDS</button>
              </li>
              <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400">
                <button className="font-['Poppins']">FRANCE</button>
              </li>
              <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400 rounded-b-[1rem]">
                <button className="font-['Poppins']">GERMANY</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnyCountry;
