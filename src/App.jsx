import React from "react";
import H1 from "./components/ui/H1";
import SidebarMenuItem from "./components/ui/SidebarMenuItem";
import Billing from "../src/assets/billing.png";
import HomeIcon from "../src/assets/ho.png";
import Setting from "../src/assets/settings.png";
import Switch from "../src/assets/switch.png";
import groups from "../src/assets/groups.png";
import SidebarMenu from "./components/ui/SidebarMenu";
import LogoSection from "./components/ui/LogoSection";
import Rightbar from "./components/ui/Rightbar";
import LineBreak from "./components/ui/LineBreak";
import LeftBar from "./components/ui/LeftBar";
import Upcoming from "./components/ui/Upcoming";
import Live from "./components/ui/Live";
import Previous from "./components/ui/Previous";
import MyProfile from "./components/ui/MyProfile";
import Videos from "./components/ui/Videos";
import Webinargg from "./components/ui/Webinargg";
import MicCamera from "./components/ui/MicCamera";

const App = () => {
  return (
    <>
      {/* <H1 name={"Prabhleen!"} /> */}
      <div className="flex flex-row">
        {/* two childern leftbar rightbar */}

        {/* <LogoSection />
        <SidebarMenu>
          <SidebarMenuItem title="Home" icon={HomeIcon} />
          <SidebarMenuItem title="Webinars" icon={groups} />
          <SidebarMenuItem title="Planning & Billing" icon={Billing} />
          <SidebarMenuItem title="User Management" icon={Switch} />
          <SidebarMenuItem title="Settings" icon={Setting} />
        </SidebarMenu> */}

        {/* rightBar */}
        {/* <LeftBar /> */}
        {/* <MyProfile /> */}
        {/* <Rightbar /> */}
        {/* <Upcoming /> */}
        {/* <Live /> */}
        {/* <Previous /> */}
        {/* <Videos /> */}
        {/* <Webinargg /> */}
        <MicCamera />
      </div>
    </>
  );
};

export default App;
