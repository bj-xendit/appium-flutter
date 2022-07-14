
const finder = require('appium-flutter-finder');
const assert = require("assert");

class PinAuth{
   constructor(){ }

 async verifyPIN(driver,pin){
await driver.execute('flutter:waitFor',finder.bySemanticsLabel('Enter PIN'));
//for(var i = 0; i < 6; i ++){
 await driver.elementClick(finder.byValueKey('1'));
 await driver.elementClick(finder.byValueKey('2'));
 await driver.elementClick(finder.byValueKey('3'));
 await driver.elementClick(finder.byValueKey('4'));
 await driver.elementClick(finder.byValueKey('5'));
 await driver.elementClick(finder.byValueKey('6'));
//   }
}
}
module.exports = PinAuth;



