
const finder = require('appium-flutter-finder');
const assert = require("assert");

 class Onboarding{
    constructor(){ }

  async navigateToLoginScreen(driver){
        await driver.execute('flutter:waitFor',finder.bySemanticsLabel('Login'));
        const loginButton = finder.bySemanticsLabel('Login'); 
        await driver.elementClick(loginButton);
    }

    async navigateToSIgnupScreen(){
      
    }
    
}
module.exports = Onboarding;



