const withTM = require("@weco/next-plugin-transpile-modules");

module.exports = withTM({
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  transpileModules: ["components"]
});
