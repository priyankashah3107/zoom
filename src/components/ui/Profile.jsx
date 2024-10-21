import { LogOut } from "lucide-react";
import { User } from "lucide-react";
import React from "react";
import P from "../../components/ui/P";
import H2 from "../../components/ui/H2";
import VerifiedIcon from "../../assets/verified.svg";
import UserLogo from "../../assets/userlogo.svg";
import Logout from "../../assets/logout.svg";

const Profile = () => {
  const name = "Prabhleen Kaur";
  const email = "prabhleenkaur@gmail.com";
  return (
    <div className="w-[300px] bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center mb-4 ">
        <div className="flex flex-col ">
          <div className="flex flex-row gap-2">
            <img src={VerifiedIcon} alt="VerifiedIcon" />
            <H2 className="font-semibold">{name}</H2>
          </div>
          <P>{email}</P>
        </div>
      </div>

      <button className="flex items-center justify-between w-full bg-gray-100 rounded-lg px-3 py-2 mb-4">
        <span>My Profile</span>
        <img src={UserLogo} alt="UserLogo" />
      </button>

      <button className="flex items-center justify-between w-full bg-[#002B5B] text-white rounded-lg px-3 py-2">
        <span>Sign Out</span>
        <img src={Logout} alt="Logout" />
      </button>
    </div>
  );
};

export default Profile;
