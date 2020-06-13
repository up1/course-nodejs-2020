class Customer {
  
  constructor(id, name) {
      this.id = id
      this.name = name
  }

  placeOrder = (menu, done) => {
    setTimeout(() => done(null, menu), Math.ceil(Math.random() * 5) * 1000)
  }

  eatAndPay = (food, done) => {
    setTimeout(() => done(null, food), Math.ceil(Math.random() * 10) * 1000)
  }
}

module.exports = Customer
