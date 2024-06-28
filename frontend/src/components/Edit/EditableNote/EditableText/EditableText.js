import axios from "services/api";
import "./EditableText.css";
import { useState } from "react";
import useUpdateEffect from "hooks/useUpdateEffect";
import useEditableNote from "hooks/useEditableNote";

export default function EditableText() {
  const { setNote, note } = useEditableNote();
  const [value, setValue] = useState(note.text);

  useUpdateEffect(() => {
    setNote((prevNote) => ({ ...prevNote, text: value }));
  }, [value]);
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
