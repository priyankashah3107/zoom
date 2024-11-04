import React from "react";
import LoginPage from "../components/ui/signlogin/LoginPage";

export default {
  title: "../components/ui/signlogin/LoginPage",
  component: LoginPage,
};

const Template = (args) => <LoginPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
