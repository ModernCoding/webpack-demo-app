const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",  // default value is "./src/index.js"

  output: {
    filename: "main.[contentHash].js",
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
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    })
  ],
}