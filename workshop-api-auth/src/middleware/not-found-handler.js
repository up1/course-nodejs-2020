const HttpStatus = require("http-status-codes");
const NotFoundError = require("../errors/not-found-error");

const notFoundHandler = (error, req, res, next) => {
  if (error instanceof NotFoundError) {
    return res.status(HttpStatus.NOT_FOUND).send({
      httpStatus: HttpStatus.NOT_FOUND,
      message: error.message,
      error: {},
    });
  }
  next(error);
};

module.exports = notFoundHandler;
