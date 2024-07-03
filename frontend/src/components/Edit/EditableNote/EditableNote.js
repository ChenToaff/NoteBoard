import DeleteNoteBtn from "./DeleteNoteBtn/DeleteNoteBtn";
import EditableTitle from "./EditableTitle/EditableTitle";
import EditableText from "./EditableText/EditableText";
import EditableImage from "./EditableImage/EditableImage";
import ColorPicker from "./ColorPicker/ColorPicker";
import AddImageBtn from "./AddImageBtn/AddImageBtn";
import useSelectedNote from "hooks/useSelectedNote";
import "./EditableNote.css";

export default function EditableNote() {
  const { selectedNote, setSelectedNoteId } = useSelectedNote();

  if (!selectedNote) return null;

  return (
    <div className="catg-card">
      <div data-color={selectedNote.color} className="Editable-Note">
        <EditableTitle />
        <DeleteNoteBtn />
        <EditableText />
        <EditableImage />
        <div className="input-group ">
          <AddImageBtn />
          <ColorPicker />
        </div>
        <div className="Last-Modified">
          {selectedNote.updatedAt?.slice(0, 19).replace("T", " ")}
        </div>
      </div>
    </div>
  );
}
