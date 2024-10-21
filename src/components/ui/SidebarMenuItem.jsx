import React from "react";

const SidebarMenuItem = ({ title, icon }) => {
  return (
    <>
      <div className=" w-full h-[44px] p-[10px] pl-[12px] hover:bg-[#002b5b]/10   rounded-md justify-between items-center inline-flex">
        <span className="text-[#1c1b1f]/60 hover:text-[#002b5b] text-base font-medium font-['General Sans'] ">
          {title}
        </span>
        {icon && (
          <img
            src={icon}
            alt={title}
            width={24}
            height={24}
            className=""
          />
        )}
      </div>
    </>
  );
};

export default SidebarMenuItem;