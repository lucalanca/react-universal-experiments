// This config adds support for ES6+ modules import (for the shared package)
// react-app-rewired can be removed as soon as create-react-app 2.0.0^ is released.
// source https://github.com/dashed/react-app-rewire-babel-loader

const path = require("path");
const fs = require("fs");

const rewireBabelLoader = require("react-app-rewire-babel-loader");

// helpers

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = function override(config, env) {
  // white-list some npm modules to the babel-loader pipeline
  // see: https://webpack.js.org/configuration/module/#rule-include

  config = rewireBabelLoader.include(config, resolveApp("../components"));

  // black-list some modules from the babel-loader pipeline
  // see: https://webpack.js.org/configuration/module/#rule-exclude

  config = rewireBabelLoader.exclude(config, /(node_modules|bower_components)/);

  return config;
};
