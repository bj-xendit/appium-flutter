const wdio = require("webdriverio");
const assert = require("assert");
const {byTooltip, byValueKey, byType, bySemanticsLabel} = require('appium-flutter-finder');

const env = 'android';
//TODO Enter username
const username = '';
//TODO Enter password
const password = '';


const opts = env == 'android' ? {
path: '/wd/hub',
port: 4723,
capabilities: {
platformName: "Android",
platformVersion: "11",
deviceName : "Android Emulator",
app:"/Users/bijay/Documents/Xendit/appium-test/app-debug.apk",
appPackage: "co.xendit.business.dev",
automationName: "Flutter"
}
} : {
 platformName: 'iOS',
 platformVersion: '14.4',
 deviceName: 'iPhone 12 Pro Max',
 noReset: true
}

async function main(){
const driver = await wdio.remote(opts);

assert.strictEqual(await driver.execute('flutter:checkHealth'),'ok');
//Onboarding Screen
await driver.execute('flutter:waitFor',bySemanticsLabel('Login'));
const loginButton = bySemanticsLabel('Login'); 
await driver.elementClick(loginButton);


//Login screen
await driver.execute('flutter:waitFor',bySemanticsLabel('Password'));
// Enter email & password
await driver.elementClick(bySemanticsLabel('e.g. name@email.com'));
await driver.execute('flutter:enterText',username)
await driver.elementClick(byValueKey('keyPasswordField'));
await driver.execute('flutter:enterText',password);
await driver.elementClick(byType('ElevatedButton'));

// Enter PIN
await driver.execute('flutter:waitFor',bySemanticsLabel('Enter PIN'));
for(i = 0; i < 6; i ++){
 await driver.elementClick(byValueKey('0'));
}


// Biometric
await driver.execute('flutter:waitFor', bySemanticsLabel('Set up a quick login'));
await driver.elementClick(byValueKey('keySkipForNow'))


// Create Order Flow
await driver.elementClick(byValueKey('keyCreateOrder'));

// Step 1 Add reciepient info

await driver.elementClick(byValueKey('keyAddRecipient'));
await driver.elementClick(byValueKey('keyRecipientNameField'));
await driver.execute('flutter:enterText','John Doe');
await driver.elementClick(byValueKey('keyRecipientPhoneField'));
await driver.execute('flutter:enterText','9800000000');
await driver.elementClick(byValueKey('keyButtonPrimary'));

// Step 2 Enter price
await driver.elementClick(byValueKey('keyEnterPrice'));
await driver.elementClick(byValueKey('keyFormField'));
await driver.execute('flutter:enterText','40000');
await driver.elementClick(byValueKey('keyButtonSave'));

//Step 3 Select save
await driver.elementClick(byValueKey('keyButtonSecondary'));

// After order is successfully created, navigate to home screen

// Close all the order related popups
await driver.elementClick(byValueKey('keyButtonClose'));
await driver.elementClick(byValueKey('keyButtonBack'));



await driver.deleteSession();

}
main();



