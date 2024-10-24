import React from "react";
import V1 from "../../assets/videos/v1.mp4";
import V2 from "../../assets/videos/v2.mp4";
import V3 from "../../assets/videos/v3.mp4";
import V4 from "../../assets/videos/v4.mp4";
import V5 from "../../assets/videos/v5.mp4";
import V6 from "../../assets/videos/v6.mp4";
import V7 from "../../assets/videos/v7.mp4";
import V8 from "../../assets/videos/v8.mp4";
import V9 from "../../assets/videos/v9.mp4";
import LogoSection from "./LogoSection";
import VideoNavbar from "./VideoNavbar";
import Share from "../../assets/share.svg";
import Pin from "../../assets/pin.svg";
import VideoFooter from "./VideoFooter";

const profiles = [
  { id: 1, initials: "PK", videoUrl: V1, featured: true },
  { id: 2, initials: "JD", videoUrl: V2 },
  { id: 3, initials: "AK", videoUrl: V3 },
  { id: 4, initials: "MS", videoUrl: V4 },
  { id: 5, initials: "RK", videoUrl: V5 },
  { id: 6, initials: "TJ", videoUrl: V6 },
  { id: 7, initials: "SL", videoUrl: V7 },
  { id: 8, initials: "MK", videoUrl: V8 },
  { id: 9, initials: "MK", videoUrl: V9 },
];

const getRandomProfiles = (arr, count) => {
  const shuffled = arr.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const ProfileGrid = () => {
  const randomProfiles = getRandomProfiles(profiles.slice(1), 6);

  return (
    <div className="min-h-screen bg-[#002b5b]  w-full">
      {/* <LogoSection /> */}
      <VideoNavbar />
      <div className="max-w-7xl mx-auto">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-2/3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <video
                  src={V1}
                  alt="Featured profile"
                  className="w-full h-full object-cover"
                  controls
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-sm font-medium">
                  Prabhleen Kaur (You)
                </div>

                <div className="absolute top-2 right-5 flex flex-row gap-2">
                  <button className="w-[38px] h-[38px] p-[9px] bg-black/20 rounded-md justify-start items-center gap-[7px]  ">
                    <img
                      src={Share}
                      alt="Share"
                      className="w-[19px] h-[19px]"
                    />
                  </button>
                  <button className="w-[38px] h-[38px] p-[9px] bg-black/20 rounded-md justify-start items-center gap-[7px] ">
                    <img
                      src={Pin}
                      alt="PinProfile"
                      className="w-[19px] h-[19px]"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="grid grid-cols-2 gap-2">
                {randomProfiles.map((profile) => (
                  <div
                    key={profile.id}
                    className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <video
                      src={profile.videoUrl}
                      alt={`Profile ${profile.initials}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      controls
                      autoPlay
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                      <div className="absolute top-2 right-2 bg-white/90 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium">
                        {profile.initials}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoFooter />
    </div>
  );
};

export default ProfileGrid;
