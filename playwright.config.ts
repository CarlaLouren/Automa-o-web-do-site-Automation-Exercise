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
        storageState: 'storageState.json',
    },

    projects: [
        {
        name: 'chromium',
        use: {
            ...devices['Desktop Chrome'],
        },
        },
    ],
    });