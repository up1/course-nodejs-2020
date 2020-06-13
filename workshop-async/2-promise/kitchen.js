const prepareFood = (order) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(order);
    }, Math.ceil(Math.random() * 1) * 1000)
  );
};

module.exports = { prepareFood };
