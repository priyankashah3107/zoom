import React from "react";

import EmailCodeVerify from "../components/ui/EmailCodeVerfiy";

export default {
  title: "CodeVerify",
  component: EmailCodeVerify,
};

const Template = (args) => <EmailCodeVerify {...args} />;
export const CodeVerify = Template.bind({});
CodeVerify.args = {};
