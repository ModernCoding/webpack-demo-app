const path = require("path");
const common = require("./webpack.common.js");
const merge = require('webpack-merge');

module.exports = merge(
  common,
  
  {
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist")
    },

    mode: "development",
    devtool: "none",

    module: {
      rules: [
        {
          test: /\.sass$/i,

          use: [
            'style-loader', //  3.  inject styles into dom
            'css-loader',   //  2.  turns css into cjs
            'sass-loader'   //  1.  turns sass into css
          ],
        }
      ],
    }
  }
);