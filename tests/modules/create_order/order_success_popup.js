
const finder = require('appium-flutter-finder');
const assert = require("assert");

class OrderSuccessPopup{
   constructor(){ }

 async closePopup(driver){
     await driver.elementClick(finder.byValueKey('keyButtonClose'));
   }
}
module.exports = OrderSuccessPopup;



