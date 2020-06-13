const Customer = require("./customer.js");
const kitchen = require("./kitchen.js");

const serve = (customer, menu, done) => {
  console.log(`Start serve with ${customer.name} with menu= ${menu}`);
  customer.placeOrder(menu, (error, order) => {
    if (!error) {
      console.log(`Prepare food of ${customer.name}`);
      kitchen.prepareFood(order, (error, food) => {
        if (!error) {
          console.log(`Customer ${customer.name} is eat and pay`);
          customer.eatAndPay(food, done);
        }
      });
    }
  });
};

// Start to serve to all customers
const menus = ["Beer", "Chicken grill", "Ham burger"];
for (let index = 1; index <= 5; index++) {
  const customer = new Customer(index, `customer_${index}`);
  serve(customer, menus[index % menus.length], (error, menu) => {
    console.log(`>> Done for customer=${customer.name} with food=${menu}`);
  });
}
