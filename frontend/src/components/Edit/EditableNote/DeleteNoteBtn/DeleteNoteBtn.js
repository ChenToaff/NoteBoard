import useEditableNote from "hooks/useEditableNote";
import useNotes from "hooks/useNotes";
import axiosInstance from "services/api";
import "./DeleteNoteBtn.css";

export default function DeleteNoteBtn() {
  const notes = useNotes();
  const { note } = useEditableNote();

  function handleDelete(note) {
    notes.set((oldNotes) =>
      oldNotes.filter((element) => element.id != note.id)
    );
    axiosInstance.delete(`/notes/${note.id}`);
  }
  return (
    <button className="Delete-Btn" onClick={() => handleDelete(note)}>
      X
    </button>
  );
}
