const path = require("path");

module.exports = {
  entry: "./src/index.js",  // default value is "./src/index.js"

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  mode: "development",
  devtool: "none"
}