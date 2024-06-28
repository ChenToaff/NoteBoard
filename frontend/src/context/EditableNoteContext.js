import { createContext, useState } from "react";
import useNotes from "hooks/useNotes";
import useUpdateEffect from "hooks/useUpdateEffect";
import axiosInstance from "services/api";

export const editableNoteContext = createContext();

export const EditableNoteProvider = ({ noteId, children }) => {
  const notes = useNotes();
  const [note, setNote] = useState(
    notes.array.find((note) => note.id === noteId)
  );
  const [imageLoading, setImageLoading] = useState(false);

  useUpdateEffect(() => {
    const index = notes.array.findIndex((element) => element.id === noteId);
    notes.update(index, { ...note, updatedAt: new Date().toISOString() });
    const delayFn = setTimeout(async () => {
      await axiosInstance.patch(`/notes/${note.id}`, note);
    }, 500);
    return () => clearTimeout(delayFn);
  }, [note]);

  const value = {
    setNote,
    imageLoading,
    setImageLoading,
    note,
  };

  return (
    <editableNoteContext.Provider value={value}>
      {children}
    </editableNoteContext.Provider>
  );
};
