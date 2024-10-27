import { User } from "lucide-react";
import React from "react";
import Home from "../../assets/hom.png";
import { Lock } from "lucide-react";
import P from "./P";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import h2 from "./h2";

const Button = () => {
  return (
    <div className="w-[130px] h-[44px]  px-[12.98px] py-[8.65px] bg-[#002b5b] rounded-lg justify-start items-center gap-[6.44px] inline-flex">
      <div className="flex flex-row  items-center gap-2">
        <img src={Home} alt="Home" className="w-[20px] h-[20px]" />
        <p className="text-white text-sm font-Medium  leading-[16.95px]">
          Webinar
          <span className="font-['YuKyokasho Yoko'] text-[#40e0d0] text-sm">
            .gg
          </span>
        </p>
      </div>
    </div>
  );
};

export default Button;

export const WebinarButton = ({ icon, text }) => {
  return (
    <>
      <button className="flex-col justify-start items-center gap-2.5 inline-flex ">
        <img src={icon} alt="PlusIcon" />
        <p className="text-[#1c1b1f] text-sm font-semibold font-['General Sans'] leading-tight">
          {text}
        </p>
      </button>
    </>
  );
};

export const VideoWebinarButton = ({ lock, text }) => {
  return (
    <>
      <button className="flex flex-row h-[38px] px-4 py-2 rounded-lg border border-white/10 justify-center items-center gap-2.5">
        <img className="w-5 h-5 " src={lock} />
        <p>{text}</p>
      </button>
    </>
  );
};

export const ParticipantsButton = ({ icon, num }) => {
  return (
    <>
      <button className="flex flex-row h-[38px] px-4 py-2 rounded-lg border border-white/10 justify-center items-center gap-2.5">
        <img className="w-5 h-5" src={icon} alt="userPartipants" />
        <p>{num}</p>
      </button>
    </>
  );
};

export const RecordingButton = ({ rec, text, time }) => {
  return (
    <>
      <button className="flex flex-row h-[38px] px-4 py-2 rounded-lg border border-white/10 justify-center items-center gap-2.5">
        <img className="w-5 h-5" src={rec} alt="RecordingButton" />
        <p>{text}</p>
        <p>{time}</p>
      </button>
    </>
  );
};

