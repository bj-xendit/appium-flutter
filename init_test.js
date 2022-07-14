const AuthenticationE2E = require("./tests/e2e/authentication_e2e");
const CreateOrderE2E = require("./tests/e2e/create_order_e2e");

class InitTest{
    constructor(){}
  
   async testAuthenticationFlow(driver){
        var email = 'vaibhav.khachane-neosoft@xendit.co';
        var password = 'Xendit@11111';
   await   new  AuthenticationE2E().loginWithEmail(driver,email,password,'');
    }

   async testCreateOrderFlow(driver){
        var email = 'vaibhav.khachane-neosoft@xendit.co';
        var password = 'Xendit@11111';
     await   new CreateOrderE2E().createOrder(driver,email,password,'');
    }

   async init(driver){
       await this.testAuthenticationFlow(driver);
       //await this.testCreateOrderFlow(driver);
    }

}
module.exports = InitTest;