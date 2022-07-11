
const finder = require('appium-flutter-finder');
const assert = require("assert");
const ProductPrice = require('./product_price');
const Recipient = require('./recipient_page');

class CreateOrder{
   constructor(){ }

 async navigteToCreateOrderPage(driver){
await driver.elementClick(finder.byValueKey('keyCreateOrder'));

}

async createOrder(driver){
 await new Recipient().addRecipient(driver,'John Doe','9800000000');
 await new ProductPrice().enterPrice(driver,'6000');
  //save order
await driver.elementClick(finder.byValueKey('keyButtonSecondary'));

}


}
module.exports = CreateOrder;



