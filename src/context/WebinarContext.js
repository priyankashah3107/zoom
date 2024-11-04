// // src/context/WebinarContext.js

// import React, { createContext, useContext } from "react";

// const WebinarContext = createContext();

// export const useWebinar = () => useContext(WebinarContext);

// export const WebinarProvider = ({ children }) => {
//   const future = [
//     // mock future webinar data
//     {
//       date: "10-19-2024",
//       time: "02:30 PM - 03:30 PM",
//       title: "My First Webinar",
//       webinarId: "111 1111 1111",
//     },
//     {
//       date: "10-19-2024",
//       time: "04:30 PM - 06:30 PM",
//       title: "2nd Webinar",
//       webinarId: "657 7788 7766",
//     },
//     {
//       date: "1-19-2024",
//       time: "02:30 PM - 03:30 PM",
//       title: "My First Webinar",
//       webinarId: "111 1111 1111",
//     },
//     {
//       date: "1-10-2024",
//       time: "04:30 PM - 06:30 PM",
//       title: "2nd Webinar",
//       webinarId: "657 7788 7766",
//     },
//     {
//       date: "10-10-2024",
//       time: "02:30 PM - 03:30 PM",
//       title: "My First Webinar",
//       webinarId: "111 1111 1111",
//     },
//     {
//       date: "12-02-2024",
//       time: "04:30 PM - 06:30 PM",
//       title: "2nd Webinar",
//       webinarId: "657 7788 7766",
//     },
//   ];

//   return (
//     <WebinarContext.Provider value={{ future }}>
//       {children}
//     </WebinarContext.Provider>
//   );
// };
