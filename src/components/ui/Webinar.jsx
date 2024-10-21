import React from "react";
import CalClock from "../../assets/calClock.svg";
import Plus from "../../assets/plus.svg";
import { WebinarButton } from "./Button";

const Webinar = () => {
  return (
    <>
      <div className="h-[150px] w-auto pl-[30px] pr-5 py-[30px] bg-white rounded-xl shadow border border-black/10 justify-start items-center gap-10 inline-flex -ml-6">
        <div className="flex flex-row justify-start items-center gap-10 ">
          <WebinarButton icon={CalClock} text={"Schedule a Webinar"} />
          <WebinarButton icon={Plus} text={"Join a Webinar"} />
        </div>
      </div>
    </>
  );
};

export default Webinar;
