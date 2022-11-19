import React from "react";
import Server from "./Server";
import bg from "../photos/bg.jpg";

const Servers = () => {
  const servers = [
    {
      name: "Hollowserver 2x Duo",
      type: "bg-black",
      wipe: "2 days 20hrs 17 mins",
      fill: 1,
      country: "Europe",
      groupsize: "SOLO",
    },
    {
      name: "Hollowserver 2x Duo",
      type: "bg-black",
      wipe: "2 days 20hrs 17 mins",
      fill: 1,
      country: "USA",
      groupsize: "DUO",
    },
    {
      name: "Hollowserver 2x Duo",
      type: "bg-black",
      wipe: "2 days 20hrs 17 mins",
      fill: 1,
      country: "ASIA",
      groupsize: "TRIO",
    },
    {
      name: "Hollowserver 2x Duo",
      type: "bg-black",
      wipe: "2 days 20hrs 17 mins",
      fill: 1,
      country: "Europe",
      groupsize: "SOLO",
    },
    {
      name: "Hollowserver 2x Duo",
      type: "bg-black",
      wipe: "2 days 20hrs 17 mins",
      fill: 1,
      country: "USA",
      groupsize: "DUO",
    },
    {
      name: "Hollowserver 2x Duo",
      type: "bg-black",
      wipe: "2 days 20hrs 17 mins",
      fill: 1,
      country: "ASIA",
      groupsize: "TRIO",
    },
  ];
  return (
    <div className="relative space-y-4 pt-4  -mt-8  w-full h-full  ">
      <div className="relative  space-y-4   ">
        <div className="  absolute w-full h-full flex  bg-red-400  z-0 ">
          <img src={bg} className="object-cover w-full h-full" />
        </div>
        <div className="relative z-10 space-y-4 pt-4 pb-8">
          {servers.map((server) => (
            <Server
              name={server.name}
              type={server.type}
              wipe={server.wipe}
              fill={server.fill}
              country={server.country}
              groupsize={server.groupsize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servers;
