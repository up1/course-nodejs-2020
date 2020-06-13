const EventEmitter = require("events");

class Customer extends EventEmitter {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }

  placeOrder = (menu) => {
    setTimeout(() => {
      this.emit("decided", this, menu);
    }, Math.ceil(Math.random() * 5) * 1000);
  };

  eatAndPay = (food) => {
    setTimeout(() => {
      this.emit("leaving", food);
    }, Math.ceil(Math.random() * 10) * 1000);
  };
}

module.exports = Customer;
