import React from "react";
import Calender from "../../assets/calendar.svg";
import DropDown from "../../assets/dropdown.svg";
import LeftIcon from "../../assets/left.svg";
import RightIcon from "../../assets/right.svg";
import Redvc from "../../assets/redvc.svg";
import Bluevc from "../../assets/bluevc.svg";
import H3 from "./H3";
import Events from "./Events";
import LineBreak from "./LineBreak";

const date = "Monday, 14 October 2024";

export const TimeTable = () => {
  return (
    <>
      <div className="w-[596px] h-auto p-6 bg-white rounded-xl shadow border border-black/10 flex-col justify-start items-start gap-6 ">
        <div className="flex flex-row justify-between  bg-[#002b5b]/5 rounded-md items-center  ">
          <div className="flex flex-row p-2.5 justify-center items-center gap-2.5">
            <button>
              <img src={Calender} alt="Calender" />
            </button>
            <H3>{date}</H3>
            <button>
              <img src={DropDown} alt="DropDown" />
            </button>
          </div>

          <div className="flex flex-row h-[30px] justify-start items-center gap-2.5 mr-6">
            <button>
              <img src={LeftIcon} alt="LeftArrow" />
            </button>
            <button>
              <img src={RightIcon} alt="RightArrow" />
            </button>
          </div>
        </div>

        <div>
          <Events
            time1={"11:30"}
            time2={"11:30"}
            event={"Live"}
            icon={Redvc}
            eventname={"UX Webinar"}
          />

          <LineBreak />

          <Events
            time1={"11:30"}
            time2={"11:30"}
            event={"Upcoming"}
            icon={Bluevc}
            eventname={"My first Webinar"}
          />

          <LineBreak />

          <Events
            time1={"11:30"}
            time2={"11:30"}
            event={"Upcoming"}
            icon={Bluevc}
            eventname={"Important Webinar"}
          />
          <LineBreak />
          <Events
            time1={"11:30"}
            time2={"11:30"}
            event={"Upcoming"}
            icon={Bluevc}
            eventname={"Webinar 1"}
          />
        </div>
      </div>
    </>
  );
};
