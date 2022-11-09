const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/demo-login-page')

const loginPage = new LoginPage()


Given('I visit a login page', async function() {
    await loginPage.navigateToLoginScreen()
})


    
// defineStep(
//     /^I fill the login form with "([^"]*)" and "([^"]*)"$/,
//     async function (username, password) {
//     await loginPage.submitLoginWithParameters(username, password)
//     }
// )