const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",  // default value is "./src/index.js"
    vendor: "./src/vendor.js"
  },

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
      {
        test: /\.html$/i,

        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,

        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),

    new CleanWebpackPlugin()
  ],
}