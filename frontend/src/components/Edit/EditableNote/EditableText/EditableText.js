import React, { useState, useEffect, useRef } from "react";
import "./EditableText.css";
import useEditableNote from "hooks/useEditableNote";
import useUpdateEffect from "hooks/useUpdateEffect";

export default function EditableText() {
  const { setNote, note } = useEditableNote();
  const [value, setValue] = useState(note.text);
  const textAreaRef = useRef(null);

  useUpdateEffect(() => {
    setNote((prevNote) => ({ ...prevNote, text: value }));
  }, [value]);

  useEffect(() => {
    textAreaRef.current.style.height = "auto"; // Reset height to shrink if text is deleted
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set height based on content
  }, [value]);

  return (
    <textarea
      ref={textAreaRef}
      className="text-area"
      placeholder="Your text goes here"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
