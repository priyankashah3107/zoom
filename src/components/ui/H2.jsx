import React from "react";

const H2 = ({ children }) => {
  return (
    <>
      <h2 className="text-[#1c1b1f] text-[16px] lg:text-xl font-semibold font-['General Sans']">
        {children}
      </h2>
    </>
  );
};

export default H2;
