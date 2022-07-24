// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    // use: {
    //   baseURL: 'https://www.saucedemo.com/',
    // },
    //above is used for setting the base URL needed if you don't want to keep writing out the entire URL within tests

    reporter: 'allure-playwright',
    //the above is to set report generation to allure

    globalSetup: require.resolve('./global-setup')
    //above used for setting up global state of tests such as creating a login json file
  };
  
  module.exports = config;