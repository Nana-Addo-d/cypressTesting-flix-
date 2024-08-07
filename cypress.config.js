const { defineConfig } = require('cypress')
require('dotenv').config()

const baseUrl = process.env.CYPRESS_BASE_URL 

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: baseUrl,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
