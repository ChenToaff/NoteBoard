import useSelectedNote from "hooks/useSelectedNote";
import { Modal } from "react-bootstrap";
import EditableNote from "../EditableNote/EditableNote";
import "./EditModal.css";

export default function EditModal() {
  const { selectedNote, setSelectedNoteId } = useSelectedNote();

  return (
    <Modal
      className="edit-modal"
      show={!!selectedNote}
      animation={false}
      onHide={() => setSelectedNoteId(null)}
    >
      <EditableNote />
    </Modal>
  );
}
