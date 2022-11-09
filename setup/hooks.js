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
