import React from "react";
import Button, {
  ParticipantsButton,
  RecordingButton,
  VideoWebinarButton,
  WebinarButton,
  WebinarVideoLeftIconsMore,
  WebinarVideoLeftIconsProfile,
  WebinarVideoLeftIconsSetting,
} from "./Button";

// import { Lock } from "lucide-react";
import Lock from "../../assets/lock.svg";
import People from "../../assets/group.svg";
import RecButton from "../../assets/rec.svg";
import Setting from "../../assets/setting.svg";
import MoreVert from "../../assets/more_vert.svg";
import User from "../../assets/User.png";

const VideoNavbar = () => {
  return (
    <>
      <div className="w-full h-[80px] items-center flex flex-row justify-between p-[29px] text-white text-sm font-medium font-['General Sans'] mb-8">
        <div className="flex flex-row items-center gap-5">
          <Button />
          <VideoWebinarButton lock={Lock} text={"webinar.gg/MyWebinar"} />
          <ParticipantsButton num={"204"} icon={People} />
          <RecordingButton
            rec={RecButton}
            text={"Webinar Recording"}
            time={"( 01:34 )"}
          />
        </div>
        <div className="flex flex-row gap-4">
          <WebinarVideoLeftIconsSetting icon={Setting} />
          <WebinarVideoLeftIconsMore icon={MoreVert} />
          <WebinarVideoLeftIconsProfile icon={User} />
        </div>
      </div>
    </>
  );
};

export default VideoNavbar;

// const VideoNavbar = () => {
//   const [showWebinarDetails, setShowWebinarDetails] = useState(false);

//   return (
//     <>
//       <div className="w-full h-[80px] items-center flex flex-row justify-between p-[29px] text-white text-sm font-medium font-['General Sans'] mb-8">
//         <div className="flex flex-row items-center gap-5">
//           <Button />
//           <VideoWebinarButton lock={Lock} text={"webinar.gg/MyWebinar"} />
//           <ParticipantsButton num={"204"} icon={People} />
//           <RecordingButton
//             rec={RecButton}
//             text={"Webinar Recording"}
//             time={"( 01:34 )"}
//           />
//         </div>
//         <div className="flex flex-row gap-4">
//           <WebinarVideoLeftIconsSetting icon={Setting} />
//           <WebinarVideoLeftIconsMore
//             icon={MoreVert}
//             onWebinarDetails={setShowWebinarDetails}
//           />
//           <WebinarVideoLeftIconsProfile icon={User} />
//         </div>
//       </div>
//       {showWebinarDetails && <WebinarDetails />}
//     </>
//   );
// };

// export default VideoNavbar;
