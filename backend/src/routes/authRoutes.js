const router = require("express").Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", authController.login);
router.post("/logout", authMiddleware, authController.logout);
router.get("/check", authMiddleware, authController.check);

module.exports = router;
