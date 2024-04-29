const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.URL,
    specPattern: "cypress/integration/**/*.js",
    experimentalRunAllSpecs: true,
    chromeWebSecurity: true,
    video:false,
    setupNodeEvents(on, config) {
      Object.keys(process.env).forEach((key) => {
        config.env[key] = process.env[key];
      });
    
      return config;
    },
  },
});
