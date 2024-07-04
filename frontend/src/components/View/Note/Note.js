import Image from "components/Common/Image/Image";
import "./Note.css";
import useNote from "hooks/useNote";
import useSelectedNote from "hooks/useSelectedNote";

export default function Note({ noteId }) {
  const note = useNote(noteId);
  const { setSelectedNoteId, selectedNote } = useSelectedNote();
  const isSelected = selectedNote?.id === noteId;

  return (
    <div
      onClick={() => setSelectedNoteId(noteId)}
      className={`catg-card ${isSelected ? "selected" : ""}`}
    >
      <div data-color={note.color} className="note rounded note-shadow">
        <h1>{note.title}</h1>
        <p className="m-0">{note.text}</p>
        <Image image={note.image} />
      </div>
    </div>
  );
}
