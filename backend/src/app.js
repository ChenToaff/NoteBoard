const express = require("express");
const cors = require("cors");
const server = express();
const connectMongo = require("./db/mongoConfig");
const { PORT } = require("./config");
const path = require("path");
connectMongo();

server.use(cors());
server.use(express.json());
server.use(require("./middleware/responses"));

server.use("/api/notes", require("./routes/noteRoutes"));
server.use("/api/auth", require("./routes/authRoutes"));
server.use("/api/images", [
  /*require("./middleware/auth"),*/
  express.static(path.join(process.cwd(), "images")),
]);
server.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

server.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

server.listen(PORT, () => console.log(`server listening at port ${PORT}`));
