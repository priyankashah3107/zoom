import React from "react";
import Videos from "../components/ui/Videos";

export default {
  title: "Components/ui/Videos",
  components: Videos,
};

const Template = (args) => <Videos {...args} />;

export const UsersVideo = Template.bind({});

UsersVideo.args = {};
