# Playwright-BDD
BDD set up
1.	Create empty folder
2.	Open created empty folder in VS Code
3.	Open terminal
 
4.	Enter below command in terminal
npm init --yes 
 
It will create package.json file (you can modify the values in this file as required)
5.	Download dependencies as below
npm install playwright chai prettier @cucumber/cucumber cucumber-html-reporter
 
This will create node modules and package.lock.json file
 
6.	(Optional)Prettier is optional but it helps to eliminate semicolon and double quotes error.
Create .prettierrc file and enter below code
{
  "semi": false,
  "singleQuote": true
}

7.	Create below folders in the root
features
page-objects
step-definitions
setup 
8.	Create below files in the rool
cucumber.js
reporter.js
 
9.	In set up folder create below files
assertions.js
hooks.js
commonUtils.js
 
10.	assertions.js file add below code
const chai = require('chai')

global.expect = chai.expect
global.assert = chai.assert
global.should = chai.should

11.	hooks.js add below code
const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

BeforeAll(async () => {
    console.log('Launch Browser')
    global.browser = await playwright['chromium'].launch({ headless: false })
})

AfterAll(async () => {
    console.log('Close Browser')
    await global.browser.close()
})

Before(async () => {
    console.log('Create new context and page')
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
})

After(async () => {
    console.log('Close context and page')
    await global.page.close()
    await global.context.close()
})

12.	Add below code in commonUtils.js
class commonUtils{

    getDate(){
        const date = new Date()
        const currentYear = date.getFullYear().toString()
        const currentMonth = date.getMonth()+1
        const currentDate = date.getDate().toString()
        const newDate = currentDate.concat(currentMonth.toString()).concat(currentYear)
        const currentHour = date.getUTCHours().toString()
        const currentMin = date.getUTCMinutes().toString()
        const currentSec = date.getUTCSeconds().toString()
        const newTime = currentHour.concat(currentMin).concat(currentSec)
        const newDateformat = newTime.concat(newDate)
      //  console.log("New Date format-> "+ newDateformat)
        return newDateformat.toString()
        
    }
    
    getTime(){
        const date = new Date()
        const currentHour = date.getUTCHours().toString()
        const currentMin = date.getUTCMinutes().toString()
        const currentSec = date.getUTCSeconds().toString()
        const newTime = currentHour.concat(currentMin).concat(currentSec)
        //console.log("New Date format-> "+ newTime)
        return newTime.toString()
        
    }

}

module.exports = { commonUtils }

13.	add below code in cucumber.js as below
const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-defitions/**/*.step.js
`
module.exports = {
    default: `${common} features/**/*.feature`,
}

14.	create feature file and step definitions in respective folders
 

15.	Start writing tests, example is given below
Login.feature
Feature: Login action

    As a user
    I want to login into application
    Scenario: Login with valid credentials
        Given I visit a login page
Login-step.js
const { Given, When, Then, defineStep } = require('@cucumber/cucumber')

const loginPage = new LoginPage()

Given('I visit a login page', async function () {
    await loginPage.navigateToLoginScreen()
})
login
16.	Change values in package.json as below
"scripts": {
    "test": "cucumber-js --require cucumber.js --require step-definitions/**/*.js -f json:cucumber_report.json --publish-quiet",
    "report": "node reporter.js"
  },

17.	Create loginpage.js in page-objects folder and add below script
 
const { getTime, commonUtils } = require('../setup/commonUtils')
const CommonUtils = new commonUtils()
const date = CommonUtils.getDate()
class LoginPage{

    async navigateToLoginScreen(){
        await page.goto('https://www.saucedemo.com')
        await page.screenshot({path: 'Screenshots/DemoHomepage-'+date+'.png', fullPage:true})
    }
}
module.exports = { LoginPage }

18.	Add below code in reporter.js file
const reporter = require('cucumber-html-reporter')
const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': '2.0.0',
        'Test Environment': 'STAGING',
        Browser: 'Chrome 54.0',
        Platform: 'Windows 10',
    },
}

reporter.generate(options)
