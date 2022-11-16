import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Type = () => {
  const [isType, setIsType] = useState(false);
  return (
    <div>
      <div>
        <div>
          {/* ANY COUNTRY */}
          <div className="relative" onClick={() => setIsType(!isType)}>
            <div className="bg-gray-300 p-1 rounded-[0.3rem] text-[14px] font-['Poppins'] font-semibold flex items-center  justify-center sm:w-[5rem]">
              <button>TYPE</button>
              <MdKeyboardArrowDown className="text-[17px]" />
            </div>
            {/* DROPDOWN */}
            {isType && (
              <div className="absolute w-full -mt-[0.2rem]  bg-gray-300 rounded-b-[0.3rem] flex justify-center shadow-xl border border-gray-400 z-50 ">
                <ul className="flex flex-col items-center font-semibold  w-[5rem]">
                  <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400 ">
                    <button className="font-['Poppins']">VANILLA</button>
                  </li>
                  <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400 rounded-b-[0.3rem]">
                    <button className="font-['Poppins']">MODDED</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
