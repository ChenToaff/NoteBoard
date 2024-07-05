const express = require("express");
const cors = require("cors");
const server = express();
const connectMongo = require("./db/mongoConfig");
const { PORT } = require("./config");
const path = require("path");
const cookieParser = require("cookie-parser");
connectMongo();

server.use(cors());
server.use(express.json());
server.use(cookieParser());
server.use(require("./middleware/responses"));

server.use("/api/notes", require("./routes/noteRoutes"));
server.use("/api/auth", require("./routes/authRoutes"));
server.use("/api/images", [
  /*require("./middleware/auth"),*/
  express.static(path.join(process.cwd(), "images")),
]);

server.use(require("./middleware/notFoundHandler"));
server.use(require("./middleware/errorHandler"));

server.listen(PORT, () => console.log(`server listening at port ${PORT}`));
