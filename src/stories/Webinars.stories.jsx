import React from "react";
import Webinars from "../components/ui/Webinars";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/ui/Webinars",
  component: Webinars,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/billing/upcoming"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Webinars {...args} />;

export const Default = Template.bind({});
Default.args = {};
