import React from "react";
import Billing from "../components/ui/Billing";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/ui/Billing",
  component: Billing,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/billing/management"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Billing {...args} />;

export const Default = Template.bind({});
Default.args = {};
