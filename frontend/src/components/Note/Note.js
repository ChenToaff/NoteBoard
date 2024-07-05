import Image from "components/Image/Image";
import "./Note.css";
import useNote from "hooks/useNote";
import useSelectedNote from "hooks/useSelectedNote";

export default function Note({ noteId }) {
  const note = useNote(noteId);
  const { setSelectedNoteId, selectedNote } = useSelectedNote();
  const isSelected = selectedNote?.id === noteId;

  return (
    <div
      data-color={note.color}
      onClick={() => setSelectedNoteId(noteId)}
      className={`note rounded note-shadow ${isSelected ? "selected" : ""}`}
    >
      <h1>{note.title}</h1>
      <p className="m-0">{note.text}</p>
      <Image image={note.image} />
    </div>
  );
}
