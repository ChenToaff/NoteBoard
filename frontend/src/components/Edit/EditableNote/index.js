import DeleteNoteBtn from "./Header/DeleteNoteBtn";
import EditableTitle from "./Header/EditableTitle";
import EditableText from "./Main/EditableText";
import EditableImage from "./Main/EditableImage";
import ColorPicker from "./Footer/ColorPicker";
import AddImageBtn from "./Footer/AddImageBtn";
import "./index.css";
import { createContext, useContext, useState } from "react";
import Loading from "components/Common/Loading/Loading";
import { editContext } from "pages/EditPage/EditPage";
import { useCallback } from "react";

export const editableNoteContext = createContext();

export default function EditableNote({ note, index }) {
  const { notes } = useContext(editContext);
  const setNote = useCallback((update) => notes.update(index, update), [index]);

  const [imageLoading, setImageLoading] = useState(false);

  return (
    <editableNoteContext.Provider value={{ setNote }}>
      <div class="catg-card">
        <div data-color={note.color} className="Editable-Note">
          <EditableTitle note={note} />
          <DeleteNoteBtn note={note} />
          <EditableText note={note} />
          {imageLoading ? (
            <Loading />
          ) : (
            <EditableImage {...{ note, setImageLoading }} />
          )}
          <div className="input-group ">
            <AddImageBtn {...{ note, setImageLoading }} />
            <ColorPicker note={note} />
          </div>

          <div className="Last-Modified">
            {note.updatedAt?.slice(0, 19).replace("T", " ")}
          </div>
        </div>
      </div>
    </editableNoteContext.Provider>
  );
}
