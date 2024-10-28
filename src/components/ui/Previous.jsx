import React from "react";
import { format, parse } from "date-fns";
import { Eye, Download } from "lucide-react";
import H1 from "./H1";
import { SigninButton } from "./Input";
import { useState } from "react";

const webinars = [
  {
    date: "10-07-2024", // Monday October 7
    time: "02:30 PM - 03:30 PM",
    title: "My First Webinar",
    webinarId: "111 1111 1111",
  },
  {
    date: "10-07-2024",
    time: "04:30 PM - 06:30 PM",
    title: "2nd Webinar",
    webinarId: "657 7788 7766",
  },
  {
    date: "10-07-2024",
    time: "04:30 PM - 06:30 PM",
    title: "2nd Webinar",
    webinarId: "222 2211 3321",
  },
  {
    date: "10-07-2024",
    time: "04:30 PM - 06:30 PM",
    title: "2nd Webinar",
    webinarId: "654 6655 7765",
  },
  {
    date: "10-04-2024", // Friday October 4
    time: "02:30 PM - 03:30 PM",
    title: "My First Webinar",
    webinarId: "111 1111 1111",
  },
  {
    date: "10-04-2024",
    time: "02:30 PM - 03:30 PM",
    title: "My First Webinar",
    webinarId: "111 1111 1111",
  },
  {
    date: "10-04-2024",
    time: "02:30 PM - 03:30 PM",
    title: "My First Webinar",
    webinarId: "111 1111 1111",
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
  const [deleteform, setDeleteForm] = useState(false);

  const handleDeleteForm = () => {
    setDeleteForm(!deleteform);
  };
  return (
    <div className="w-screen h-full">
      {/* Table container with horizontal scroll for very small screens */}
      <div className="relative overflow-x-auto  sm:rounded-lg">
        <table className="w-full text-left">
          <thead className="text-xs md:text-sm lg:text-base">
            <tr>
              <th scope="col" className="px-3 py-2 md:px-4 md:py-3 w-1/6">
                Time
              </th>
              <th scope="col" className="px-3 py-2 md:px-4 md:py-3 w-1/6">
                Webinar
              </th>
              <th scope="col" className="px-3 py-2 md:px-4 md:py-3 w-1/6">
                Webinar ID
              </th>
              <th scope="col" className="px-3 py-2 md:px-4 md:py-3 w-1/6">
                Recordings
              </th>
              <th scope="col" className="px-3 py-2 md:px-4 md:py-3 w-1/6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-sm lg:text-base">
            {webinarsByDay.map((dayInfo, dayIndex) => {
              const parsedDate = parse(dayInfo.day, "MM-dd-yyyy", new Date());
              const dayName = format(parsedDate, "EEEE");
              const fullDate = format(parsedDate, "d MMMM yyyy");

              return (
                <React.Fragment key={dayIndex}>
                  <tr className="bg-gray-50">
                    <td
                      colSpan="5"
                      className="px-3 py-2 md:px-4 md:py-3 font-medium"
                    >
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <span>{dayName}</span>
                        <span>{fullDate}</span>
                      </div>
                    </td>
                  </tr>
                  {dayInfo.webinars.map((webinar, webinarIndex) => (
                    <tr
                      key={webinarIndex}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="px-3 py-2 md:px-4 md:py-3 font-medium whitespace-nowrap">
                        {webinar.time}
                      </td>
                      <td className="px-3 py-2 md:px-4 md:py-3 font-medium">
                        {webinar.title}
                      </td>
                      <td className="px-3 py-2 md:px-4 md:py-3 text-gray-500">
                        {webinar.webinarId}
                      </td>
                      <td className="px-3 py-2 md:px-4 md:py-3">
                        <div className="flex gap-2">
                          <button className="text-gray-400 hover:text-gray-600">
                            <Eye className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Download className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        </div>
                      </td>
                      <td className="px-3 py-2 md:px-4 md:py-3">
                        <div className="flex items-center gap-2">
                          {deleteform ? (
                            <DeleteForm />
                          ) : (
                            <button
                              onClick={handleDeleteForm}
                              className="px-2 py-1 md:px-3 md:py-1.5 bg-red-400 hover:bg-red-500 text-white rounded text-xs md:text-sm transition-colors whitespace-nowrap"
                            >
                              Delete
                            </button>
                          )}
                          <button className="p-1 md:p-1.5 border border-gray-200 rounded hover:bg-gray-50">
                            <svg
                              className="w-4 h-4 md:w-5 md:h-5"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 8.5V13.5H13V8.5M8 2.5V9.5M8 9.5L5 6.5M8 9.5L11 6.5"
                                stroke="#666666"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Previous;

const DeleteForm = () => {
  
  return (
    <>
      <div className="flex flex-col absolute top-24 lg:top-40 left-2 lg:left-60 lg:w-[413px] h-auto p-6 bg-white/60 rounded-xl shadow border-2 border-black/10 backdrop-blur-[100px]justify-start items-start gap-[60px] ">
        <form>
          <div className="flex flex-col gap-2 lg:gap-7">
            <h1 className="text-center text-[#002b5b] text-2xl font-semibold font-['General Sans']">
              Delete "My Webinar"
            </h1>
            <div className="flex flex-col text-center">
              <p className="text-center text-[#002b5b]/60 text-base font-medium ">
                You can recover this webinar within 7 days from
              </p>
              <a href="/deletewebinar">
                <u className="text-[#3e69d6] text-base font-medium font-['General Sans'] underline text-center">
                  Deleted Webinars
                </u>
              </a>
            </div>
          </div>

          <div>
            <SigninButton
              variant="primary"
              size="lg"
              className="w-full bg-[#CC2020] hover:bg-[#CC2020]  text-white  transition-colors mt-6 sm:mt-8"
            >
              Delete Webinar
            </SigninButton>
            <SigninButton
              variant="primary"
              size="lg"
              className="w-full bg-[#D4D4D4] hover:bg-[#D4D4D4] text-[#002B5B]  transition-colors mt-6 sm:mt-8"
            >
              Cancel
            </SigninButton>
          </div>
        </form>
      </div>
    </>
  );
};
