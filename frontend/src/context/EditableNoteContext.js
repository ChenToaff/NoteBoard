import { createContext, useCallback, useEffect, useState } from "react";
import useNotes from "hooks/useNotes";
import useUpdateEffect from "hooks/useUpdateEffect";
import axiosInstance from "services/api";

export const editableNoteContext = createContext();

export const EditableNoteProvider = ({ index, children }) => {
  const notes = useNotes();
  const [note, setNote] = useState(notes.array[index]);
  const [imageLoading, setImageLoading] = useState(false);

  useUpdateEffect(() => {
    notes.update(index, { ...note, updatedAt: new Date().toISOString() });
    const delayFn = setTimeout(async () => {
      await axiosInstance.patch(`/notes/${note._id}`, note);
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
