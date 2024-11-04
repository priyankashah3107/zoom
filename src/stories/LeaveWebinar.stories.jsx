import React from "react";
import LeaveWebinarPage from "../components/ui/LeaveWebinar";

export default {
  title: "LeaveWebinar",
  component: LeaveWebinarPage,
};

const Template = (args) => <LeaveWebinarPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
