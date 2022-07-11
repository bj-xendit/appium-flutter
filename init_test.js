const AuthenticationE2E = require("./tests/e2e/authentication_e2e");
const CreateOrderE2E = require("./tests/e2e/create_order_e2e");

class InitTest{
    constructor(){}
    init(driver){

        // Test Data
        var email = '';
        var password = '';



    //   new  AuthenticationE2E().loginWithEmail(driver,email,password,'');

    new CreateOrderE2E().createOrder(driver,email,password,'');


    }
}
module.exports = InitTest;