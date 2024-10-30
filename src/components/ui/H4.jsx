import React from "react";

const H4 = ({ children, className }) => {
  return (
    <>
      <h4 className="text-[#1c1b1f]  lg:text-[28px] font-semibold font-['General Sans'] leading-[39.20px] mt-[20px] lg:mt-[44px]">
        {children}
        {className}
      </h4>
    </>
  );
};

export default H4;
