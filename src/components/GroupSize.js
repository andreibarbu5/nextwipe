import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const GroupSize = () => {
  const [isGroup, setIsGroup] = useState(false);
  return (
    <div>
      <div>
        {/* ANY COUNTRY */}
        <div className="relative" onClick={() => setIsGroup(!isGroup)}>
          <div className=" bg-gray-300 p-1 rounded-[0.3rem] text-[14px] font-['Poppins'] font-semibold flex items-center">
            <button>GROUP SIZE</button>
            <MdKeyboardArrowDown className="text-[17px]" />
          </div>
          {/* DROPDOWN */}
          {isGroup && (
            <div className="absolute w-full -mt-[0.2rem]  bg-gray-300 rounded-b-[0.3rem] shadow-xl border border-gray-400 z-50">
              <ul className="flex flex-col items-center font-semibold">
                <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400">
                  <button className="font-['Poppins']">SOLO</button>
                </li>
                <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400">
                  <button className="font-['Poppins']">DUO</button>
                </li>
                <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400">
                  <button className="font-['Poppins']">TRIO</button>
                </li>
                <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400 rounded-b-[0.3rem]">
                  <button className="font-['Poppins']">QUAD</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupSize;
