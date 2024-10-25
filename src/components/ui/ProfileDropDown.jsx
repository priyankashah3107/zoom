import React from "react";

const ProfileDropDown = ({ children }) => {
  return (
    <>
      <div className="w-[146px] h-auto p-1.5 bg-white/80 rounded-lg shadow backdrop-blur-2xl flex-col justify-start items-start gap-1 ">
        {children}
      </div>
    </>
  );
};

export default ProfileDropDown;
