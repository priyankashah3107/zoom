import React from "react";
import Redvc from "../../assets/redvc.svg";
import P from "../ui/P";
const webinars = [
  {
    date: "10-19-2024",
    time: "02:30 PM - 03:30 PM",
    title: "My First Webinar",
    webinarId: "111 1111 1111",
  },
  {
    date: "10-19-2024",
    time: "04:30 PM - 06:30 PM",
    title: "2nd Webinar",
    webinarId: "657 7788 7766",
  },
];
const live = true;

const Live = () => {
  return (
    <div className="w-full  mx-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2">Time</th>
            <th className="py-2">Webinar</th>
            <th className="py-2">Webinar ID</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          {webinars.map((webinar, index) => (
            <tr key={index} className="border-b">
              <td className="py-3">{webinar.time}</td>
              <td className="py-3 flex items-center flex-row gap-2">
                {webinar.title}
                {live && index === 0 && <img src={Redvc} alt="img" />}
              </td>
              <td className="py-3">{webinar.webinarId}</td>
              <td className="py-3 flex gap-2">
                <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white">
                  Join
                </button>
                <button className="text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Live;
