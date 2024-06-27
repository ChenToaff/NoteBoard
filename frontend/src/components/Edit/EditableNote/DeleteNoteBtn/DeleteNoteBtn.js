import axios from "services/api";
import "./DeleteNoteBtn.css";
import useEditableNote from "hooks/useEditableNote";
import useNotes from "hooks/useNotes";

export default function DeleteNoteBtn() {
  const notes = useNotes();
  const { note } = useEditableNote();

  function handleDelete(note) {
    notes.set((oldNotes) =>
      oldNotes.filter((element) => element._id != note._id)
    );
    axios.delete(`/notes/${note._id}`).catch(() => {
      alert("failure!");
      window.location.reload(true);
    });
  }
  return (
    <button className="Delete-Btn" onClick={() => handleDelete(note)}>
      X
    </button>
  );
}
