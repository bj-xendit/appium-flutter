# appium-flutter
Testing flutter apps with Appium-flutter-driver

Before attempting to run this project locally:
1. Make sure Appium server is installed and running
2. An android emulator as configured inside `index.js` is running ( Or update the configuration inside `index.js` according to the emulator )
3. Make sure to get login credential along with a testable apk file

To run this project locally:
1. Clone this project with `git clone https://github.com/bj-xendit/appium-flutter`
1. Run `npm install` in the project root directory to install dependencies
2. Update `init_test.js` file with provided `username` and `password`
3. Put provided `app-debug.apk` in the project root directory
4. Update `index.js` file with APK file location
5. Run `node index.js` - make sure Appium server is already running at this point

