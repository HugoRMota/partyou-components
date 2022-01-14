const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
          postcssOptions: {
            plugins: [
              require("postcss-import"),
              require("tailwindcss/nesting")(require("postcss-nesting")),
              require("tailwindcss"),
              require("autoprefixer"),
            ],
          },
        },
      },
    },
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
          postcssOptions: {
            plugins: [
              require("postcss-import"),
              require("tailwindcss/nesting")(require("postcss-nesting")),
              require("tailwindcss"),
              require("autoprefixer"),
            ],
          },
        },
      },
    },
   ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader",  "postcss-loader",  {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            indentedSyntax: false
          }
        }
      }],
      include: path.resolve(__dirname, "../"),
      
    }); // Return the altered config

    config.resolve.alias = {
      ...config.resolve?.alias,
      "@": [path.resolve(__dirname, "../src/"), path.resolve(__dirname, "../")],
    };

    /**
     * Fixes font import with /
     * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
     */
    config.resolve.roots = [
      path.resolve(__dirname, "../public"),
      "node_modules",
    ];

    return config;
  },
  framework: "@storybook/vue3",

  core: {
    builder: "webpack5",
  },
};
