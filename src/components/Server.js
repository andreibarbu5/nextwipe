import React from "react";

const Server = ({ name, type, wipe, fill, country, groupsize }) => {
  return (
    <div className="w-full ">
      {/* SERVERS */}
      {/* MAP TROUGH THE SERVERS ARRAY */}
      <div className="bg-white flex flex-col sm:flex-row justify-between  rounded-[1rem] font-['Poppins'] pl-2 sm:pl-4  lg:mx-auto sm:mx-[1rem] lg:max-w-[60vw] mx-1 shadow-xl shadow-gray-500">
        <div className="whitespace-nowrap">
          {/* Server Name */}
          <div className="  pt-2  ">
            <p className="font-['Poppins']">{name}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center sm:justify-between px-1 ">
            <div className="sm:flex sm:flex-col items-center sm:items-start ">
              {/* Type */}
              <div className="  pb-2 pt-2  ">
                <div
                  className={`${type} w-[3rem] h-[1.5rem] rounded-[0.5rem]`}
                ></div>
              </div>
              <div className="sm:flex sm:flex-col">
                <div className="flex">
                  {/* Country */}
                  <div className="font-['Poppins']">
                    Country:
                    <span className="pl-1 font-['Poppins']">{country}</span>
                  </div>
                  {/* Group Size */}
                  <div className="pl-6 font-['Poppins']">
                    Group Size:
                    <span className="pl-1 font-['Poppins']">{groupsize}</span>
                  </div>
                </div>

                <div className="sm:flex pb-2">
                  {/* Fill on Wipe */}
                  <div className="  flex   -ml-2 sm:ml-0 pl-2 sm:pl-0 pr-6 ">
                    <p className="font-['Poppins']">Fill on WIpe: </p>
                    <p className="font-['Poppins'] pl-1">{fill}</p>
                  </div>{" "}
                  {/* Next Wipe */}
                  <div className="  flex  md:flex items-center sm:pl-2 lg:pl-0">
                    <p className="pr-2 font-['Poppins']  ">Next Wipe In: </p>
                    <p className="font-['Poppins'] font-semibold">{wipe}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" sm:w-[5rem] sm:flex items-center sm:justify-center whitespace-nowrap sm:px-2 -ml-2  sm:rounded-[0rem]  pb-2     sm:bg-[#33bb78]        hover:bg-[#3bd789]  sm:py-3 sm:rounded-r-[1rem]  group">
          <div className="mt-2 mx-4 bg-[#33bb78] group-hover:bg-[#3bd789]    py-3 rounded-[1rem] text-center ">
            <button className="font-['Poppins'] text-white font-bold text-[16px] group-hover:text-[17px]">
              Copy IP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Server;
