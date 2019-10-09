const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",  // default value is "./src/index.js"
    vendor: "./src/vendor.js"
  },

  module: {
    rules: [
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
    new CleanWebpackPlugin()
  ],
}