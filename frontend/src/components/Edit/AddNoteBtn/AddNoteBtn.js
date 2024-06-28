import "./AddNoteBtn.css";
import useNotes from "hooks/useNotes";
import axiosInstance from "services/api";

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
          axiosInstance.post("/notes", {}).then((res) => addNote(res.data));
        }}
      />
    </div>
  );
}
