const path = require("path");

module.exports = {
  entry: "./src/index.js",  // default value is "./src/index.js"

  output: {
    filename: "main.js",
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
}