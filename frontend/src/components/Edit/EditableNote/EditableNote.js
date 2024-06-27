import DeleteNoteBtn from "./DeleteNoteBtn/DeleteNoteBtn";
import EditableTitle from "./EditableTitle/EditableTitle";
import EditableText from "./EditableText/EditableText";
import EditableImage from "./EditableImage/EditableImage";
import ColorPicker from "./ColorPicker/ColorPicker";
import AddImageBtn from "./AddImageBtn/AddImageBtn";
import useEditableNote from "hooks/useEditableNote";
import "./EditableNote.css";

export default function EditableNote() {
  const { note } = useEditableNote();

  return (
    <div className="catg-card">
      <div data-color={note.color} className="Editable-Note">
        <EditableTitle />
        <DeleteNoteBtn />
        <EditableText />
        <EditableImage />
        <div className="input-group ">
          <AddImageBtn />
          <ColorPicker />
        </div>
        <div className="Last-Modified">
          {note.updatedAt?.slice(0, 19).replace("T", " ")}
        </div>
      </div>
    </div>
  );
}
