import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
 testDir: './tests',

 fullyParallel: true,

 forbidOnly: !!process.env.CI,
 retries: process.env.CI ? 2 : 0,

 reporter: 'html',



 use: {
  baseURL: 'https://automationexercise.com',
  trace: 'on-first-retry',
 },

 projects: [
  {
   name: 'chromium',
   use: {
    ...devices['Desktop Chrome'],
   },
  },
  // {
  //  name: 'Firefox',
  //  use: {
  //   ...devices['Desktop Firefox'],
  //  },
  // },
  // {
  //  name: 'WebKit',
  //  use: {
  //   ...devices['Desktop Safari'],
  //  },
  // },

  // {
  //  name: 'Mobile Chrome',
  //  use: {
  //   ...devices['Pixel 5'],
  //  },
  // },
  // {
  //  name: 'Mobile Safari',
  //  use: {
  //   ...devices['iPhone 13'],
  //  },
  // },
 ],
});