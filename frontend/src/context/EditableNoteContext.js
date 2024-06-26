import { createContext, useCallback, useState, useContext } from "react";
import { editContext } from "pages/EditPage/EditPage";

export const editableNoteContext = createContext();

export const EditableNoteProvider = ({ index, children }) => {
  const { notes } = useContext(editContext);

  const setNote = useCallback(
    (update) => notes.update(index, update),
    [index, notes]
  );

  const [imageLoading, setImageLoading] = useState(false);

  const value = {
    setNote,
    imageLoading,
    setImageLoading,
  };

  return (
    <editableNoteContext.Provider value={value}>
      {children}
    </editableNoteContext.Provider>
  );
};
