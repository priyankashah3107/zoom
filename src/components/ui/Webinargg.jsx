import React from "react";
import Home from "../../assets/hom.png";

const Webinargg = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#002b5b] flex justify-center items-center">
        <div className="flex flex-row items-center">
          <img src={Home} alt="Img" className="w-[40px] h-[40px] mr-2" />
          <span className="text-[#40e0d0] text-[37.62px] font-bold font-['YuKyokasho Yoko'] leading-[52.66px] tracking-wide">
            Webinar
          </span>
          <span className="text-white text-[37px] font-bold font-['YuKyokasho Yoko'] leading-[52px] tracking-wide">
            .gg
          </span>
        </div>
      </div>
    </>
  );
};

export default Webinargg;
