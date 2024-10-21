import React from "react";

const H3 = ({ children }) => {
  return (
    <>
      <h3 className=" whitespace-nowrap  w-auto text-[#1c1b1f] text-xl font-medium font-['General Sans'] leading-7">
        {children}
      </h3>
    </>
  );
};

export default H3;
