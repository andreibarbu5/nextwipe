import React from "react";

const Server = ({ name, type, wipe, fill }) => {
  return (
    <div className="w-full">
      {/* SERVERS */}
      {/* MAP TROUGH THE SERVERS ARRAY */}
      <div className="bg-white flex justify-between  rounded-[1rem] font-['Poppins'] pl-2 sm:pl-4  lg:mx-auto sm:mx-[1rem] lg:max-w-[60vw] mx-1">
        <div className="whitespace-nowrap">
          <div className="pt-2  ">
            <p className="font-['Poppins']">{name}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between px-1 ">
            <div className="flex items-center">
              <div className="pb-2 pt-2">
                <div
                  className={`${type} w-[3rem] h-[1.5rem] rounded-[0.5rem]`}
                ></div>
              </div>
              <div className="md:flex items-center pl-2 lg:pl-0">
                <p className="pr-2 font-['Poppins'] lg:pl-4">Next Wipe In: </p>
                <p className="font-['Poppins'] font-semibold">{wipe}</p>
              </div>
            </div>

            <div className="flex px-10 -ml-2 sm:ml-0 ">
              <p className="font-['Poppins']">Fill on WIpe: </p>
              <p className="font-['Poppins'] pl-1">{fill}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#33bb78] rounded-r-[1rem] w-[5rem] flex items-center justify-center whitespace-nowrap px-2">
          <div className="">
            <button className="font-['Poppins'] text-white">Copy IP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Server;
