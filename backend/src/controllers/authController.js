const jwt = require("jsonwebtoken");
const { ApiError } = require("../utils/ApiError");
const { JWT_SECRET, ADMIN_PASSWORD, ADMIN_USERNAME } = require("../config");

const login = (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    throw new ApiError(400, "missing values");
  }
  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    throw new ApiError(400, "Wrong username or password");
  }
  const accessToken = jwt.sign({ role: "admin" }, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.cookie("token", accessToken, {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
  });
  return res.status(200).send();
};

const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).send();
};

const check = (req, res) => {
  return res.status(200).send();
};

module.exports = { login, logout, check };
