// import React, { useState } from "react";
// import { Lock, Camera, Mic, X } from "lucide-react";

// const MicCamera = () => {
//   const [cameraActive, setCameraActive] = useState(false);
//   const [micActive, setMicActive] = useState(false);
//   const [stream, setStream] = useState(null);
//   const [error, setError] = useState("");
//   const [showPermissionModal, setShowPermissionModal] = useState(true);

//   const requestPermissions = async () => {
//     try {
//       const mediaStream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: false,
//       });
//       setStream(mediaStream);
//       setCameraActive(true);
//       setMicActive(true);
//       setError("");
//       setShowPermissionModal(false);

//       // Set the stream to the video element
//       const videoElement = document.getElementById("camera-feed");
//       if (videoElement) {
//         videoElement.srcObject = mediaStream;
//       }
//     } catch (err) {
//       setError("Permission denied. Please check your browser settings.");
//       console.error("Error accessing devices:", err);
//     }
//   };

//   const handleCameraToggle = () => {
//     if (stream) {
//       const videoTracks = stream.getVideoTracks();
//       videoTracks.forEach((track) => {
//         track.enabled = !cameraActive;
//       });
//       setCameraActive(!cameraActive);
//     }
//   };

//   const handleMicToggle = () => {
//     if (stream) {
//       const audioTracks = stream.getAudioTracks();
//       audioTracks.forEach((track) => {
//         track.enabled = !micActive;
//       });
//       setMicActive(!micActive);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#002b5b] text-white">
//       <div className="flex flex-col items-center justify-center min-h-screen gap-8">
//         <div className="flex items-center h-10 px-4 py-2 bg-black/20 rounded-[40px] gap-1.5 w-[300px] justify-center">
//           <Lock className="w-4 h-4" />
//           <p className="text-center text-white text-sm font-medium">
//             Webinar.gg/MyWebinar
//           </p>
//         </div>

//         <div className="w-[500px] bg-white rounded-md">
//           <div className="relative h-[274px] bg-[#646464] rounded-t-md">
//             <video
//               id="camera-feed"
//               autoPlay
//               playsInline
//               className={`w-full h-full object-cover rounded-t-md ${
//                 cameraActive ? "block" : "hidden"
//               }`}
//             />

//             <div className="absolute bottom-5 lg:left-52 flex gap-4">
// <button
//   onClick={handleCameraToggle}
//   className={`p-2 rounded-full transition-colors ${
//     !cameraActive ? "bg-gray-700" : "bg-white"
//   }`}
// >
//   <div className="relative">
//     <Camera
//       className={!cameraActive ? "text-white" : "text-black"}
//     />
//     {!cameraActive && (
//       <X className="absolute -top-1 -right-1 w-3 h-3 text-red-500" />
//     )}
//   </div>
// </button>
// <button
//   onClick={handleMicToggle}
//   className={`p-2 rounded-full transition-colors ${
//     !micActive ? "bg-gray-700" : "bg-white"
//   }`}
// >
//   <div className="relative">
//     <Mic className={!micActive ? "text-white" : "text-black"} />
//     {!micActive && (
//       <X className="absolute -top-1 -right-1 w-3 h-3 text-red-500" />
//     )}
//   </div>
// </button>
//             </div>
//           </div>

//           <div className="p-6 text-center">
//             {/* <h3 className="text-xl font-semibold text-gray-800">
//               Join the Webinar
//             </h3>
//             {error && <p className="mt-2 text-sm text-red-500">{error}</p>} */}

//             {showPermissionModal && (
//               <div className=" flex items-center justify-center">
//                 <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
//                   <h2 className="text-xl font-semibold text-navy-800 text-center mb-2">
//                     Webinar.gg wants to use your camera and microphone
//                   </h2>
//                   <p className="text-gray-600 text-center mb-6">
//                     In order for others to see and hear you, your browser will
//                     request camera and microphone access
//                   </p>
//                   <button
//                     onClick={requestPermissions}
//                     className="w-full bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-black font-medium py-3 px-4 rounded-lg transition-colors"
//                   >
//                     Request Permission
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MicCamera;

import React, { useState, useEffect, useRef } from "react";
import { Lock, Camera, Mic, X, Settings } from "lucide-react";
import LogoSection from "./LogoSection";

