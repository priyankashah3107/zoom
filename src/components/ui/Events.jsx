import React from "react";
import P from "../ui/P.jsx";
import Redvc from "../../assets/redvc.svg";
import H3 from "./H3.jsx";
const Events = ({ time1, time2, event, eventname, icon }) => {
  return (
    <>
      <div className="h-auto flex flex-row justify-start items-center gap-3 text-center p-3 ">
        <div className="flex flex-col">
          <H3>{time1}</H3>
          <P>{time2}</P>
        </div>

        <div className="w-[109px] h-auto flex-col justify-start items-start gap-1.5 ml-[12px]">
          <div className="w-[50px] h-[0px] origin-top-left rotate-90 border border-[#40e0d0] "></div>

          <div className=" w-[109px] h-auto flex flex-col gap-0.5 ml-[16px]">
            <div className="flex flex-row h-5 justify-start items-center gap-[9px]">
              <P>{event}</P>
              <img src={icon} alt="icon" />
            </div>
            <H3>{eventname}</H3>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[0px] border border-black/20"></div> */}
    </>
  );
};

export default Events;
