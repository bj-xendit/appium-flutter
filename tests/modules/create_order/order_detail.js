
const finder = require('appium-flutter-finder');
const assert = require("assert");

class OrderDetail{
   constructor(){ }

 async closeOrderDetail(driver){

await driver.elementClick(finder.byValueKey('keyButtonBack'));

   }
}

module.exports = OrderDetail;



