import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarMenuItem from "./SidebarMenuItem";
import Billing from "../../assets/billing.png";
import HomeIcon from "../../assets/ho.png";
import Setting from "../../assets/settings.png";
import Switch from "../../assets/switch.png";
import groups from "../../assets/groups.png";
import LogoSection from "./LogoSection";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
// const LeftBar = () => {
//   return (
//     <>
//       <div className="flex flex-col w-1/4 p-2">
//         <LogoSection />
//         <SidebarMenu>
//           <SidebarMenuItem title="Home" icon={HomeIcon} />
//           <SidebarMenuItem title="Webinars" icon={groups} />
//           <SidebarMenuItem title="Planning & Billing" icon={Billing} />
//           <SidebarMenuItem title="User Management" icon={Switch} />
//           <SidebarMenuItem title="Settings" icon={Setting} />
//         </SidebarMenu>
//       </div>
//     </>
//   );
// };

// export default LeftBar;

const LeftBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button - Only visible on mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-4 right-4 z-50 p-2 rounded-lg bg-white shadow-lg border border-gray-200 lg:hidden"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-40 w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:transform-none lg:w-1/4 lg:min-h-screen ${
          isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full p-2">
          <LogoSection />
          <SidebarMenu>
            <SidebarMenuItem title="Home" icon={HomeIcon} route={"/home"} />

            <SidebarMenuItem
              title="Webinars"
              icon={groups}
              route={"/webinars"}
            />
            <SidebarMenuItem
              title="Planning & Billing"
              icon={Billing}
              route={"/billing"}
            />
            <SidebarMenuItem
              title="User Management"
              icon={Switch}
              route={"/usermanagement"}
            />
            <SidebarMenuItem
              title="Settings"
              icon={Setting}
              route={"/settings"}
            />
          </SidebarMenu>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
