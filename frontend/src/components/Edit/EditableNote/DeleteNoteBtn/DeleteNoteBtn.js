import axios from "services/api";
import { useContext } from "react";
import { editContext } from "pages/EditPage/EditPage";
import "./DeleteNoteBtn.css";
import useEditableNote from "hooks/useEditableNote";

export default function DeleteNoteBtn() {
  const { notes } = useContext(editContext);
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
