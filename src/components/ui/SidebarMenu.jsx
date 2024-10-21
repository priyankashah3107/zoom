import React from "react";

const SidebarMenu = ({ children }) => {
  return (
    <div className="w-full h-screen  flex-col justify-start items-start gap-3 inline-flex border-r p-2">
      {children}
    </div>
  );
};

export default SidebarMenu;
