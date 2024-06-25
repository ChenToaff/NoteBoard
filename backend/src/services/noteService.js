const NoteModel = require("../models/NoteModel");
const { NotFoundError } = require("../utils/ApiError");

const NoteService = {
  createNote: async () => {
    const note = new NoteModel();
    await note.save();
    return note;
  },

  getNotes: async () => {
    return await NoteModel.find().sort({ updatedAt: -1 });
  },

  getNoteById: async (id) => {
    const note = await NoteModel.findById(id);
    if (!note) throw new NotFoundError("Note not found");
    return note;
  },

  updateNote: async (id, update) => {
    const updatedNote = await NoteModel.findByIdAndUpdate(id, update, {
      new: true,
    });
    if (!updatedNote) throw new NotFoundError("Note not found");
    return updatedNote;
  },

  deleteNote: async (id) => {
    const deletedNote = await NoteModel.findByIdAndDelete(id);
    if (!deletedNote) throw new NotFoundError("Note not found");
    return deletedNote;
  },
};

module.exports = NoteService;
