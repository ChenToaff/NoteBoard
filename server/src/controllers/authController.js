const login = async (req, res) => {
  let { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).send("missing values");
  }
  const access_token = jwt.sign({ role: "admin" }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return res.status(200).send(access_token);
};

module.exports = { login };
