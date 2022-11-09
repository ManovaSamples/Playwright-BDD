const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: false,
    metadata: {
        'App Version': '1.147.6',
        'Test Environment': 'STAGE',
        Browser: 'Chrome 107.0',
        Platform: 'Windows 10',
    },
}

reporter.generate(options)
