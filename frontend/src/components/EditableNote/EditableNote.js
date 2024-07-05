import DeleteNoteBtn from "./DeleteNoteBtn/DeleteNoteBtn";
import CloseNoteBtn from "./CloseNoteBtn/CloseNoteBtn";
import EditableTitle from "./EditableTitle/EditableTitle";
import EditableText from "./EditableText/EditableText";
import EditableImage from "./EditableImage/EditableImage";
import ColorPicker from "./ColorPicker/ColorPicker";
import AddImageBtn from "./AddImageBtn/AddImageBtn";
import useSelectedNote from "hooks/useSelectedNote";
import "./EditableNote.css";

export default function EditableNote() {
  const { selectedNote } = useSelectedNote();

  if (!selectedNote) return null;

  return (
    <div className="Editable-Note" data-color={selectedNote.color}>
      <EditableTitle />
      <CloseNoteBtn />
      <EditableText />
      <EditableImage />
      <div className="note-options-container">
        <AddImageBtn />
        <ColorPicker />
        <DeleteNoteBtn />
      </div>
      <div className="Last-Modified">
        {selectedNote.updatedAt?.slice(0, 19).replace("T", " ")}
      </div>
    </div>
  );
}
