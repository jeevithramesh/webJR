const packageJsonDeps = require("./package.json").dependencies;

const dependencies = {
  "@angular/animations": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/animations"],
  },
  "@angular/common": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/common"],
  },
  "@angular/compiler": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/compiler"],
  },
  "@angular/core": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/core"],
  },
  "@angular/forms": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/forms"],
  },
  "@angular/material": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/material"],
  },
  "@angular/platform-browser": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/platform-browser"],
  },
  "@angular/platform-browser-dynamic": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/platform-browser-dynamic"],
  },
  "@angular/router": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/router"],
  },
  "@angular/service-worker": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@angular/service-worker"],
  },
  "@types/ws": {
    singleton: true,
    eager: false,
    strictVersion: false,
    requiredVersion: packageJsonDeps["@types/ws"],
  },
  rxjs: {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["rxjs"],
  },
  tslib: {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["tslib"],
  },
  "zone.js": {
    singleton: true,
    eager: true,
    strictVersion: false,
    requiredVersion: packageJsonDeps["zone.js"],
  },
};

module.exports = dependencies;
