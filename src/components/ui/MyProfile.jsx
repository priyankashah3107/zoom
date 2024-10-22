import React from "react";
import User from "../../assets/user.png";
import H2 from "./H2";
import P from "./P";
import { Edit } from "lucide-react";
import { Pen } from "lucide-react";
export default function MyProfile() {
  return (
    <>
      <div className="flex flex-col gap-10 mt-[44px]  ml-[49px]">
        {/* My Profile three components 1. heading 2. profile card 3. account
        section */}
        <h1 className="text-[#1c1b1f] text-[28px] font-semibold font-['General Sans'] leading-[39.20px] mt-[35px]">
          My Profile
        </h1>
        <UserProfile
          userName={"Prabhleen Kaur"}
          email={"prabhleenkaur@gmail.com"}
          phnumber={"99982472439"}
          address={"Delhi, India"}
        />
        <MyAccountInfo
          accountNum={"1122334455"}
          email={"prabhleen@gmail.com"}
          password={"**********"}
          otp={"On"}
        />
      </div>
    </>
  );
}

function UserProfile({ userName, email, phnumber, address }) {
  return (
    <>
      <div className=" w-auto h-auto p-6 border bg-white rounded-[20px] items-start flex flex-row justify-between">
        <div>
          <div className="flex flex-row items-start gap-5">
            <img
              src={User}
              alt="userImage"
              className="w-40 h-40 rounded-[20px] border-2 border-black/10"
            />
            <div className="flex flex-col gap-2.5">
              <H2>{userName}</H2>
              <div className="flex flex-col">
                <P>{email}</P>
                <P>{phnumber}</P>
              </div>

              <P>{address}</P>
            </div>
          </div>
        </div>
        <button>
          <Pen className="w-6 h-6 text-[#d9d9d9] hover:text-[#323232]" />
        </button>
      </div>
    </>
  );
}

function MyAccountInfo({ accountNum, email, password, otp }) {
  const AccNum = "AccountNumber";
  const signin = "Sign-In-Email";
  const signPassword = "Sign-In-Password";
  const otpAuth = "OTP Authentication";
  return (
    <>
      <div className=" w-[720px] h-auto p-6 border bg-white rounded-[20px] items-start flex flex-row justify-between text-start ">
        <div>
          <div className="flex flex-col items-start gap-5 ">
            <H2>My Account</H2>

            <div className="flex flex-col gap-[16px] ">
              <div className="flex flex-row    ">
                <p className="myacc">{AccNum}</p>
                <h2 className="myacctext">{accountNum}</h2>
              </div>
              <div className="flex flex-row   ">
                <p className="myacc">{signin}</p>
                <h2 className="myacctext">{email}</h2>
              </div>

              <div className="flex flex-row ">
                <p className="myacc">{signPassword}</p>
                <h2 className="myacctext">{password}</h2>
              </div>

              <div className="flex flex-row ">
                <p className="myacc">{otpAuth}</p>
                <h2 className="myacctext">{otp}</h2>
              </div>
            </div>
          </div>
        </div>
        <button className="w-6 h-6 text-[#d9d9d9] hover:text-[#323232]">
          <Pen />
        </button>
      </div>
    </>
  );
}
