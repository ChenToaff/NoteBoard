const NoteService = require("../services/noteService");
const fs = require("fs");
const path = require("path");
const asyncHandler = require("../middleware/asyncHandler");
const { NotFoundError } = require("../utils/ApiError");

const createNote = asyncHandler(async (req, res) => {
  const note = await NoteService.createNote();
  res.status(201).json(note);
});

const getNotes = asyncHandler(async (req, res) => {
  const notes = await NoteService.getNotes();
  res.json(notes);
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await NoteService.getNoteById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    throw new NotFoundError("Note not found");
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, content, color, image } = req.body;
  const id = req.params.id;
  const note = await NoteService.getNoteById(id);
  let imageSRC = note.image;

  if (req.body.image === null) {
    imageSRC = null;
  } else if (req.file) {
    if (note.image) {
      const imagePath = path.join(
        process.cwd(),
        `/images/${note.image.split("/").pop()}`
      );
      try {
        await fs.unlink(imagePath);
      } catch (err) {
        console.error("Error deleting previous image:", err);
      }
    }
    imageSRC = `/api/images/${req.file.filename}`;
  }
  const updatedNote = await NoteService.updateNote(req.params.id, {
    title,
    content,
    color,
    image: imageSRC,
  });
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    throw new NotFoundError("Note not found");
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await NoteService.deleteNote(req.params.id);
  if (note) {
    res.json({ message: "Note removed" });
  } else {
    throw new NotFoundError("Note not found");
  }
});

module.exports = { createNote, updateNote, getNotes, getNoteById, deleteNote };
