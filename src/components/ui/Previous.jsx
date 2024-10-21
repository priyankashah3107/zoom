import React from "react";
import { format, parse } from "date-fns";
import { Eye } from "lucide-react";
import { Download } from "lucide-react";
import Flag from "../../assets/flag.svg";
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

const Previous = () => {
  return (
    <div className="flex flex-col w-full">
      <table className="border-collapse border border-gray-200 w-full">
        <thead className="text-[#1c1b1f]/60 text-base font-semibold font-['General Sans'] leading-snug">
          <tr>
            <th className="border border-gray-200 p-2">Time</th>
            <th className="border border-gray-200 p-2">Webinar</th>
            <th className="border border-gray-200 p-2">Webinar ID</th>
            <th className="border border-gray-200 p-2">Recording</th>
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
                    className="border border-gray-200 bg-gray-100 p-2 text-left"
                  >
                    {/* {dayName} - {dayInfo.day} */}
                    {dayName}
                  </th>
                </tr>
                {dayInfo.webinars.map((webinar, webinarIndex) => (
                  <tr key={webinarIndex} className="border-b  ">
                    <td className="border border-gray-200 p-2 text-[#1c1b1f] hover:text-[#002b5b] text-base font-semibold font-['General Sans'] leading-snug">
                      {webinar.time}
                    </td>
                    <td className="border border-gray-200 p-2 text-center text-[#1c1b1f] text-base font-semibold font-['General Sans'] leading-snug hover:text-[#002b5b]">
                      {webinar.title}
                    </td>
                    <td className="border border-gray-200 p-2 text-[#1c1b1f]/60 text-base font-medium font-['General Sans'] leading-snug hover:text-[#002b5b]">
                      {webinar.webinarId}
                    </td>
                    <td className="border border-gray-200 p-2 flex flex-row gap-6">
                      <button className="">
                        <Eye className="w-5 h-5 text-[#d9d9d9] hover:text-[#002b5b]" />
                      </button>

                      <button>
                        <Download className="w-5 h-5 text-[#d9d9d9] hover:text-[#002b5b]" />
                      </button>
                    </td>

                    <td className="flex">
                      <button className="h-7 px-2.5 py-1 bg-[#ff6060] rounded-md border border-black/10 justify-start items-center gap-2.5 text-center text-white text-sm font-medium font-['General Sans'] leading-tight">
                        Delete
                      </button>

                      <img src={Flag} alt="Flag" />
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

export default Previous;