export const WebinarVideoLeftIconsProfile = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // console.log(`Selected: ${option}`);
    setIsOpen(false);
  };
  return (
    <>
      {/* <button className="w-[38px] h-[38px] p-[9px] bg-white/10 rounded-md justify-start items-center gap-[7px]">
        <img className="w-[19px] h-[19px]" src={icon} alt="icons" />
      </button> */}

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="w-[38px] h-[38px] p-[9px] bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
        >
          <img className="w-[19px] h-[19px]" src={icon} alt="profile icon" />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <div className="bg-gray-50/95 backdrop-blur-sm rounded-md m-2 ">
              <button
                onClick={() => handleOptionClick("Edit Profile")}
                className="h-7 w-full px-2.5 py-1.5 bg-[#002b5b]/5 rounded justify-start items-center gap-2 text-center text-[#1c1b1f] text-xs font-medium font-['General Sans']  "
              >
                Edit Profile
              </button>
              <button
                onClick={() => handleOptionClick("Set Profile Picture")}
                className="h-7 w-full px-2.5 py-1.5 bg-[#002b5b]/5 rounded justify-start items-center gap-2 text-center text-[#1c1b1f] text-xs font-medium font-['General Sans'] mt-1 "
              >
                Set Profile Picture
              </button>
              <button
                onClick={() => handleOptionClick("Leave Room")}
                className="h-7 w-full px-2.5 py-1.5 bg-[#002b5b]/5 rounded justify-start items-center gap-2 text-center text-[#1c1b1f] text-xs font-medium font-['General Sans'] mt-1"
              >
                Leave Room
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export const WebinarVideoLeftIconsSetting = ({ icon }) => {
  return (
    <>
      <button className="w-[38px] h-[38px] p-[9px] bg-white/10 rounded-md justify-start items-center gap-[7px]">
        <img className="w-[19px] h-[19px]" src={icon} alt="icons" />
      </button>
    </>
  );
};

// export const WebinarVideoLeftIconsMore = ({ icon }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [webinarDeatils, setWebinarDetails] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option) => {
//     setIsOpen(false);
//   };
//   return (
//     <>
//       {/* <button className="w-[38px] h-[38px] p-[9px] bg-white/10 rounded-md justify-start items-center gap-[7px]">
//         <img className="w-[19px] h-[19px]" src={icon} alt="icons" />
//       </button> */}

//       <div className="relative">
//         <button
//           onClick={toggleDropdown}
//           className="w-[38px] h-[38px] p-[9px] bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
//         >
//           <img className="w-[19px] h-[19px]" src={icon} alt="profile icon" />
//         </button>

//         {isOpen && (
//           <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
//             <div className="bg-gray-50/95 backdrop-blur-sm rounded-md m-2 ">
//               <button
//                 onClick={() => handleOptionClick("Webinar Deatails")}
//                 className="h-7 w-full px-2.5 py-1.5 bg-[#002b5b]/5 rounded justify-start items-center gap-2 text-center text-[#1c1b1f] text-xs font-medium font-['General Sans']  "
//               >
//                 {webinarDeatils ? <WebinarDetails /> : "Webinar Details"}
//               </button>

//               <button
//                 onClick={() => handleOptionClick("Invite Link")}
//                 className="h-7 w-full px-2.5 py-1.5 bg-[#002b5b]/5 rounded justify-start items-center gap-2 text-center text-[#1c1b1f] text-xs font-medium font-['General Sans'] mt-1 "
//               >
//                 Copy Invite Link
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// const WebinarDetails = () => {
//   const WebinarDetails = [
//     {
//       id: 1,
//       webinarId: "222 3322 1122",
//       host: "Prabhleen Kaur",
//       passcode: "223322",
//       invitelink:
//         "https://us06web.zoom.us/j/85868166439?pwd=TjHDJQKClTbdayRyjwco1thReqU8jL.1",
//       attenddeeId: "222222",
//     },
//   ];
//   return (
//     <>
//       <div className="h-[282px] w-full pl-5 pr-4 py-3 bg-white/80 rounded-xl shadow border border-black/10 backdrop-blur-[80px] flex-col justify-start items-start gap-4">
//         <div className="w-full py-1 rounded-lg justify-start items-center gap-2.5">
//           {WebinarDetails.map((val, idx) => (
//             <div key={idx} className="flex flex-row">
//               <div key={idx} className="flex flex-col gap-[10px]">
//                 <div className="flex flex-row gap-2 items-center">
//                   <P>Webinar Id</P>
//                   <h2>{val.webinarId}</h2>
//                 </div>
//                 <div className="flex flex-row gap-2">
//                   <P>Host</P>
//                   <h2>{val.host}</h2>
//                 </div>
//                 <div className="flex flex-row gap-2">
//                   <P>Passcode</P>
//                   <h2>{val.passcode}</h2>
//                 </div>
//                 <div className="flex flex-row gap-2">
//                   <P>Invite Link</P>
//                   <h2>{val.invitelink}</h2>
//                 </div>
//                 <div className="flex flex-row gap-2">
//                   <P>Attendee Id</P>
//                   <h2>{val.attenddeeId}</h2>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

export const WebinarVideoLeftIconsMore = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWebinarDetails, setShowWebinarDetails] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (option === "Webinar Details") {
      setShowWebinarDetails(true);
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="w-[38px] h-[38px] p-[9px] bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center transition-colors"
        >
          <img className="w-[19px] h-[19px]" src={icon} alt="profile icon" />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            <div className="bg-gray-50/95 backdrop-blur-sm rounded-md m-2">
              <button
                onClick={() => handleOptionClick("Webinar Details")}
                className="h-7 w-full px-2.5 py-1.5 bg-[#002b5b]/5 rounded justify-start items-center gap-2 text-center text-[#1c1b1f] text-xs font-medium font-['General Sans']"
              >
                Webinar Details
              </button>

              <button
                onClick={() => handleOptionClick("Invite Link")}
                className="h-7 w-full px-2.5 py-1.5 bg-[#002b5b]/5 rounded justify-start items-center gap-2 text-center text-[#1c1b1f] text-xs font-medium font-['General Sans'] mt-1"
              >
                Copy Invite Link
              </button>
            </div>
          </div>
        )}
      </div>

      {showWebinarDetails && <WebinarDetails />}
    </>
  );
};

const WebinarDetails = () => {
  const WebinarDetails = [
    {
      id: 1,
      webinarId: "222 3322 1122",
      host: "Prabhleen Kaur",
      passcode: "223322",
      invitelink:
        "https://us06web.zoom.us/j/85868166439?pwd=TjHDJQKClTbdayRyjwco1thReqU8jL.1",
      attenddeeId: "222222",
    },
  ];

  return (
    <div className="h-[282px] w-full p-10 bg-white/80 rounded-xl shadow border border-black/10 backdrop-blur-[80px] flex-col justify-start items-start gap-4 relative z-50 top-52 ">
      <div className="w-full py-1 rounded-lg  gap-2 items-start ">
        {WebinarDetails.map((val, idx) => (
          <div key={idx} className="flex flex-row text-start items-start ">
            <div className="flex flex-col gap-[10px] items-start">
              <div className="flex flex-row h-[30px] py-1 rounded-lg text-start items-center gap-10  p-4 ">
                <P>Webinar Id</P>
                <h2 className="text-[#1c1b1f] text-base font-medium font-['General Sans']">
                  {val.webinarId}
                </h2>
              </div>
              <div className=" flex flex-row h-[30px] py-1 rounded-lg text-start items-center gap-10  p-4  ">
                <P>Host</P>
                <h2 className="text-[#1c1b1f] text-base font-medium font-['General Sans'] text-start">
                  {val.host}
                </h2>
              </div>
              <div className="flex flex-row h-[30px] py-1 rounded-lg items-center gap-10 ">
                <P>Passcode</P>
                <h2 className="text-[#1c1b1f] text-base font-medium font-['General Sans']">
                  {val.passcode}
                </h2>
              </div>
              <div className="flex flex-row h-[30px] py-1 rounded-lg  items-center gap-10 ">
                <P>Invite Link</P>
                <h2 className="text-[#1c1b1f] text-base font-medium font-['General Sans']">
                  {val.invitelink}
                </h2>
              </div>
              <div className="flex flex-row h-[30px] py-1 rounded-lg  items-center gap-10">
                <P>Attendee Id</P>
                <h2 className="text-[#1c1b1f] text-base font-medium font-['General Sans']">
                  {val.attenddeeId}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
