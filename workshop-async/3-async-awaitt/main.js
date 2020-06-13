const Customer = require("./customer.js");
const kitchen = require("./kitchen.js");

const serve = async (customer, menu) => {
  console.log(`Start serve with ${customer.name} with menu= ${menu}`);
  let order = await customer.placeOrder(menu);
  console.log(`Prepare food of ${customer.name} with order=${order}`);
  let food = await kitchen.prepareFood(order);
  console.log(`Customer ${customer.name} is eat and pay with food=${food}`);
  let result = await customer.eatAndPay(food);
  return result;
};

// Start to serve to all customers
const menus = ["Beer", "Chicken grill", "Ham burger"];
const customers = [];
for (let index = 1; index <= 5; index++) {
  const customer = new Customer(index, `customer_${index}`);
  customers.push(customer);
}

customers.map(async (customer) => {
  await serve(customer, menus[Math.floor(Math.random() * 10) % menus.length]).then(
    (result) => {
      console.log(`>> Done for customer=${customer.name} with food=${result}`);
    }
  );
});
