import { useContext } from "react";
import { notesContext } from "context/NotesContext";

const useNotes = () => {
  const context = useContext(notesContext);
  if (!context) {
    throw new Error("useNotes must be used within an NotesProvider");
  }
  return context;
};

export default useNotes;
