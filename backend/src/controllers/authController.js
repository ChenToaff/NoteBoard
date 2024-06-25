const jwt = require("jsonwebtoken");
const { JWT_SECRET, ADMIN_PASSWORD, ADMIN_USERNAME } = require("../config");

const login = async (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("missing values");
  }
  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return res.status(404).send("Wrong username or password");
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

const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).send();
};

const check = async (req, res) => {
  return res.status(200).send();
};

module.exports = { login, logout, check };
