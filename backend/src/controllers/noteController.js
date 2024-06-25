const NoteService = require("../services/noteService");
const fs = require("fs");
const path = require("path");

const createNote = async (req, res) => {
  const note = await NoteService.createNote();
  res.status(201).json(note);
};

const getNotes = async (req, res) => {
  const notes = await NoteService.getNotes();
  res.json(notes);
};

const getNoteById = async (req, res) => {
  const note = await NoteService.getNoteById(req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

const updateNote = async (req, res) => {
  const { title, content, image, color } = req.body;
  const id = req.params.id;
  const note = NoteService.getNoteById(id);
  if (note && note.image && image) {
    const imagPath = path.join(
      process.cwd(),
      `images/${note.image.split("/").pop()}`
    );
    fs.unlink(imagPath, (err) => {});
  }
  const updatedNote = await NoteService.updateNote(req.params.id, {
    title,
    content,
    color,
  });
  if (updatedNote) {
    res.json(updatedNote);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

const deleteNote = async (req, res) => {
  const note = await NoteService.deleteNote(req.params.id);
  if (note) {
    res.json({ message: "Note removed" });
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

module.exports = { createNote, updateNote, getNotes, getNoteById, deleteNote };
