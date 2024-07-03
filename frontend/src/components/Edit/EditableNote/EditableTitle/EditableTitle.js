import axios from "services/api";
import { useState } from "react";
import useUpdateEffect from "hooks/useUpdateEffect";
import "./EditableTitle.css";
import useSelectedNote from "hooks/useSelectedNote";

export default function EditableTitle() {
  const { setSelectedNote, selectedNote } = useSelectedNote();
  const [value, setValue] = useState(selectedNote.title);

  useUpdateEffect(() => {
    setSelectedNote((prevNote) => ({ ...prevNote, title: value }));
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
