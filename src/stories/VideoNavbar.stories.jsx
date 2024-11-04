import React from "react";
import VideoNavbar from "../components/ui/VideoNavbar";

export default {
  title: "components/ui/VideoNavbar",
  component: VideoNavbar,
};

const Template = (args) => <VideoNavbar {...args} />;

export const VidNavbar = Template.bind({});
VidNavbar.args = {};
