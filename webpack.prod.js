const path = require("path");
const common = require("./webpack.common.js");
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(
  common,
  
  {
    output: {
      filename: "[name].[contentHash].bundle.js",
      path: path.resolve(__dirname, "dist")
    },

    mode: "production",

    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contentHash].css'
      })
    ],

    module: {
      rules: [
        {
          test: /\.sass$/i,

          use: [
            MiniCssExtractPlugin.loader, //  3.  inject styles into dom
            'css-loader',   //  2.  turns css into cjs
            'sass-loader'   //  1.  turns sass into css
          ],
        }
      ],
    }
  }
);