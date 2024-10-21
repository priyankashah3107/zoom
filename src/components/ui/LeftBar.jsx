import React from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarMenuItem from "./SidebarMenuItem";
import Billing from "../../assets/billing.png";
import HomeIcon from "../../assets/ho.png";
import Setting from "../../assets/settings.png";
import Switch from "../../assets/switch.png";
import groups from "../../assets/groups.png";
import LogoSection from "./LogoSection";

const LeftBar = () => {
  return (
    <>
      <div className="flex flex-col w-1/4 p-2">
        <LogoSection />
        <SidebarMenu>
          <SidebarMenuItem title="Home" icon={HomeIcon} />
          <SidebarMenuItem title="Webinars" icon={groups} />
          <SidebarMenuItem title="Planning & Billing" icon={Billing} />
          <SidebarMenuItem title="User Management" icon={Switch} />
          <SidebarMenuItem title="Settings" icon={Setting} />
        </SidebarMenu>
      </div>
    </>
  );
};

export default LeftBar;
