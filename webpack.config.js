module.exports = {
  mode: "development",
  entry: "./src/renderer.js",
  output: {
    path: `${__dirname}/src`,
    filename: "bundle.js"
  },
  target: "electron-renderer",
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};
