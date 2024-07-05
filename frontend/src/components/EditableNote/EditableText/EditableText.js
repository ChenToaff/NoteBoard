import React, { useState, useEffect, useRef } from "react";
import "./EditableText.css";
import useSelectedNote from "hooks/useSelectedNote";
import useUpdateEffect from "hooks/useUpdateEffect";

export default function EditableText() {
  const { setSelectedNote, selectedNote } = useSelectedNote();
  const [value, setValue] = useState(selectedNote.text);
  const textAreaRef = useRef(null);

  useUpdateEffect(() => {
    setSelectedNote((prevNote) => ({ ...prevNote, text: value }));
  }, [value]);

  useEffect(() => {
    textAreaRef.current.style.height = "auto"; // Reset height to shrink if text is deleted
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set height based on content
  }, [value]);

  return (
    <textarea
      autoFocus
      ref={textAreaRef}
      className="text-area"
      placeholder="Your text goes here"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
