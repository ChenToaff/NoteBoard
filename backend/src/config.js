require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || "admin",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "admin",
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1/Notes",
  JWT_SECRET:
    process.env.JWT_SECRET ||
    require("crypto").randomBytes(256).toString("base64"),
};
