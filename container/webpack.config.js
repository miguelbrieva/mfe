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
        remote: "remote@http://localhost:4001",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
