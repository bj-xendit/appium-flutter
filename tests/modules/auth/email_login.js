const assert = require("assert");
const finder = require('appium-flutter-finder');

class Login{
   constructor(){ }

 async loginWithEmail(driver,email,password){
await driver.execute('flutter:waitFor',finder.bySemanticsLabel('Password'));
await driver.elementClick(finder.bySemanticsLabel('e.g. name@email.com'));
await driver.execute('flutter:enterText',email)
await driver.elementClick(finder.byValueKey('keyPasswordField'));
await driver.execute('flutter:enterText',password);
assert.strictEqual( await driver.getElementText(finder.byValueKey('keyLoginButton')),'Login');
await driver.elementClick(finder.byType('ElevatedButton'));
     
   }
}
module.exports = Login;



