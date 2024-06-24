const router = require("express").Router();
const noteController = require("../controllers/noteController");
const authMiddleware = require("../middleware/authMiddleware");
const fileUpload = require("../middleware/fileUpload");

router.delete("/:id", authMiddleware, noteController.deleteNote);
router.post("/", authMiddleware, noteController.createNote);
router.get("/", authMiddleware, noteController.getNotes);
router.patch("/:id", authMiddleware, fileUpload, noteController.updateNote);

module.exports = router;
