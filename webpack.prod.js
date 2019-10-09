const path = require("path");
const common = require("./webpack.common.js");
const merge = require('webpack-merge');

module.exports = merge(
  common,
  
  {
    output: {
      filename: "[name].[contentHash].bundle.js",
      path: path.resolve(__dirname, "dist")
    },

    mode: "production"
  }
);