// global-setup.js
const { chromium } = require('@playwright/test');

module.exports = async config => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.fill('input[name="user-name"]', 'standard_user');
  await page.fill('input[name="password"]', 'secret_sauce');
  await page.click('text=LOGIN');
  // Save signed-in state to 'saucedemoLogin.json'.
  await page.context().storageState({ path: 'sauceDemoLogin.json' });
  await browser.close();
};