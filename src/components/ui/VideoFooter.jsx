// import React from "react";
// import Question_mark from "../../assets/question_mark.svg";
// import Brightness_alret from "../../assets/brightness_alert.svg";
// import offVideoCam from "../../assets/videocam_off.svg";
// import Mic_off from "../../assets/mic_off.svg";

// import { Camera } from "lucide-react";
// import { Mic } from "lucide-react";
// import { Hand } from "lucide-react";
// import { MessageCircle } from "lucide-react";
// import { DoorClosed, X } from "lucide-react";
// import Chat from "../../assets/chat.svg";
// import { Cross } from "lucide-react";
// import { useState } from "react";
// import { CameraOff } from "lucide-react";

// const VideoFooter = () => {
//   const [cameraActive, setCameraActive] = useState(false);
//   const [micActive, setMicActive] = useState(false);

//   return (
//     <div className="w-full h-[80px] flex items-center justify-between p-[29px] text-white text-sm font-medium font-['General Sans'] mb-8">
//       <div className="space-x-4">
//         <button className="w-[38px] h-[38px] p-[9px] bg-[#f4f4f4] rounded-[19px] justify-start items-center gap-[16px]">
//           <img
//             src={Question_mark}
//             alt="Question Mark"
//             className="w-[18px] h-[18px]"
//           />
//         </button>
//         <button className="w-[38px] h-[38px] p-[9px] bg-[#f4f4f4] rounded-[19px] justify-start items-center gap-[16px]">
//           <img
//             src={Brightness_alret}
//             alt="Brightness"
//             className="w-[18px] h-[18px]"
//           />
//         </button>
//       </div>

//       <div className="flex-grow flex items-center justify-center">
//         <div className="flex flex-row items-center justify-center space-x-4">
//           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
//             {/* <Camera className="w-[18px] h-[18px] text-white" /> */}
//             <div>
//               <Camera
//                 className={!cameraActive ? "text-white" : "text-red-700"}
//               />
//               {!cameraActive && (
//                 <img src={CameraOff} className="text-red-700" />
//               )}
//             </div>
//           </button>

//           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
//             <Mic className="w-[18px] h-[18px] text-white" />
//           </button>
//           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
//             <Hand className="w-[18px] h-[18px] text-white" />
//           </button>
//           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
//             <img
//               src={Chat}
//               alt="chat"
//               className="w-[18px] h-[18px] text-red-700"
//             />
//           </button>
//           <button className="w-12 h-12 p-4 bg-white/10 rounded-lg justify-center items-center gap-2 hover:bg-red-700">
//             <DoorClosed className="w-[18px] h-[18px] text-red-700" />
//           </button>
//           <Cross />
//           {/* <button>4</button>
//           <button>5</button>
//           <button>6</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoFooter;

import React, { useState } from "react";
import {
  Camera,
  Mic,
  Hand,
  MessageCircle,
  DoorClosed,
  X,
  CameraOff,
  MicOff,
} from "lucide-react";

const VideoFooter = () => {
  const [cameraActive, setCameraActive] = useState(true);
  const [micActive, setMicActive] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const toggleCamera = () => setCameraActive(!cameraActive);
  const toggleMic = () => setMicActive(!micActive);
  const toggleHand = () => setHandRaised(!handRaised);
  const toggleChat = () => setChatOpen(!chatOpen);

  return (
    <div className="  w-full h-[80px] flex items-center justify-between p-[29px] text-white text-sm font-medium font-['General Sans'] mb-8 ">
      <div className="flex flex-row items-center  ">
        <div className="flex space-x-4 ">
          <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
            <span className="text-white text-lg">?</span>
          </button>
          <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
            <span className="text-white text-lg">!</span>
          </button>
        </div>

        <div className="flex-grow flex items-center justify-center relative left-[50%] lg:left-[110%]">
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
                <div className="relative">
                  <CameraOff className="w-5 h-5 text-white" />
                </div>
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
                <div className="relative">
                  <MicOff className="w-5 h-5 text-white" />
                </div>
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
                chatOpen
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </button>

            <button className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center">
              <DoorClosed className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
