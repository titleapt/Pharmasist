import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('has title', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('button', { name: 'cpall.' }).click();
  await page.locator('//*[@id="login"]').fill(process.env.LOGIN_EMAIL!);
  await page.locator('//*[@id="passwd"]').fill(process.env.LOGIN_PASSWORD!);
  await page.locator('//*[@id="loginBtn"]').click();
  await expect(page.getByText(process.env.DISPLAY_NAME!)).toBeVisible();
});

