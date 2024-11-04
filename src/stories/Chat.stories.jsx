import React from "react";

import Chat from "../components/ui/Chat";

export default {
  title: "Chat",
  component: Chat,
};

const Template = (args) => <Chat {...args} />;

export const ChatPage = Template.bind({});

ChatPage.args = {};
