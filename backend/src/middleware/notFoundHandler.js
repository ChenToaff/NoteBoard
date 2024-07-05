const { ApiError } = require("../utils/ApiError");

// Middleware to handle 404 errors
function notFoundHandler(req, res, next) {
  const error = new ApiError(404, "Resource not found");
  next(error);
}
module.exports = notFoundHandler;
