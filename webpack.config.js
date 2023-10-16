const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        mfe1: "mfe1@http://localhost:4200/remoteEntry.js",
        mfe2: "mfe2@http://localhost:4200/remoteEntry.js",
      },
    }),
  ],
};
