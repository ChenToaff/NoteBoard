import axios from "services/api";
import { useContext, useState } from "react";
import useUpdateEffect from "hooks/useUpdateEffect";
import "./EditableTitle.css";
import useEditableNote from "hooks/useEditableNote";

export default function EditableTitle({ note }) {
  const [value, setValue] = useState(note.title);
  const { setNote } = useEditableNote();

  useUpdateEffect(() => {
    const delayFn = setTimeout(async () => {
      await axios.patch(`/notes/${note._id}`, {
        title: value,
      });
      setNote({ ...note, updatedAt: new Date().toISOString() });
    }, 500);
    return () => clearTimeout(delayFn);
  }, [value]);

  return (
    <input
      placeholder="Title"
      className="Edit-Title"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
}
