import React from "react";

import SigninPage from "../components/ui/signlogin/SigninPage";
import LoginPage from "../components/ui/signlogin/LoginPage";

export default {
  title: "../components/ui/signlogin/SigninPage",
  component: <LoginPage />,
};

const Template = (args) => <SigninPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
