import { test, expect } from '@playwright/test';89

test("Verifying Login page", async ({page}) => 
    {
        await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator ("input[name='username']").fill("admin")
        await page.locator ( "input[type='password']").fill("admin123")
        await page.locator ("button[type='submit']").click ()
       //Assertions
        await expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    })

    test("verify login page Negative scenario", async ({page}) => 
    {
        await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator ("input[name='username']").fill("admin")
        await page.locator ( "input[type='password']").fill("123")
        await page.locator ("button[type='submit']").click ()
       //Assertions
        await expect (page.locator("(//p[text()='Invalid credentials']")).toBeVisible('Invalid credentials')

    })

    test('verify swaglabs login page and logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'Test User' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
});