import axios from "services/api";
import "./AddNoteBtn.css";
import { useContext } from "react";
import { editContext } from "pages/EditPage/EditPage";

export default function AddNoteBtn() {
  const { notes } = useContext(editContext);
  function addNote(note) {
    notes.set((oldNotes) => [note, ...oldNotes]);
    window.scrollTo({ top: 0, left: 0 });
  }
  return (
    <div className="fixed-bottom m-3">
      <div
        className="AddNoteBtn note-shadow"
        onClick={() => {
          axios
            .post("/notes", {})
            .then((res) => addNote(res.data))
            .catch(() => alert("failure!"));
        }}
      />
    </div>
  );
}
