const Customer = require("./customer.js");
const kitchen = require("./kitchen.js");

const serve = (customer, menu, done) => {
  console.log(`Start serve with ${customer.name} with menu= ${menu}`);
  customer.on("decided", (order, menu) => {
    console.log(`Prepare food of ${customer.name}`);
    order.on("prepared", (food) => {
      console.log(`Customer ${customer.name} is eat and pay`);
      customer.eatAndPay(menu, done);
    });
    kitchen.prepareFood(order);
  });
  customer.on("leaving", (result) => done(null, result));

  customer.placeOrder(menu);
};

// Start to serve to all customers
const menus = ["Beer", "Chicken grill", "Ham burger"];
for (let index = 1; index <= 5; index++) {
  const customer = new Customer(index, `customer_${index}`);
  serve(customer, menus[index % menus.length], (error, menu) => {
    console.log(`>> Done for customer=${customer.name} with food=${menu}`);
  });
}
