
const finder = require('appium-flutter-finder');
const assert = require("assert");

class Recipient{
   constructor(){ }

 async addRecipient(driver,name,phone){


 await driver.elementClick(finder.byValueKey('keyAddRecipient'));
await driver.elementClick(finder.byValueKey('keyRecipientNameField'));
await driver.execute('flutter:enterText',name);
await driver.elementClick(finder.byValueKey('keyRecipientPhoneField'));
await driver.execute('flutter:enterText',phone);
assert.equal( await driver.getElementText(finder.byText('Save')),'Save');
await driver.elementClick(finder.byValueKey('keyButtonPrimary'));
   }
}
module.exports = Recipient;



