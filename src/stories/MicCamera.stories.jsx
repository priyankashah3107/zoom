import React from "react";
import MicCamera from "../components/ui/MicCamera";

export default {
  title: "MicCamera",
  component: MicCamera,
};

const Template = (args) => <MicCamera {...args} />;

export const MicCameraAccess = Template.bind({});
MicCameraAccess.args = {};
