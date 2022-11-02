const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 4001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Remote",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/index.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
