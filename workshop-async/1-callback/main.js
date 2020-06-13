const menus = ["Beer", "Chicken grill", "Ham burger"];

const placeOrder = (menu, done) => {
  setTimeout(() => done(null, menu), Math.ceil(Math.random() * 5) * 1000);
};

const prepareFood = (order, done) => {
  setTimeout(() => done(null, order), Math.ceil(Math.random() * 1) * 1000);
};

const eatAndPay = (food, done) => {
  setTimeout(() => done(null, food), Math.ceil(Math.random() * 10) * 1000);
};

const serve = (customer, menu, done) => {
  console.log(`Start serve with ${customer.name} with menu= ${menu}`);
  placeOrder(menu, (error, order) => {
    if (!error) {
      console.log(`Prepare food of ${customer.name}`);
      prepareFood(order, (error, food) => {
        if (!error) {
          console.log(`Customer ${customer.name} is eat and pay`);
          eatAndPay(food, done);
        }
      });
    }
  });
};

// Start to serve to all customers
for (let index = 1; index <= 5; index++) {
  const customer = {
    id: index,
    name: `customer_${index}`,
  };
  serve(customer, menus[index % menus.length], () => {
    console.log(`>> Done for customer${customer.name}`);
  });
}
