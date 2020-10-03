const HtmlPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  devServer: {
    contentBase: `${__dirname}/dist`,
    publicPath: "/",
    hot: true,
  },
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      }
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: ['src', 'node_modules'],
  },
  plugins: [new HtmlPlugin ({
    template: "./src/index.html"
  })]
};
