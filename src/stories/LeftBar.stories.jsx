import React from "react";
import LeftBar from "../components/ui/LeftBar";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "LeftBar",
  component: LeftBar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ height: "100vh" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <LeftBar {...args} />;

export const LeftBarPage = Template.bind({});

LeftBarPage.args = {};
