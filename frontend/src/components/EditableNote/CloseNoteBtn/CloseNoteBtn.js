import useSelectedNote from "hooks/useSelectedNote";
import "./CloseNoteBtn.css";

export default function DeleteNoteBtn() {
  const { setSelectedNoteId } = useSelectedNote();

  return (
    <button className="Delete-Btn" onClick={() => setSelectedNoteId(null)}>
      X
    </button>
  );
}
