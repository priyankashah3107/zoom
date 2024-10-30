import React from "react";
import Upcoming from "./Upcoming";
import Live from "./Live";
import Previous from "./Previous";
import H2 from "./H2";
import { Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Webinars = () => {
  return (
    <>
      <div className="flex flex-col  ml-3 lg:ml-5 p-2 ">
        <h1 className="text-[#1c1b1f]  lg:text-[28px] font-semibold font-['General Sans'] leading-[39.20px] mt-[20px] lg:mt-[44px]">
          Webinars
        </h1>

        <div className="flex flex-row gap-[16px] mt-[24px] mb-[10px]">
          <NavLink
            to="/webinars/upcoming"
            className={({ isActive }) =>
              `text-[#1c1b1f]/60 text-xl font-medium font-['General Sans'] 
               hover:text-[#1c1b1f] hover:underline ${
                 isActive ? "text-[#1c1b1f]" : "text-[#1c1b1f]/60"
               }
               leading-7`
            }
          >
            Upcoming
          </NavLink>
          <NavLink
            to="/webinars/live"
            className={({ isActive }) =>
              `text-[#1c1b1f]/60 text-xl font-medium font-['General Sans'] hover:text-[#1c1b1f] hover:underline ${
                isActive ? "text-[#1c1b1f]" : "text-[#1c1b1f]/60"
              }
              leading-7 
              `
            }
          >
            Live
          </NavLink>
          <NavLink
            to="/webinars/previous"
            className={({ isActive }) =>
              `text-[#1c1b1f]/60 text-xl font-medium font-['General Sans'] hover:text-[#1c1b1f] hover:underline ${
                isActive ? "text-[#1c1b1f]" : "text-[#1c1b1f]/60"
              }  leading-7 `
            }
          >
            Previous
          </NavLink>
        </div>

        <div className="h-0 w-screen border border-b mb-4"></div>
      </div>
    </>
  );
};

export default Webinars;
