import React from "react";
import H4 from "./H4";

const UserManagement = () => {
  const blockedAttendees = [
    { name: "Prabhleen Kaur", email: "prabhleensondhi@gmail.com" },
    { name: "Prabhleen Kaur", email: "prabhleensondhi@gmail.com" },
    { name: "Prabhleen Kaur", email: "prabhleensondhi@gmail.com" },
    { name: "Prabhleen Kaur", email: "prabhleensondhi@gmail.com" },
  ];

  return (
    <div className="p-6 w-screen">
      <H4>User Management</H4>
      <h2 className="text-[#1c1b1f] text-xl font-semibold font-['General Sans'] lg:leading-[39px] mt-4 mb-2 overflow-x-hidden">
        Blocked Attendees
      </h2>

      <table className="w-full lg:w-[80vw] text-left ">
        <thead>
          <tr className="border-b  ">
            <th className="py-2   text-[#1c1b1f]/60 text-base font-semibold font-['General Sans'] leading-snug">
              Attendees Name
            </th>
            <th className="py-2  text-[#1c1b1f]/60 text-base font-semibold font-['General Sans'] leading-snug">
              Email Id
            </th>
          </tr>
        </thead>
        <tbody>
          {blockedAttendees.map((attendee, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? "bg-gray-50" : ""}`}
            >
              <td className="py-2 px-4 text-[#1c1b1f] text-base font-semibold font-['General Sans'] leading-snug">
                {attendee.name}
              </td>
              <td className="py-2 px-1  text-[#1c1b1f] text-base font-medium font-['General Sans'] leading-snug">
                {attendee.email}
              </td>
              <td className="py-2 px-4 text-right">
                <div className="flex gap-2 justify-end">
                  <button className="px-3 py-1 border hover:bg-[#002b5b] hover:text-white rounded">
                    Unblock
                  </button>
                  <button className="px-3 py-1 border hover:bg-red-600 hover:text-white rounded">
                    Report
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
