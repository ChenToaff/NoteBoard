import axios from "services/api";
import "./AddNoteBtn.css";
import useNotes from "hooks/useNotes";

export default function AddNoteBtn() {
  const notes = useNotes();
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
