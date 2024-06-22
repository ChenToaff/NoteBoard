import axios from "services/api";
import "./EditableText.css";
import { useContext, useState } from "react";
import useUpdateEffect from "hooks/useUpdateEffect";
import { editableNoteContext } from "components/Edit/EditableNote";

export default function EditableText({ note }) {
  const [value, setValue] = useState(note.text);
  const { setNote } = useContext(editableNoteContext);

  useUpdateEffect(() => {
    const delayFn = setTimeout(async () => {
      await axios.patch(`/notes/${note._id}`, {
        text: value,
      });
      setNote({ ...note, updatedAt: new Date().toISOString() });
    }, 500);
    return () => clearTimeout(delayFn);
  }, [value]);

  return (
    <div
      placeholder="Your text goes here"
      className="text-box"
      contentEditable="true"
      suppressContentEditableWarning
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
        }
      }}
      onInputCapture={(e) => setValue(e.currentTarget.textContent)}
    >
      {note.text}
    </div>
  );
}
