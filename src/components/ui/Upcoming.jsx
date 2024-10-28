import React from "react";
import { format, parse } from "date-fns";

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
  {
    date: "1-19-2024",
    time: "02:30 PM - 03:30 PM",
    title: "My First Webinar",
    webinarId: "111 1111 1111",
  },
  {
    date: "1-10-2024",
    time: "04:30 PM - 06:30 PM",
    title: "2nd Webinar",
    webinarId: "657 7788 7766",
  },
  {
    date: "10-10-2024",
    time: "02:30 PM - 03:30 PM",
    title: "My First Webinar",
    webinarId: "111 1111 1111",
  },
  {
    date: "12-02-2024",
    time: "04:30 PM - 06:30 PM",
    title: "2nd Webinar",
    webinarId: "657 7788 7766",
  },
];

const webinarsByDay = webinars.reduce((acc, webinar) => {
  let dayGroup = acc.find((group) => group.day === webinar.date);

  if (dayGroup) {
    dayGroup.webinars.push(webinar);
  } else {
    acc.push({
      day: webinar.date,
      webinars: [webinar],
    });
  }
  return acc;
}, []);

const Upcoming = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <table className="border-collapse border border-gray-200 w-full">
        <thead className="text-[#1c1b1f]/60 text-base font-semibold font-['General Sans'] leading-snug">
          <tr className="text-sm lg:text-lg">
            <th className="border border-gray-200 p-2 ">Time</th>
            <th className="border border-gray-200 p-2">Webinar</th>
            <th className="border border-gray-200 p-2">Webinar ID</th>
          </tr>
        </thead>
        <tbody>
          {webinarsByDay.map((dayInfo, dayIndex) => {
            const parsedDate = parse(dayInfo.day, "MM-dd-yyyy", new Date());
            const dayName = format(parsedDate, "EEEE");

            return (
              <React.Fragment key={dayIndex}>
                <tr>
                  <th
                    colSpan="5"
                    className="border border-gray-200 bg-gray-100 p-2 text-center lg:text-start"
                  >
                    {dayName} - {dayInfo.day}
                    {/* {dayName} */}
                  </th>
                </tr>
                {dayInfo.webinars.map((webinar, webinarIndex) => (
                  <tr key={webinarIndex} className="border-b">
                    <td className="border border-gray-200 p-2 text-[14px] lg:text-[18px]">
                      {webinar.time}
                    </td>
                    <td className="border border-gray-200 p-2 text-[14px] lg:text-[18px]">
                      {webinar.title}
                    </td>
                    <td className="border border-gray-200 p-2 text-[14px] lg:text-[18px]">
                      {webinar.webinarId}
                    </td>
                    <td className="border border-gray-200 p-2 flex gap-2">
                      <button className="text-red-600 border border-red-600 px-2 lg:px-3 lg:py-1 rounded hover:bg-red-600 hover:text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Upcoming;
