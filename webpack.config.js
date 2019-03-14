const MODE = "development";

const enabledSourceMap = MODE === "development" ? true : false;

module.exports = {
  mode: MODE,
  entry: "./src/renderer.js",
  output: {
    path: `${__dirname}/src`,
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
  }
};
