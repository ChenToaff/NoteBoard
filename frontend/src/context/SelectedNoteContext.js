import { createContext, useEffect, useRef, useState } from "react";
import useNotes from "hooks/useNotes";
import useUpdateEffect from "hooks/useUpdateEffect";
import axiosInstance from "services/api";

export const selectedNoteContext = createContext();

export const SelectedNoteProvider = ({ children }) => {
  const notes = useNotes();
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const initialUpdateDone = useRef(false);

  useEffect(() => {
    setSelectedNote(notes.array.find((note) => note.id === selectedNoteId));
    if (selectedNoteId) {
      initialUpdateDone.current = false;
    }
  }, [selectedNoteId]);

  useUpdateEffect(() => {
    if (!selectedNote) return;
    if (!initialUpdateDone.current) {
      initialUpdateDone.current = true;
      return;
    }
    notes.filter((note) => note.id !== selectedNoteId);
    notes.lpush({
      ...selectedNote,
      updatedAt: new Date().toISOString(),
    });
    const delayFn = setTimeout(async () => {
      await axiosInstance.patch(`/notes/${selectedNote.id}`, selectedNote);
    }, 500);
    return () => clearTimeout(delayFn);
  }, [selectedNote]);

  const value = {
    setSelectedNoteId,
    setSelectedNote,
    imageLoading,
    setImageLoading,
    selectedNote,
  };

  return (
    <selectedNoteContext.Provider value={value}>
      {children}
    </selectedNoteContext.Provider>
  );
};
