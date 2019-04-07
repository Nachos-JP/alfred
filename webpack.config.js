const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

const MODE = "development";
const enabledSourceMap = MODE === "development" ? true : false;

module.exports = {
  mode: MODE,
  entry: "./src/webpack/src/js/renderer.js",
  output: {
    path: `${__dirname}/src/webpack/dist`,
    filename: "bundle.js"
  },
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/webpack/src/index.html",
      inlineSource: ".(js|css)$"
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ]
};