const MicCamera = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState("");
  const [showPermissionModal, setShowPermissionModal] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // When stream changes, update video source
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const requestPermissions = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false, // yaha true hoga abhi to mere device mei microphone issue h
      });
      setStream(mediaStream);
      setCameraActive(true);
      setMicActive(true);
      setError("");
      setShowPermissionModal(false);
      setIsWaiting(true);
    } catch (err) {
      setError("Permission denied. Please check your browser settings.");
      console.error("Error accessing devices:", err);
    }
  };

  const handleCameraToggle = () => {
    if (stream) {
      const videoTracks = stream.getVideoTracks();
      videoTracks.forEach((track) => {
        track.enabled = !cameraActive;
      });
      setCameraActive(!cameraActive);
    }
  };

  const handleMicToggle = () => {
    if (stream) {
      const audioTracks = stream.getAudioTracks();
      audioTracks.forEach((track) => {
        track.enabled = !micActive;
      });
      setMicActive(!micActive);
    }
  };

  const handleCancel = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setStream(null);
    setCameraActive(false);
    setMicActive(false);
    setShowPermissionModal(true);
    setIsWaiting(false);
  };

  return (
    <div className="w-full min-h-screen  bg-[#002b5b]">
      <LogoSection />
      <div className="flex flex-col items-center justify-center min-h-screen gap-2">
        {/* URL Bar */}
        <div className="flex items-center h-10 px-4 py-2 bg-black/20 rounded-[40px] gap-1.5 w-[300px] justify-center text-white">
          <Lock className="w-4 h-4 text-center" />
          <p className="text-center text-white text-sm font-medium">
            Webinar.gg/MyWebinar
          </p>
        </div>
        <div className="w-[600px] bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Main Content */}
          <div className="relative bg-gray-800 h-[320px]">
            {!showPermissionModal && (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`w-full h-full object-cover ${
                  !cameraActive ? "hidden" : ""
                }`}
              />
            )}

            {/* Control Buttons */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4">
              <button className="p-2 rounded-lg bg-gray-700/80">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3c.53 0 1.04.2 1.41.59.38.38.59.89.59 1.41 0 .53-.2 1.04-.59 1.41-.38.38-.89.59-1.41.59-.53 0-1.04-.2-1.41-.59C10.2 6.04 10 5.53 10 5c0-.53.2-1.04.59-1.41C10.96 3.2 11.47 3 12 3z" />
                  <path d="M12 11c.53 0 1.04.2 1.41.59.38.38.59.89.59 1.41 0 .53-.2 1.04-.59 1.41-.38.38-.89.59-1.41.59-.53 0-1.04-.2-1.41-.59-.38-.38-.59-.89-.59-1.41 0-.53.2-1.04.59-1.41.38-.38.89-.59 1.41-.59z" />
                  <path d="M12 19c.53 0 1.04.2 1.41.59.38.38.59.89.59 1.41 0 .53-.2 1.04-.59 1.41-.38.38-.89.59-1.41.59-.53 0-1.04-.2-1.41-.59-.38-.38-.59-.89-.59-1.41 0-.53.2-1.04.59-1.41.38-.38.89-.59 1.41-.59z" />
                </svg>
              </button>

              <div className="flex gap-4">
                {/* <button
                  onClick={handleCameraToggle}
                  className={`p-3 rounded-lg transition-colors ${
                    cameraActive ? "bg-gray-700/80" : "bg-red-500/80"
                  }`}
                >
                  <Camera className="w-6 h-6 text-white" />
                </button> */}
                {/* <button
                  onClick={handleMicToggle}
                  className={`p-3 rounded-lg transition-colors ${
                    micActive ? "bg-gray-700/80" : "bg-red-500/80"
                  }`}
                >
                  <Mic className="w-6 h-6 text-white" />
                </button> */}

                <button
                  onClick={handleCameraToggle}
                  className={`p-2 rounded-full transition-colors ${
                    !cameraActive ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className="relative">
                    <Camera
                      className={!cameraActive ? "text-white" : "text-black"}
                    />
                    {!cameraActive && (
                      <X className="absolute -top-1 -right-1 w-3 h-3 text-red-500" />
                    )}
                  </div>
                </button>

                <button
                  onClick={handleMicToggle}
                  className={`p-2 rounded-full transition-colors ${
                    !micActive ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className="relative">
                    <Mic className={!micActive ? "text-white" : "text-black"} />
                    {!micActive && (
                      <X className="absolute -top-1 -right-1 w-3 h-3 text-red-500" />
                    )}
                  </div>
                </button>
              </div>

              <button className="p-2 rounded-lg bg-gray-700/80">
                <Settings className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Waiting Room Message */}
          {isWaiting && (
            <div className="p-6 text-center">
              <h3 className="text-xl text-gray-700 mb-4">
                Waiting for the host to let you in...
              </h3>
              <button
                onClick={handleCancel}
                className="px-6 py-2 text-red-500 font-medium rounded-lg hover:bg-red-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}

          {/* Permission Modal */}
          {showPermissionModal && (
            <div className="p-6 text-center">
              <div className="bg-white rounded-lg max-w-md w-full mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Webinar.gg wants to use your camera and microphone
                </h2>
                <p className="text-gray-600 mb-6">
                  In order for others to see and hear you, your browser will
                  request camera and microphone access
                </p>
                <button
                  onClick={requestPermissions}
                  className="w-full bg-teal-400 hover:bg-teal-500 text-black font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Request Permission
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MicCamera;
