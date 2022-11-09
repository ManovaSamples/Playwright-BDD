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