// import React from "react";
// import Billing from "./Billing";
// import { formatCurrency } from "../../utils/formatCurrency";
// import Download from "../../assets/download.svg";
// import { parse, format } from "date-fns";
// const paymentHistory = [
//   {
//     invoiceNumber: "11221133224",
//     invoiceDate: "3 October, 2024",
//     dueDate: "3 November, 2024",
//     // amount: "₹ 2000",
//     amount: "2000",
//     status: "Paid",
//   },
//   {
//     invoiceNumber: "11221133224",
//     invoiceDate: "3 October, 2024",
//     dueDate: "3 November, 2024",
//     amount: "2000",
//     status: "Paid",
//   },
//   {
//     invoiceNumber: "11221133224",
//     invoiceDate: "3 October, 2024",
//     dueDate: "3 November, 2024",
//     amount: "2000",
//     status: "Paid",
//   },
//   {
//     invoiceNumber: "11221133224",
//     invoiceDate: "3 October, 2024",
//     dueDate: "3 November, 2024",
//     amount: "2000",
//     status: "Paid",
//   },
//   {
//     invoiceNumber: "11221133224",
//     invoiceDate: "3 October, 2024",
//     dueDate: "3 November, 2024",
//     amount: "2000",
//     status: "Paid",
//   },
//   {
//     invoiceNumber: "11221133224",
//     invoiceDate: "3 October, 2024",
//     dueDate: "3 November, 2024",
//     amount: "2000",
//     status: "Paid",
//   },
// ];

// const formatDate = (dateString) => {
//   const parseDate = parse(dateString, "d MMMM, yyyy", new Date());
//   return format(parseDate, "dd-MM-yyyy");
// };

// const PaymentHistory = () => {
//   return (
//     <>
//       <div>
//         <Billing />

//         <table className="ml-2">
//           <tr className="flex flex-row gap-[30px] md:gap-[92px] lg:gap-[135px] lg:mt-6 text-[#1c1b1f]/60 text-[10px] lg:text-base font-normal lg:font-semibold font-['General Sans'] leading-tight lg:leading-snug cursor-pointer  ">
//             <td>Invoice Number</td>
//             <td>Invoice Date</td>
//             <td>Due Date</td>
//             <td>Amount</td>
//             <td>Status</td>
//             {/* downloads icons */}
//           </tr>

//           <div>
//             {paymentHistory.map((val, idx) => (
//               <tr
//                 key={idx}
//                 className="flex flex-row gap-[30px] md:gap-[90px] lg:gap-[120px] lg:mt-6 text-[#1c1b1f]/60 text-[10px] lg:text-base font-normal lg:font-semibold font-['General Sans'] leading-tight lg:leading-snug p-2 lg:p-0 cursor-pointer "
//               >
//                 <th className="text-[#278fff] text-[8px] lg:text-base">
//                   {val.invoiceNumber}
//                 </th>
//                 <th className=" text-[#1c1b1f] text-[8px] lg:text-base font-medium ">
//                   {formatDate(val.invoiceDate)}
//                 </th>
//                 <th className=" text-[#1c1b1f] text-[8px] lg:text-base font-medium ">
//                   {formatDate(val.dueDate)}
//                 </th>
//                 <th className=" text-[#1c1b1f] text-[8px] lg:text-base font-medium ">
//                   {formatCurrency(val.amount)}
//                 </th>
//                 <th className=" text-[#04ad00] w-8 md:w-10 lg:w-16 p-1 bg-[#04ad00]/10 rounded-md text-center  items-center text-[8px] lg:text-base font-medium ">
//                   {val.status}
//                 </th>
//                 <th>
//                   <img
//                     src={Download}
//                     alt="downloads"
//                     className="cursor-pointer"
//                   />
//                 </th>
//               </tr>
//             ))}
//           </div>
//         </table>
//       </div>
//     </>
//   );
// };

// export default PaymentHistory;

import React from "react";
import Billing from "./Billing";
import { formatCurrency } from "../../utils/formatCurrency";
import Download from "../../assets/download.svg";
import { parse, format } from "date-fns";

const paymentHistory = [
  {
    invoiceNumber: "11221133224",
    invoiceDate: "3 October, 2024",
    dueDate: "3 November, 2024",
    amount: "2000",
    status: "Paid",
  },
  {
    invoiceNumber: "11221133224",
    invoiceDate: "3 October, 2024",
    dueDate: "3 November, 2024",
    amount: "2000",
    status: "Paid",
  },
  {
    invoiceNumber: "11221133224",
    invoiceDate: "3 October, 2024",
    dueDate: "3 November, 2024",
    amount: "2000",
    status: "Paid",
  },
  {
    invoiceNumber: "11221133224",
    invoiceDate: "3 October, 2024",
    dueDate: "3 November, 2024",
    amount: "2000",
    status: "Paid",
  },
  {
    invoiceNumber: "11221133224",
    invoiceDate: "3 October, 2024",
    dueDate: "3 November, 2024",
    amount: "2000",
    status: "Paid",
  },
];

const formatDate = (dateString) => {
  const parseDate = parse(dateString, "d MMMM, yyyy", new Date());
  return format(parseDate, "dd-MM-yyyy");
};

const PaymentHistory = () => {
  return (
    <div className="w-full">
      <Billing />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="text-left">
              <th className="p-4 text-[#1c1b1f]/60 text-xs lg:text-base font-semibold">
                Invoice Number
              </th>
              <th className="p-4 text-[#1c1b1f]/60 text-xs lg:text-base font-semibold">
                Invoice Date
              </th>
              <th className="p-4 text-[#1c1b1f]/60 text-xs lg:text-base font-semibold">
                Due Date
              </th>
              <th className="p-4 text-[#1c1b1f]/60 text-xs lg:text-base font-semibold">
                Amount
              </th>
              <th className="p-4 text-[#1c1b1f]/60 text-xs lg:text-base font-semibold">
                Status
              </th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-4 text-[#278fff] text-xs lg:text-base">
                  {payment.invoiceNumber}
                </td>
                <td className="p-4 text-[#1c1b1f] text-xs lg:text-base">
                  {formatDate(payment.invoiceDate)}
                </td>
                <td className="p-4 text-[#1c1b1f] text-xs lg:text-base">
                  {formatDate(payment.dueDate)}
                </td>
                <td className="p-4 text-[#1c1b1f] text-xs lg:text-base">
                  {formatCurrency(payment.amount)}
                </td>
                <td className="p-4">
                  <span className="inline-block px-3 py-1 text-xs lg:text-sm text-[#04ad00] bg-[#04ad00]/10 rounded-md">
                    {payment.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="hover:opacity-80">
                    <img
                      src={Download}
                      alt="Download invoice"
                      className="w-6 h-6"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
