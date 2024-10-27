import React from "react";
import LogoSection from "./LogoSection";
import { Clock, Home, Ticket } from "lucide-react";
import Question_Mark from "../../assets/question_mark.svg";
const LeaveWebinarPage = () => {
  return (
    <div className="w-screen h-screen bg-[#002752] flex flex-col">
      <LogoSection />

      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 text-white text-center">
          <div className="flex flex-col gap-[24px]">
            <h2 className="text-center text-white text-2xl font-semibold font-['General Sans']">
              Left webinar “My Webinar”.
            </h2>
            <div className="flex flex-row gap-1 items-center text-white/60 text-xl font-medium font-['General Sans'] text-center justify-center">
              <Clock />
              <p>53:55</p>
            </div>
          </div>

          <div className="flex flex-row gap-[40px]">
            <button className="flex flex-row items-center h-[42px] px-5 py-2.5 bg-white/80 rounded-lg gap-3">
              <Home className="text-[#002752]" />
              <span className="text-[#002752] text-base font-medium">
                Go to Dashboard?
              </span>
            </button>

            <button className="flex flex-row items-center h-[42px] px-5 py-2.5 bg-white/80 rounded-lg gap-3">
              <Ticket className="text-[#002752]" />
              <span className="text-[#002752] text-base font-medium">
                View Recording
              </span>
            </button>
          </div>
        </div>
      </div>

      <button className="w-[45px] h-[45px] p-[11.70px] bg-[#f4f4f4] rounded-[22.50px] justify-start items-center gap-[9px] ml-4 mb-4">
        <img
          src={Question_Mark}
          alt="Question_mark"
          className="w-[21px] h-[21px] "
        />
      </button>
    </div>
  );
};

export default LeaveWebinarPage;
