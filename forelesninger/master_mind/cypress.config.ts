import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/integration/**/*.spec.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
