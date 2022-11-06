const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Ineternal Server Error";

  // Wrong Mongodb Id error
  if (err.name === "CastError") {
    const message = `Resourse not Found. Invalid:${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
