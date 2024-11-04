// import React from "react";
// import Upcoming from "../components/ui/Upcoming";

// export default {
//   title: "Components/ui/Upcoming",
//   component: Upcoming,
// };

// const Template = (args) => <Upcoming {...args} />;

// export const Default = Template.bind({});
// Default.args = {};

// Upcoming.stories.js
import React from "react";
import Upcoming from "../components/ui/Upcoming";
import { WebinarProvider } from "../context/WebinarContext";

export default {
  title: "Components/ui/Upcoming",
  component: Upcoming,
  decorators: [
    (Story) => (
      <WebinarProvider>
        <Story />
      </WebinarProvider>
    ),
  ],
};

const Template = (args) => <Upcoming {...args} />;

export const Default = Template.bind({});
Default.args = {};
