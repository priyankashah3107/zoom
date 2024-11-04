// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@storybook/addon-onboarding",
//     "@storybook/addon-essentials",
//     "@chromatic-com/storybook",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-vite",
//     options: {},
//   },
// };
// export default config;

import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    // Add CSS handling for Tailwind
    config.css = config.css || {};
    config.css.postcss = {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    };
    config.plugins = config.plugins || [];
    config.plugins.push(svgr());
    return config;
  },
};

export default config;
