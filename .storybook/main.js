module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register"
  ],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  }
};
