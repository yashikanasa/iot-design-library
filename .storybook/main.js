module.exports = {
  // Loads all story files inside src
  stories: ["../src/**/*.stories.js"],

  // Includes essential addons
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
  ],

  // Ensures it's configured for React
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
};