const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config");
const { ApiError } = require("../utils/ApiError");

module.exports = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new ApiError(401, "No token provided");
  }

  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid token");
  }
};
