import React from "react";
import User from "../../assets/user.png";
import H2 from "./H2";
import P from "./P";
import { Edit } from "lucide-react";
import { Pen } from "lucide-react";
import { useState } from "react";
export default function MyProfile() {
  const [profile, setProfile] = useState({
    userName: "Prabhleen",
    email: "prabhleenkaur@gmail.com",
    phnumber: "9898989898",
    address: "Delhi, India",
  });

  const [accountInfo, setAccountInfo] = useState({
    accountNum: "1122334455",
    email: "prabhleen@gmail.com",
    password: "**********",
    otp: "On",
  });

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <div className="w-screen flex flex-col gap-10 mt-[44px] items-center lg:items-start lg:ml-[49px]  overflow-x-hidden">
        {/* My Profile three components 1. heading 2. profile card 3. account
        section */}
        <h1 className="text-[#1c1b1f] text-[20px] lg:text-[28px] font-semibold font-['General Sans'] leading-[39px] mt-[35px]">
          My Profile
        </h1>
        <UserProfile
          profile={profile}
          setProfile={setProfile}
          toggleForm={toggleForm}
        />
        <MyAccountInfo
          accountInfo={accountInfo}
          setAccountInfo={setAccountInfo}
        />
      </div>
      {/* reder a form  */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex justify-center items-center">
          <div className="flex flex-row gap-10 bg-white w-[355px] lg:w-[700px] h-auto p-[30px]  rounded-[20px]  shadow-lg border-2 border-black/10 backdrop-blur-[100px] justify-start items-start gap-[30px">
            {/* <h2 className="text-xl font-semibold mb-4">Edit Profile</h2> */}
            <img
              src={User}
              alt="img"
              className="size-20 lg:w-40 lg:h-40 rounded-2xl border-2 border-black/10"
            />
            <form>
              {/* Add form fields for editing */}
              <div className="mb-4 flex flex-row gap-2">
                <div className="flex flex-col">
                  <label className="block text-gray-700 text-[12px] lg:text-xl">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border rounded text-[12px] lg:text-xl w-full py-2 px-3"
                    defaultValue="Prabhleen"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-[12px] lg:text-xl">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border rounded w-full py-2 px-3 text-[12px] lg:text-xl"
                    defaultValue="Kaur"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-[12px] lg:text-xl">
                  Phone Number*
                </label>
                <input
                  type="number"
                  className="border rounded w-full py-2 px-3 text-[12px] lg:text-xl"
                  defaultValue="9898989898"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-[12px] lg:text-xl">
                  Location*
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-[12px] lg:text-xl"
                  defaultValue="Delhi, India"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 hover:bg-gray-400 hover:text-white rounded text-[12px] lg:text-xl"
                  onClick={toggleForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="p-1.5 lg:px-4 lg:py-2 text-[12px] lg:text-xl bg-[#002b5b] text-white rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function UserProfile({ profile, setProfile, toggleForm }) {
  const { userName, email, phnumber, address } = profile;
  return (
    <>
      <div className=" w-[355px] md:w-[600px] lg:w-[720px] h-auto p-6 border bg-white rounded-[20px] items-start flex flex-row justify-between">
        <div>
          <div className="flex flex-row items-start gap-5">
            <img
              src={User}
              alt="userImage"
              className="size-24  lg:w-40 lg:h-40 rounded-[20px] border-2 border-black/10"
            />
            <div className="flex flex-col gap-2">
              <H2>{userName}</H2>
              <div className="flex flex-col">
                <P>{email}</P>
                <P>{phnumber}</P>
              </div>

              <P>{address}</P>
            </div>
          </div>
        </div>
        <button onClick={toggleForm}>
          <Pen className="size-5 lg:w-6 lg:h-6 text-[#d9d9d9] hover:text-[#323232]" />
        </button>
      </div>
    </>
  );
}

function MyAccountInfo({ accountInfo, setAccountInfo }) {
  const AccNum = "AccountNumber";
  const signin = "Sign-In-Email";
  const signPassword = "Sign-In-Password";
  const otpAuth = "OTP Authentication";

  const { accountNum, email, password, otp } = accountInfo;
  return (
    <>
      <div className=" w-[355px] md:w-[600px] lg:w-[720px] h-auto p-6 border bg-white rounded-[20px] items-start flex flex-row justify-between text-start mb-10 md:mb-0">
        <div>
          <div className="flex flex-col gap-6 lg:gap-5 ">
            <H2>My Account</H2>

            <div className="flex flex-col gap-[14px] md:gap-[16px] ">
              <div className="flex flex-row justify-between ">
                <p className="myacc md:text-[16px]">{AccNum}</p>
                <h2 className="myacctext md:text-[16px] ">{accountNum}</h2>
              </div>
              <div className="flex flex-row justify-between    ">
                <p className="myacc  md:text-[16px]">{signin}</p>
                <h2 className="myacctext md:text-[16px] ml-20">{email}</h2>
              </div>

              <div className="flex flex-row justify-between">
                <p className="myacc md:text-[16px]">{signPassword}</p>
                <h2 className="myacctext md:text-[16px]">{password}</h2>
              </div>

              <div className="flex flex-row justify-between">
                <p className="myacc md:text-[16px]">{otpAuth}</p>
                <h2 className="myacctext md:text-[16px]">{otp}</h2>
              </div>
            </div>
          </div>
        </div>
        <button className="  text-[#d9d9d9] hover:text-[#323232]">
          <Pen className="size-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </>
  );
}
