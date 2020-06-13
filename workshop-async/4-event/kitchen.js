const prepareFood = (order) => {
  setTimeout(() => {
    order.emit('prepared', order);
  }, Math.ceil(Math.random() * 1) * 1000);
};

module.exports = { prepareFood };