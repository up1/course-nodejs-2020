const prepareFood = (order) => {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.ceil(Math.random() * 1) * 1000, order)
  );
};

module.exports = { prepareFood };
