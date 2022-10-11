const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: "https://community.ethic.com/hub/",
    fileServerFolder: ".",
    fixturesFolder: "./cypress/fixtures",
    modifyObstructiveCode: false,
    supportFile: "./cypress/support/e2e.js",
    video: false,
    viewportWidth: 375,
    viewportHeight: 667,
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false
  },
});
