const Customer = require("./customer.js");
const kitchen = require("./kitchen.js");

const serve = (customer, menu) => {
  console.log(`Start serve with ${customer.name} with menu= ${menu}`);
  return customer
    .placeOrder(menu)
    .then((order) => {
      console.log(`Prepare food of ${customer.name}`);
      return kitchen.prepareFood(order);
    })
    .then((food) => {
      console.log(`Customer ${customer.name} is eat and pay`);
      return customer.eatAndPay(food);
    });
};

// Start to serve to all customers
const menus = ["Beer", "Chicken grill", "Ham burger"];
const customers = [];
for (let index = 1; index <= 5; index++) {
  const customer = new Customer(index, `customer_${index}`);
  customers.push(customer);
}
Promise.all(
  customers.map((customer) => {
    return serve(
      customer,
      menus[Math.floor(Math.random() * 10) % menus.length]
    ).then((menu) => {
      console.log(`>> Done for customer=${customer.name} with food=${menu}`);
    });
  })
).then(() => {
  console.log("Finish all");
});
