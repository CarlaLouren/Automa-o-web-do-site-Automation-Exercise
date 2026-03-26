  import { test as setup, expect } from '@playwright/test';

  setup('realizar login com usuario de teste', async ({ page }) => {
    await page.goto('/login');

    await page.goto('/login');

  await page.getByRole('textbox', { name: 'Email Address' }).first().fill('teste@89email.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.context().storageState({ path: 'storageState.json' });
  });