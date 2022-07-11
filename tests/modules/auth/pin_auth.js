
const finder = require('appium-flutter-finder');
const assert = require("assert");

class PinAuth{
   constructor(){ }

 async verifyPIN(driver,pin){
await driver.execute('flutter:waitFor',finder.bySemanticsLabel('Enter PIN'));
for(var i = 0; i < 6; i ++){
 await driver.elementClick(finder.byValueKey('0'));
   }
}
}
module.exports = PinAuth;



