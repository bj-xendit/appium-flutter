
const finder = require('appium-flutter-finder');
const assert = require("assert");

class ProductPrice{
   constructor(){ }

 async enterPrice(driver,amount){
await driver.elementClick(finder.byValueKey('keyEnterPrice'));
await driver.elementClick(finder.byValueKey('keyFormField'));
await driver.execute('flutter:enterText',amount);
assert.strictEqual( await driver.getElementText(finder.byText('Save')),'Save');
await driver.elementClick(finder.byValueKey('keyButtonSave'));
   }
}
module.exports = ProductPrice;



