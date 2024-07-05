import "./AddNoteBtn.css";
import useNotes from "hooks/useNotes";
import useSelectedNote from "hooks/useSelectedNote";
import axiosInstance from "services/api";

export default function AddNoteBtn() {
  const notes = useNotes();
  const { setSelectedNoteId } = useSelectedNote();
  function addNote(note) {
    notes.set((oldNotes) => [note, ...oldNotes]);
    setSelectedNoteId(note.id);
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
