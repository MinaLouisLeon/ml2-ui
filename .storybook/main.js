module.exports = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name : "@storybook/addon-postcss",
      options : {
        cssLoaderOprtions : {
          importLoaders: 1,
        },
        postcssLoaderOptions : {
          implementation : require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react"
}