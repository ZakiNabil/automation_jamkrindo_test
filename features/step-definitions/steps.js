const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');

Given(/^I am on the login page dashboard$/, async () => {
    await browser.url('https://opensource-demo.orangehrmlive.com/');
});

When(/^I login with (.+) and (.+) jamkrindo$/, async (username, password) => {
    await LoginPage.submitLogin(username, password)
});

Then(/^I successfully login to dashboard$/, async () => {
    await LoginPage.verifySuccessLogin()
});

Then(/^I should see a alert error$/, async () => {
    await LoginPage.verifyDisplayAlert()
});

When(/^I dont fill the form login$/, async () => {
    await LoginPage.notFillForm()
});

When(/^I click button login$/, async () => {
    await LoginPage.clickBtnLogin()
});

Then(/^I should see a error message$/, async () => {
    await LoginPage.verifyDisplayErrMessage()
});

