const { defineConfig } = require("cypress");

module.exports = defineConfig({
  

  e2e: {
    baseUrl:"https://practice.expandtesting.com" ,
    setupNodeEvents(on, config){},
  },
  screenshotsFolder:"cypress/screenshots",
  video: true, 
});
