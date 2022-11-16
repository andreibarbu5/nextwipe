import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Whenever = () => {
  const [isWhenever, setIsWhenever] = useState(false);
  return (
    <div>
      {/* ANY COUNTRY */}
      <div className="relative" onClick={() => setIsWhenever(!isWhenever)}>
        <div className="bg-gray-300 p-1 rounded-[0.3rem] text-[14px] font-['Poppins'] font-semibold flex items-center">
          <button>WHENEVER</button>
          <MdKeyboardArrowDown className="text-[17px]" />
        </div>
        {/* DROPDOWN */}
        {isWhenever && (
          <div className="absolute w-full -mt-[0.2rem]  bg-gray-300 rounded-b-[0.3rem] shadow-xl border border-gray-400 z-50">
            <ul className="flex flex-col items-center font-semibold">
              <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400">
                <button className="font-['Poppins']">EARLIEST</button>
              </li>

              <li className="mt-2 py-2  w-full flex justify-center hover:bg-gray-400 rounded-b-[0.3rem]">
                <button className="font-['Poppins']">LATEST</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Whenever;
