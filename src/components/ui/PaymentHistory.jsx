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
