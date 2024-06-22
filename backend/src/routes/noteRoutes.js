const router = require("express").Router();
const noteController = require("../controllers/noteController");
const fileUpload = require("../middleware/fileUpload");

router.delete("/:id", noteController.deleteNote);
router.post("/", noteController.createNote);
router.get("/", noteController.getNotes);
router.patch("/:id", fileUpload, noteController.updateNote);

module.exports = router;
