
const finder = require('appium-flutter-finder');
const assert = require("assert");

class BiometricAuth{
   constructor(){ }

 async skipAuthentication(driver){
// Enter PIN
await driver.execute('flutter:waitFor', finder.bySemanticsLabel('Set up a quick login'));
assert.strictEqual( await driver.getElementText(finder.byValueKey('keySkipForNow')),'Skip for now');
await driver.elementClick(finder.byValueKey('keySkipForNow'))
await driver.execute('flutter:waitFor', finder.bySemanticsLabel('Create Order'));
}
}
module.exports = BiometricAuth;



