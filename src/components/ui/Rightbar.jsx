// import React from "react";
// import VerticalUserProfile from "./VerticalUserProfile";
// import User from "../../assets/user.png";
// import Background from "../../assets/background.png";
// import { TimeTable } from "./TimeTable";
// import Webinar from "./Webinar";
// import P from "./P";
// import H1 from "./H1";
// const Rightbar = () => {
//   return (
//     <>
//       <div className="w-full h-screen relative">
//         <img src={Background} alt="background" className="w-screen " />

//         <div className="flex flex-col md:flex-row gap-x-8 items-center">
//           <VerticalUserProfile
//             img={User}
//             name={"Prabhleen Kaur"}
//             email={"prabhleen@gmail.com"}
//             number={"989998989898"}
//             location={"Delhi, India"}
//           />

//           <div>
//             <div className="h-[89px] flex-col justify-start items-start mt-[40px]">
//               <P>Monday 26, September</P>
//               <H1 name="Prabhleen! " />
//             </div>
//             <TimeTable />
//           </div>

//           <Webinar />
//         </div>

//         {/* <VerticalUserProfile
//           img={User}
//           name={"Prabhleen Kaur"}
//           email={"prabhleen@gmail.com"}
//           number={"989998989898"}
//           location={"Delhi, India"}
//         />

//         <TimeTable /> */}
//       </div>
//     </>
//   );
// };

// export default Rightbar;

import React from "react";
import VerticalUserProfile from "./VerticalUserProfile";
import User from "../../assets/user.png";
import Background from "../../assets/background.png";
import { TimeTable } from "./TimeTable";
import Webinar from "./Webinar";
import P from "./P";
import H1 from "./H1";
const Rightbar = () => {
  return (
    <div className="w-full min-h-screen relative bg-gray-50 overflow-x-hidden">
      <img
        src={Background}
        alt="background"
        className="w-full h-48 md:h-64 lg:h-auto object-cover"
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative">
          {/* Profile Section */}
          <div className="w-full lg:w-auto flex justify-center">
            <VerticalUserProfile
              img={User}
              name="Prabhleen Kaur"
              email="prabhleen@gmail.com"
              number="989998989898"
              location="Delhi, India"
            />
          </div>

          {/* Main Content Section */}
          <div className="w-full lg:flex-1 text-center lg:text-start  ">
            <div className="mt-[10px] lg:mt-[40px] mb-6 ">
              <P>Monday 26, September</P>
              <H1 name="Prabhleen! " />
            </div>
            <TimeTable />
          </div>

          {/* Webinar Section */}
          <div className="w-full lg:w-auto">
            <Webinar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
