const CreateOrder = require("../modules/create_order/create_order");
const OrderDetail = require("../modules/create_order/order_detail");
const OrderSuccessPopup = require("../modules/create_order/order_success_popup");
const AuthenticationE2E = require("./authentication_e2e");

class CreateOrderE2E{
 constructor(){}

async createOrder(driver,username,password,pin){


await new AuthenticationE2E().loginWithEmail(driver,username,password,pin);
var createOrder = new CreateOrder();
await createOrder.navigteToCreateOrderPage(driver);
await createOrder.createOrder(driver);
await new OrderSuccessPopup().closePopup(driver);
await new OrderDetail().closeOrderDetail(driver);


    }
}

module.exports= CreateOrderE2E;