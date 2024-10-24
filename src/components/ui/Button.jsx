import { User } from "lucide-react";
import React from "react";
import Home from "../../assets/hom.png";
import { Lock } from "lucide-react";
import P from "./P";

const Button = () => {
  return (
    <div className="w-[130px] h-[44px]  px-[12.98px] py-[8.65px] bg-[#002b5b] rounded-lg justify-start items-center gap-[6.44px] inline-flex">
      <div className="flex flex-row  items-center gap-2">
        <img src={Home} alt="Home" className="w-[20px] h-[20px]" />
        <p className="text-white text-sm font-Medium  leading-[16.95px]">
          Webinar
          <span className="font-['YuKyokasho Yoko'] text-[#40e0d0] text-sm">
            .gg
          </span>
        </p>
      </div>
    </div>
  );
};

export default Button;

export const WebinarButton = ({ icon, text }) => {
  return (
    <>
      <button className="flex-col justify-start items-center gap-2.5 inline-flex">
        <img src={icon} alt="PlusIcon" />
        <p className="text-[#1c1b1f] text-sm font-semibold font-['General Sans'] leading-tight">
          {text}
        </p>
      </button>
    </>
  );
};

export const VideoWebinarButton = ({ lock, text }) => {
  return (
    <>
      <button className="flex flex-row h-[38px] px-4 py-2 rounded-lg border border-white/10 justify-center items-center gap-2.5">
        <img className="w-5 h-5 " src={lock} />
        <p>{text}</p>
      </button>
    </>
  );
};

export const ParticipantsButton = ({ icon, num }) => {
  return (
    <>
      <button className="flex flex-row h-[38px] px-4 py-2 rounded-lg border border-white/10 justify-center items-center gap-2.5">
        <img className="w-5 h-5" src={icon} alt="userPartipants" />
        <p>{num}</p>
      </button>
    </>
  );
};

export const RecordingButton = ({ rec, text, time }) => {
  return (
    <>
      <button className="flex flex-row h-[38px] px-4 py-2 rounded-lg border border-white/10 justify-center items-center gap-2.5">
        <img className="w-5 h-5" src={rec} alt="RecordingButton" />
        <p>{text}</p>
        <p>{time}</p>
      </button>
    </>
  );
};

export const WebinarVideoLeftIcons = ({ icon }) => {
  return (
    <>
      <button className="w-[38px] h-[38px] p-[9px] bg-white/10 rounded-md justify-start items-center gap-[7px]">
        <img className="w-[19px] h-[19px]" src={icon} alt="icons" />
      </button>
    </>
  );
};
