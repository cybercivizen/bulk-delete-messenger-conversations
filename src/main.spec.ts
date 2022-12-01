import { test, Locator } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const EMAIL = process.env.EMAIL as string;
const PASSWORD = process.env.PASSWORD as string;

test('Main', async ({ page }) => {
   await page.goto('https://www.messenger.com/');
   await page.getByPlaceholder('Email address or phone number').fill(EMAIL);
   await page.getByPlaceholder('Password').fill(PASSWORD)
   await page.getByRole('button', { name: 'Log In' }).click();
   await page.waitForLoadState('networkidle')
   const convoLocator: Locator = page.locator('.x1n2onr6.x16hj40l', { has: page.locator('[role="gridcell"]') })

   let convosCount = await convoLocator.count();

   if (convosCount > 0) {
      console.log('Deleting...');
      while(true) {
         await convoLocator.nth(0).hover();
         await page.getByRole('button', { name: 'Menu' }).nth(0).click();
         await page.getByText('Delete Chat').click();
         await page.getByRole('button', { name: 'Delete Chat' }).click();
      }
   } else {
      console.log('No conversations to delete.')
   }
   page.close();
});