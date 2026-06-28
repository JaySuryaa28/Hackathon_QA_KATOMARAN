const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/2026/June/Login",
    reportFilename: "Login_Report",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },

  e2e: {
    baseUrl: "https://tichi-app-webapp-stage.web.app/",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,

    setupNodeEvents(on, config) {
      return config;
    }
  }

});