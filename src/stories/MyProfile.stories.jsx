import React from "react";
import MyProfile from "../components/ui/MyProfile.jsx";

export default {
  title: "Components/ui/MyProfile",
  component: MyProfile,
};

const Template = (args) => <MyProfile {...args} />;

export const Default = Template.bind({});
Default.args = {};
