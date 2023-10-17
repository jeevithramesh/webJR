const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("@angular-architects/module-federation/webpack");
const path = require("path");
const packageJsonDeps = require("./shared-dependencies");
const sharedMappings = new webpack.SharedMappings();
sharedMappings.register(path.join(__dirname, "./tsconfig.app.json"));

module.exports = {
  output: {
    uniqueName: "webJR",
    publicPath: "",
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        ...packageJsonDeps,
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
