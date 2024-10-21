import React from "react";
import Button from "./Button";
import User from "../../assets/user.png";
import Profile from "./Profile";
import { useState } from "react";

const LogoSection = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile((prevState) => !prevState);
  };

  return (
    <>
      <header className="w-full flex flex-row justify-between items-center border-r mt-[24px] mb-[24px] p-2 ">
        <Button />

        <img
          src={User}
          alt="User"
          className="w-[50px] h-[50px] px-2 py-1.5 rounded-lg border border-[#1c1b1f]/10 cursor-pointer"
          onClick={handleProfileClick}
        />
      </header>
      {showProfile && <Profile />}
    </>
  );
};

export default LogoSection;
