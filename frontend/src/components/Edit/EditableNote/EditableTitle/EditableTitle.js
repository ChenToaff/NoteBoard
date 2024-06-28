import axios from "services/api";
import { useState } from "react";
import useUpdateEffect from "hooks/useUpdateEffect";
import "./EditableTitle.css";
import useEditableNote from "hooks/useEditableNote";

export default function EditableTitle() {
  const { setNote, note } = useEditableNote();
  const [value, setValue] = useState(note.title);

  useUpdateEffect(() => {
    setNote((prevNote) => ({ ...prevNote, title: value }));
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
