import { createContext } from "react";
import EditableNote from "../../components/Edit/EditableNote";
import NotesContainer from "components/Common/NotesContainer/NotesContainer";
import AddNoteBtn from "../../components/Edit/AddNoteBtn/AddNoteBtn";

export const editContext = createContext();

export default function Edit({ notes }) {
  return (
    <editContext.Provider value={{ notes }}>
      <NotesContainer NoteType={EditableNote} notes={notes.array} />
      <AddNoteBtn />
    </editContext.Provider>
  );
}
