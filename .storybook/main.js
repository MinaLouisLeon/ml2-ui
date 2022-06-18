module.exports = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|mdx|ts|tsx)",
    "../src/components/Desktop/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    '@storybook/addon-docs',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-dark-mode',
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