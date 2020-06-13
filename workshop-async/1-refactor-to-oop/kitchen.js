const prepareFood = (order, done) => {
    setTimeout(() => done(null, order), Math.ceil(Math.random() * 1) * 1000)
}

module.exports = { prepareFood }