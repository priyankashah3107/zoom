// // import React from "react";
// // import Question_mark from "../../assets/question_mark.svg";
// // import Brightness_alret from "../../assets/brightness_alert.svg";
// // import offVideoCam from "../../assets/videocam_off.svg";
// // import Mic_off from "../../assets/mic_off.svg";

// // import { Camera } from "lucide-react";
// // import { Mic } from "lucide-react";
// // import { Hand } from "lucide-react";
// // import { MessageCircle } from "lucide-react";
// // import { DoorClosed, X } from "lucide-react";
// // import Chat from "../../assets/chat.svg";
// // import { Cross } from "lucide-react";
// // import { useState } from "react";
// // import { CameraOff } from "lucide-react";

// // const VideoFooter = () => {
// //   const [cameraActive, setCameraActive] = useState(false);
// //   const [micActive, setMicActive] = useState(false);

// //   return (
// //     <div className="w-full h-[80px] flex items-center justify-between p-[29px] text-white text-sm font-medium font-['General Sans'] mb-8">
// //       <div className="space-x-4">
// //         <button className="w-[38px] h-[38px] p-[9px] bg-[#f4f4f4] rounded-[19px] justify-start items-center gap-[16px]">
// //           <img
// //             src={Question_mark}
// //             alt="Question Mark"
// //             className="w-[18px] h-[18px]"
// //           />
// //         </button>
// //         <button className="w-[38px] h-[38px] p-[9px] bg-[#f4f4f4] rounded-[19px] justify-start items-center gap-[16px]">
// //           <img
// //             src={Brightness_alret}
// //             alt="Brightness"
// //             className="w-[18px] h-[18px]"
// //           />
// //         </button>
// //       </div>

// //       <div className="flex-grow flex items-center justify-center">
// //         <div className="flex flex-row items-center justify-center space-x-4">
// //           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
// //             {/* <Camera className="w-[18px] h-[18px] text-white" /> */}
// //             <div>
// //               <Camera
// //                 className={!cameraActive ? "text-white" : "text-red-700"}
// //               />
// //               {!cameraActive && (
// //                 <img src={CameraOff} className="text-red-700" />
// //               )}
// //             </div>
// //           </button>

// //           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
// //             <Mic className="w-[18px] h-[18px] text-white" />
// //           </button>
// //           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
// //             <Hand className="w-[18px] h-[18px] text-white" />
// //           </button>
// //           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
// //             <img
// //               src={Chat}
// //               alt="chat"
// //               className="w-[18px] h-[18px] text-red-700"
// //             />
// //           </button>
// //           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
// //             <DoorClosed className="w-[18px] h-[18px] text-red-700" />
// //           </button>
// //           <Cross />
// //           {/* <button>4</button>
// //           <button>5</button>
// //           <button>6</button> */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VideoFooter;

// import React, { useState } from "react";
// import Question_mark from "../../assets/question_mark.svg";
// import Brightness_alret from "../../assets/brightness_alert.svg";
// import {
//   Camera,
//   Mic,
//   Hand,
//   MessageCircle,
//   DoorClosed,
//   X,
//   CameraOff,
//   MicOff,
// } from "lucide-react";

// const VideoFooter = () => {
//   const [cameraActive, setCameraActive] = useState(true);
//   const [micActive, setMicActive] = useState(true);
//   const [handRaised, setHandRaised] = useState(false);
//   const [chatOpen, setChatOpen] = useState(false);

//   const toggleCamera = () => setCameraActive(!cameraActive);
//   const toggleMic = () => setMicActive(!micActive);
//   const toggleHand = () => setHandRaised(!handRaised);
//   const toggleChat = () => setChatOpen(!chatOpen);

//   return (
//     <div className="w-full  items-center justify-center p-[29px] text-white text-sm font-medium font-['General Sans'] mb-8">
//       <div className="flex flex-row items-center  ">
//         <div className="flex space-x-4 items-center ">
//           <button className="w-[38px] h-[38px] p-[9px] bg-[#f4f4f4] rounded-[19px] justify-start items-center gap-[16px]">
//             <img
//               src={Question_mark}
//               alt="Question_mark"
//               className="w-[18px] h-[18px] "
//             />
//           </button>
//           <button className="w-[38px] h-[38px] p-[9px] bg-[#f4f4f4] rounded-[19px] justify-start items-center gap-[16px]">
//             <img
//               src={Brightness_alret}
//               alt="Brightness"
//               className="w-[18px] h-[18px] "
//             />
//           </button>
//         </div>

