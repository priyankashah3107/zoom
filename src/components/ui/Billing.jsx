import React from "react";
import H4 from "./H4";
import { NavLink } from "react-router-dom";

const Billing = () => {
  return (
    <>
      <div className="flex flex-col  ml-1 lg:ml-5 p-1 lg:p-2">
        <H4>Billing</H4>

        <div className="flex flex-row gap-[10px] md:gap-[40px] lg:gap-[30px] mt-[24px] mb-[10px]">
          <NavLink
            to="/billing/management"
            className={({ isActive }) =>
              `text-[#1c1b1f]/60 text-sm lg:text-xl font-medium font-['General Sans'] 
               hover:text-[#1c1b1f] hover:underline ${
                 isActive ? "text-[#1c1b1f]" : "text-[#1c1b1f]/60"
               }
               leading-7`
            }
          >
            Billing Management
          </NavLink>
          <NavLink
            to="/billing/history"
            className={({ isActive }) =>
              `text-[#1c1b1f]/60 text-sm lg:text-xl font-medium font-['General Sans'] hover:text-[#1c1b1f] hover:underline ${
                isActive ? "text-[#1c1b1f]" : "text-[#1c1b1f]/60"
              }
              leading-7 
              `
            }
          >
            Payment History
          </NavLink>
          <NavLink
            to="/plan/management"
            className={({ isActive }) =>
              `text-[#1c1b1f]/60 text-sm lg:text-xl font-medium font-['General Sans'] hover:text-[#1c1b1f] hover:underline ${
                isActive ? "text-[#1c1b1f]" : "text-[#1c1b1f]/60"
              }  leading-7 `
            }
          >
            Plan Management
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Billing;
