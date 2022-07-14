const Login = require("../modules/auth/email_login");
const Onboarding = require("../modules/auth/onboarding");
const PinAuth = require("../modules/auth/pin_auth");
const BiometricAuth = require("../modules/auth/biometric_auth");
const Logout = require("../modules/auth/logout");


class AuthenticationE2E{
constructor(){}

async loginWithEmail(driver, email,password, pin){
 await new  Onboarding().navigateToLoginScreen(driver);
  await new  Login().loginWithEmail(driver,email,password);
  await new  PinAuth().verifyPIN(driver,pin);
  await  new BiometricAuth().skipAuthentication(driver);
  await  new Logout().verifyLogout(driver);
}

loginWithPhone(driver,phone){
    //todo
}

}


module.exports = AuthenticationE2E;