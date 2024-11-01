import React from "react";
import H4 from "./H4";
import Credit_card from "../../assets/credit_card.svg";
import P from "./P";
import { Pen } from "lucide-react";
import { tr } from "date-fns/locale";
import Billing from "./Billing";
const BillingManagement = () => {
  return (
    <>
      <div className="flex flex-col">
        <Billing />
        <div className="flex flex-col justify-center items-center lg:justify-start ">
          <PaymentMethod />
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

export default BillingManagement;

const PaymentMethod = () => {
  return (
    <>
      <div className="w-[300px] h-[170px] p-4 mt-10 ml-10 md:w-[600px] lg:w-[702px] lg:h-[200px] lg:p-6 lg:pt-2  rounded-[20px] justify-between bg-white shadow-md flex flex-row items-center cursor-pointer ">
        <div className="flex flex-col gap-6 justify-center">
          <H4>Payment Method</H4>
          <div className="flex flex-row gap-3">
            <img src={Credit_card} alt="credit_card" />
            <p>Credit Card</p>
          </div>
        </div>

        <Pen className="text-gray-600 hover:text-black" />
      </div>
    </>
  );
};

const ContactInfo = () => {
  const contactDetails = {
    name: "Prabhleen",
    emailAddress: "prabhleen@gmail.com",
    address: "South City - II, Gurgaon, Haryana, 122001",
  };

  return (
    <div className="w-[350px] h-[300px] p-4 mt-10 ml-10 md:w-[600px] lg:w-[702px] md:h-[300px] lg:p-6 lg:pt-2  rounded-[20px] justify-between bg-white shadow-md flex flex-row items-center cursor-pointer ">
      <div className="flex flex-col gap-5 justify-center">
        <H4>Payment Method</H4>
        <div className="flex flex-col md:flex-row lg:gap-60">
          <p className="text-[#1c1b1f]/60 text-base font-medium font-['General Sans']">
            Name
          </p>
          <p>{contactDetails.name}</p>
        </div>
        <div className="flex flex-col md:flex-row lg:gap-44">
          <p className="text-[#1c1b1f]/60 text-base font-medium font-['General Sans']">
            Email Address
          </p>
          <h1>{contactDetails.emailAddress}</h1>
        </div>
        <div className="flex flex-col md:flex-row lg:gap-44">
          <p className="text-[#1c1b1f]/60 text-base font-medium font-['General Sans']">
            Address
          </p>
          <h1>{contactDetails.address}</h1>
        </div>
      </div>

      <Pen className="text-gray-600 hover:text-black" />
    </div>
  );
};
