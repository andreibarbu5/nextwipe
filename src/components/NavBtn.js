import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBtn = ({
  title,
  bg,
  text,
  isCountry,
  stateCountry,
  id,
  isGroup,
  stateGroup,
}) => {
  return (
    <div className="">
      <div className="bg-gray-300 p-1 rounded-[0.3rem] text-[14px] font-['Poppins'] font-semibold flex items-center">
        <button>{title}</button>
        <MdKeyboardArrowDown className="text-[17px]" />
      </div>

      {stateCountry === true && id == 1 ? (
        <div className="h-20  text-white bg-gray-300">helooo</div>
      ) : (
        ""
      )}
      {stateGroup === true && id == 2 ? (
        <div className="h-20  text-white bg-gray-300">helooo</div>
      ) : (
        ""
      )}
      {stateCountry === true && id == 3 ? (
        <div className="h-20  text-white bg-gray-300">helooo</div>
      ) : (
        ""
      )}
      {stateCountry === true && id == 4 ? (
        <div className="h-20  text-white bg-gray-300">helooo</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBtn;
