import { defineConfig, devices } from '@playwright/test' // import devices

export default defineConfig({
  projects: [
    {
      name: 'DesktopSafari',
      use: {
        browserName: 'webkit',
        ...devices['Desktop Safari']
      }
    },
    {
      name: 'MobileSafari',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12']
      }
    }
  ]
})
