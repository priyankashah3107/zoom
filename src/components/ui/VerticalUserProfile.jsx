// import React from "react";
// import P from "./P";
// import H2 from "./H2";

// const VerticalUserProfile = ({ name, email, number, location, img }) => {
//   return (
//     <>
//       <div className="w-[251px] h-[366px] flex flex-col   px-6 pt-14 pb-8 bg-white rounded-xl shadow border border-black/10  justify-center items-center gap-6 -mt-44 top-[108px] left-[45px] ">
//         <img
//           src={img}
//           alt="img"
//           className="w-[120px] h-[120px] rounded-xl border-2 border-black/10"
//         />
//         {/* <h1>{name}</h1> */}
//         <div className="flex flex-col ustify-start items-center gap-1">
//           <H2>{name}</H2>

//           <div className="flex flex-col justify-center items-center gap-px mb-3">
//             <P>{email}</P>
//             <P>{number}</P>
//           </div>

//           <P>{location}</P>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VerticalUserProfile;

import React from "react";
import P from "./P";
import H2 from "./H2";
const VerticalUserProfile = ({ name, email, number, location, img }) => {
  return (
    <div className="w-full max-w-[251px] lg:w-[251px] lg:h-[366px]  bg-white rounded-xl shadow border border-black/10 p-6 flex flex-col items-center gap-6 -mt-16 lg:-mt-12">
      <img
        src={img}
        alt="Profile"
        className="w-24 h-24 md:w-[120px] md:h-[120px] rounded-xl border-2 border-black/10 object-cover"
      />
      <div className="flex flex-col items-center gap-1 text-center">
        <H2>{name}</H2>
        <div className="flex flex-col items-center gap-px mb-3">
          <P>{email}</P>
          <P>{number}</P>
        </div>
        <P>{location}</P>
      </div>
    </div>
  );
};

export default VerticalUserProfile;
