class Customer {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  placeOrder = (menu) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(menu), Math.ceil(Math.random() * 5) * 1000)
    );
  };

  eatAndPay = (food) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(food), Math.ceil(Math.random() * 10) * 1000)
    );
  };
}

module.exports = Customer;
