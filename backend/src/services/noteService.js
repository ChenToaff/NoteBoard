const NoteModel = require("../models/NoteModel");

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
    return await Note.findById(id);
  },

  updateNote: async (id, update) => {
    return await Note.findByIdAndUpdate(id, update, { new: true });
  },

  deleteNote: async (id) => {
    return await Note.findByIdAndDelete(id);
  },
};

module.exports = NoteService;
