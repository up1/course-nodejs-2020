const HttpStatus = require("http-status-codes");

const productionErrorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  } else {
    res.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR);
    res.send({
      message: error.message,
      error: {},
    });
  }
};

module.exports = productionErrorHandler;
