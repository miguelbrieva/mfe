const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 4000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Container",
      remotes: {
        remote: "Remote@http://localhost:4001/client/remoteEntry.js", 
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
