const AuthenticationE2E = require("./tests/e2e/authentication_e2e");
const CreateOrderE2E = require("./tests/e2e/create_order_e2e");

class InitTest{
    constructor(){}
  
   async testAuthenticationFlow(driver){
        var email = '';
        var password = '';
   await   new  AuthenticationE2E().loginWithEmail(driver,email,password,'');
    }

   async testCreateOrderFlow(driver){
        var email = '';
        var password = '';
     await   new CreateOrderE2E().createOrder(driver,email,password,'');
    }

   async init(driver){
       await this.testAuthenticationFlow(driver);
    }

}
module.exports = InitTest;