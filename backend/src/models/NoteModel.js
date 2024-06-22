const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    text: { type: String, default: "" },
    image: String,
    color: {
      type: String,
      default: "#fff",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("notes", NoteSchema);
