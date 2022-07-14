
const finder = require('appium-flutter-finder');
const assert = require("assert");

class Logout{
   constructor(){ }

async verifyLogout(driver){

await driver.execute('flutter:waitFor', finder.bySemanticsLabel('Create Order'));
// Click on Account
await driver.execute('flutter:waitFor', finder.bySemanticsLabel('Account'));
//assert.strictEqual( await driver.getElementText(finder.bySemanticsLabel('Account')),'Account');
await driver.elementClick(finder.bySemanticsLabel('Account'))

// Click on Logout
await driver.execute('flutter:waitFor', finder.bySemanticsLabel('Log out'));
//assert.strictEqual( await driver.getElementText(finder.bySemanticsLabel('Log out')),'Log out');
await driver.elementClick(finder.bySemanticsLabel('Log out'))

// Click on Logout Confirmation Ok
await driver.execute('flutter:waitFor', finder.bySemanticsLabel('Log out'));
//assert.strictEqual( await driver.getElementText(finder.bySemanticsLabel('Log out')),'Log out');
await driver.elementClick(finder.bySemanticsLabel('Log out'))

await driver.execute('flutter:waitFor',finder.bySemanticsLabel('Login'));
}
}
module.exports = Logout;



