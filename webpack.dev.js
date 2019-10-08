const path = require("path");
const common = require("./webpack.common.js");
const merge = require('webpack-merge');

module.exports = merge(
  common,
  
  {
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist")
    },

    mode: "development",
    devtool: "none"
  }
);