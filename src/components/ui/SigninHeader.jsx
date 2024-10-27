import React from "react";
import Home from "../../assets/hom.png";
const SigninHeader = ({ className }) => {
  return (
    <>
      <div className="flex flex-row gap-2 items-center ">
        <img src={Home} alt="img" className="size-[30px] " />
        <div className="flex flex-row  text-[28.89px] font-bold font-['YuKyokasho Yoko'] leading-10 tracking-wide ">
          <span className="text-[#40e0d0]">Webinar</span>
          <span className="text-white">.gg</span>
        </div>
        {className}
      </div>
    </>
  );
};

export default SigninHeader;
