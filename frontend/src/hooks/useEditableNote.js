import { useContext } from "react";
import { editableNoteContext } from "context/EditableNoteContext";

const useEditableNote = () => {
  const context = useContext(editableNoteContext);
  if (!context) {
    throw new Error(
      "useEditableNote must be used within an EditableNoteProvider"
    );
  }
  return context;
};

export default useEditableNote;