//         <div className="flex-grow flex items-center justify-center">
//           <div className="flex flex-row items-center justify-center space-x-4">
//             <button
//               onClick={toggleCamera}
//               className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors relative ${
//                 cameraActive
//                   ? "bg-white/10 hover:bg-white/20"
//                   : "bg-red-500 hover:bg-red-600"
//               }`}
//             >
//               {cameraActive ? (
//                 <Camera className="w-5 h-5 text-white" />
//               ) : (
//                 <div className="relative">
//                   <CameraOff className="w-5 h-5 text-white" />
//                 </div>
//               )}
//             </button>

//             <button
//               onClick={toggleMic}
//               className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors relative ${
//                 micActive
//                   ? "bg-white/10 hover:bg-white/20"
//                   : "bg-red-500 hover:bg-red-600"
//               }`}
//             >
//               {micActive ? (
//                 <Mic className="w-5 h-5 text-white" />
//               ) : (
//                 <div className="relative">
//                   <MicOff className="w-5 h-5 text-white" />
//                 </div>
//               )}
//             </button>

//             <button
//               onClick={toggleHand}
//               className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
//                 handRaised
//                   ? "bg-blue-500 hover:bg-blue-600"
//                   : "bg-white/10 hover:bg-white/20"
//               }`}
//             >
//               <Hand className="w-5 h-5 text-white" />
//             </button>

//             <button
//               onClick={toggleChat}
//               className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
//                 chatOpen
//                   ? "bg-blue-500 hover:bg-blue-600"
//                   : "bg-white/10 hover:bg-white/20"
//               }`}
//             >
//               <MessageCircle className="w-5 h-5 text-white" />
//             </button>

//             <button className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center">
//               <DoorClosed className="w-5 h-5 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoFooter;

