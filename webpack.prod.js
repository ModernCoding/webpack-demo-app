const path = require("path");
const common = require("./webpack.common.js");
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const OptimizeCssAssetsPlugin = require(
  'optimize-css-assets-webpack-plugin'
);

module.exports = merge(
  common,
  
  {
    output: {
      filename: "[name].[contentHash].bundle.js",
      path: path.resolve(__dirname, "dist")
    },

    mode: "production",

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",

        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),

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
    },

    optimization: {
      minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin()
      ]
    }
  }
);