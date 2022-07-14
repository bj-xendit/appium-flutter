const wdio = require("webdriverio");
const assert = require("assert");
const finder = require('appium-flutter-finder');
const InitTest = require('./init_test');

const env = 'android';


const opts = env == 'android' ? {
path: '/wd/hub',
port: 4723,
capabilities: {
platformName: "Android",
platformVersion: "9",
deviceName : "Android Emulator",
app:__dirname + "/app/android/app-debug.apk",
appPackage: "co.xendit.business.dev",
automationName: "Flutter",
//newCommandTimeout: 60,
retryBackoffTime: 500,
connectionRetryTimeout:60
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

await new InitTest().init(driver);
await driver.deleteSession();
}
main();