import React, { useState } from "react";
import Question_mark from "../../assets/question_mark.svg";
import Brightness_alret from "../../assets/brightness_alert.svg";
import {
  Camera,
  Mic,
  Hand,
  MessageCircle,
  DoorClosed,
  CameraOff,
  MicOff,
} from "lucide-react";
import Chat from "./Chat";
import H2 from "./h2";
import P from "./P";
import { format, isToday } from "date-fns";
import Home from "../../assets/hom.png";
import { LeafyGreen } from "lucide-react";
// import LeaveWebinarPage from "./LeaveWebinar";
const VideoFooter = () => {
  const [cameraActive, setCameraActive] = useState(true);
  const [micActive, setMicActive] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDoorClose, setIsDoorClose] = useState(false);
  const [questionBot, setIsQuestionBotActive] = useState(false);
  // const [isLeaving, setIsLeaving] = useState(false);

  const toggleCamera = () => setCameraActive(!cameraActive);
  const toggleMic = () => setMicActive(!micActive);
  const toggleHand = () => setHandRaised(!handRaised);
  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const toggleDoor = () => setIsDoorClose(!isDoorClose);
  const toggleQuestionBot = () => setIsQuestionBotActive(!questionBot);

  return (
    <div className="relative">
      {/* Chat Component */}
      {isChatOpen && (
        <div className="absolute bottom-44 p-2  lg:p-0 md:right-4 lg:right-5 w-auto h-[600px] rounded-lg overflow-hidden shadow-lg ">
          <Chat onClose={() => setIsChatOpen(false)} />
        </div>
      )}

      {/* Video Footer */}
      <div className="w-full items-center justify-center p-[29px] text-white text-sm font-medium font-['General Sans'] mb-8">
        <div className="flex flex-row items-center">
          <div className="flex space-x-4 items-center">
            <button
              onClick={toggleQuestionBot}
              className={` p-[9px] bg-[#f4f4f4] rounded-[19px] justify-start items-center gap-[16px] ${
                questionBot
                  ? "bg-[#40E0D0] hover:bg-[#40E0D0] w-[38px] h-[38px]"
                  : "bg-white hover:bg-white  "
              }`}
            >
              {questionBot ? (
                <QuestionBot />
              ) : (
                <img
                  src={Question_mark}
                  alt="Question_mark"
                  className="w-[18px] h-[18px]"
                />
              )}
              {/* <img
                src={Question_mark}
                alt="Question_mark"
                className="w-[18px] h-[18px]"
              /> */}
            </button>
            <button className="hidden lg:flex w-[38px] h-[38px] p-[9px] bg-[#f4f4f4] rounded-[19px] justify-start items-center gap-[16px]">
              <img
                src={Brightness_alret}
                alt="Brightness"
                className="w-[18px] h-[18px]"
              />
            </button>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <div className="flex flex-row items-center justify-center space-x-4">
              <button
                onClick={toggleCamera}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors relative ${
                  cameraActive
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {cameraActive ? (
                  <Camera className="w-5 h-5 text-white" />
                ) : (
                  <CameraOff className="w-5 h-5 text-white" />
                )}
              </button>

              <button
                onClick={toggleMic}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors relative ${
                  micActive
                    ? "bg-white/10 hover:bg-white/20"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {micActive ? (
                  <Mic className="w-5 h-5 text-white" />
                ) : (
                  <MicOff className="w-5 h-5 text-white" />
                )}
              </button>

              <button
                onClick={toggleHand}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  handRaised
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <Hand className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={toggleChat}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  isChatOpen
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={toggleDoor}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors  ${
                  isDoorClose
                    ? "bg-red-600 hover:bg-red-600"
                    : "bg-red-600 hover:bg-red-600 text-white "
                }`}
              >
                {isDoorClose ? (
                  <LeaveWebinar />
                ) : (
                  <DoorClosed className="w-5 h-5 text-wrap" />
                )}
                {/* <DoorClosed className="w-5 h-5 text-white" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;

const LeaveWebinar = () => {
  const [isLeaving, setIsLeaving] = useState(false);
  const handleLeaveWebinar = () => setIsLeaving(true);
  return (
    <>
      <div className=" absolute bottom-60 right-0.5 md:right-44 lg:bottom-52 lg:left-[40%] w-auto  lg:w-[413px] h-[250px] p-6 rounded-xl border-2 border-black/10 backdrop-blur-[100px] bg-opacity-80 bg-white  flex-col justify-start items-start gap-[60px] inline-flex">
        <div className="flex flex-col self-stretch h-[92px] justify-start items-center gap-4">
          <h2 className="text-center text-[#002b5b] text-[20px] lg:text-2xl font-semibold font-['General Sans']">
            Leave “My Webinar”
          </h2>
          <p className="text-center text-[#002b5b]/60  text-[14px] lg:text-base font-medium font-['General Sans']">
            Leaving the webinar will remove you from the room. Are you sure?
          </p>

          <div className=" flex  flex-row justify-between items-center gap-[18px] ">
            <button className="h-[50px] p-3 lg:px-4 lg:py-2.5 bg-[#40e0d0] rounded-lg justify-center items-center gap-2 inline-flex text-[#002752] text-base font-semibold font-['General Sans'] leading-snug">
              Leave Webinar
            </button>
            <button className="h-[50px] p-3 lg:px-4 lg:py-2.5 bg-white/30 rounded-lg border justify-center items-center gap-2 inline-flex text-[#002752] text-base font-semibold font-['General Sans'] leading-snug">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const QuestionBot = () => {
  const today = new Date();
  const currentDay = isToday(today) ? "Today" : format(today, "EEEE");
  const [message, setMessage] = useState("");

  const title = "How can We help you ?";
  const para =
    "Let us know how we can help! Ask your question, and we'll guide you through resolving it. ";

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log("User Message", message);
    setMessage("");
  };
  return (
    <>
      <div className="absolute w-[355px] lg:w-[407px] bottom-56 right-9 flex flex-col  h-auto p-6 rounded-xl shadow border-2 border-black/10 backdrop-blur-[100px]  justify-center items-center gap-8 bg-white  ">
        <div className="flex flex-col">
          <div className="mb-5">
            <H2>{title}</H2>
            <P>{para}</P>
          </div>

          <div>
            <div className="flex flex-col gap-3">
              <P>{currentDay}</P>
              <p className="h-auto w-auto px-2.5 py-1.5 lg:px-3 lg:py-2 bg-[#002b5b] rounded-md lg:rounded-[10px] flex-col justify-center items-center gap-2 mt-5 text-[14px]">
                Hey there! My name is Webinar.gg help, your chat assistant.
              </p>
              <p className="h-auto w-auto px-2.5 py-1.5 lg:px-3 lg:py-2  bg-[#002b5b] rounded-[10px] flex-col justify-center items-center gap-2">
                I can help you with common questions about how to use
                webinar.gg, feature available, and get in touch with our support
                team.
              </p>
              <div className="flex flex-row gap-[12px]">
                <img
                  src={Home}
                  alt="Home"
                  className="size-8 lg:w-10 lg:h-10 px-[8px] py-[4px] bg-[#002b5b] rounded-md justify-center items-center gap-[11px]"
                />
                <p className="h-auto w-auto px-2.5 py-1.5 lg:px-3 lg:py-2  bg-[#002b5b] rounded-[10px] flex-col justify-center items-center gap-2">
                  How can I help you today ?
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-row p-2 lg:p-3 rounded-md border border-black/10 justify-between items-center mt-4">
            <input
              onChange={handleInputChange}
              value={message}
              placeholder="Send a message here"
              className="p-2 border border-none h-auto rounded-md"
            />
            <button
              type="submit"
              className=" px-2.5 py-1 bg-[#d9d9d9] rounded border justify-center items-center gap-2.5"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
