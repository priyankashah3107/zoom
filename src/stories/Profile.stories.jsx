import React from "react";
import Profile from "../components/ui/Profile";

export default {
  title: "Profile",
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const ProfilePage = Template.bind({});

ProfilePage.args = {};
