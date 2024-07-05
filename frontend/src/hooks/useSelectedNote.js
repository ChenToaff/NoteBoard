import { useContext } from "react";
import { selectedNoteContext } from "context/SelectedNoteContext";

const useSelectedNote = () => {
  const context = useContext(selectedNoteContext);
  if (!context) {
    throw new Error(
      "useSelectedNote must be used within an SelectedNoteProvider"
    );
  }
  return context;
};

export default useSelectedNote;
