import { User } from "lucide-react";
import React from "react";
import Home from "../../assets/hom.png";

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
