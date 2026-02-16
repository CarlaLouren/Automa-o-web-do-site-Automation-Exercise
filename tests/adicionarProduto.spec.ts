import { test, expect } from '@playwright/test';

//test.use({ storageState: '.auth/user.json' });

test('Deve adicionar produtos ao carrinho com sucesso', async ({ page }) => {


    await page.route('*/', route => {
        const request = route.request();
        const resourceType = request.resourceType();
        const url = request.url();

        if (['image', 'media', 'font'].includes(resourceType)) {
            return route.abort();
        }

        if (
            url.includes('doubleclick') ||
            url.includes('googlesyndication') ||
            url.includes('googleads') ||
            url.includes('adsystem') ||
            url.includes('facebook') ||
            url.includes('analytics') ||
            url.includes('/ads')
        ) {
            return route.abort();
        }

        route.continue();
    });

    await page.goto('https://automationexercise.com/');

    await expect(
        page.getByAltText('Website for automation practice')
    ).toBeVisible();

    const products = page.locator('.product-image-wrapper');
    const count = await products.count();
    expect(count).toBeGreaterThan(0);

    const randomIndex = Math.floor(Math.random() * count);
    const product = products.nth(randomIndex);

    await product.hover();

    await product
        .locator('.productinfo a.add-to-cart')
        .click();

    await page.getByRole('button', { name: 'Continue Shopping' }).click();

    await page.goto('https://automationexercise.com/view_cart');

    await expect(page.locator('.cart_info')).toHaveCount(1);
});