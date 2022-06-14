import { themes } from "@storybook/theming";
import logo from "./public/ml2ui.png";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: "black",
      brandTitle: "ML2 UI",
      brandImage: logo,
      brandUrl: "https://ml2-ui.vercel.app/",
      brandTarget: "_self",
    },
    light: {
      ...themes.normal,
      appBg: "white",
      brandTitle: "ML2 UI",
      brandImage: logo,
      brandUrl: "https://ml2-ui.vercel.app/",
      brandTarget: "_self",
    },
  },
};
