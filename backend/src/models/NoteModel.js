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
NoteSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtuals are included when converting a document to JSON/objects
NoteSchema.set("toJSON", { virtuals: true });
NoteSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("notes", NoteSchema);
