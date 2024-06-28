import { createContext, useEffect } from "react";
import EditableNote from "components/Edit/EditableNote/EditableNote";
import NotesContainer from "components/Common/NotesContainer/NotesContainer";
import AddNoteBtn from "components/Edit/AddNoteBtn/AddNoteBtn";
import { EditableNoteProvider } from "context/EditableNoteContext";
import useNotes from "hooks/useNotes";

export const editContext = createContext();

export default function Edit() {
  const notes = useNotes();
  return (
    <>
      <NotesContainer notes={notes.array}>
        {notes.array.map((note) => (
          <EditableNoteProvider key={note.id} noteId={note.id}>
            <EditableNote />
          </EditableNoteProvider>
        ))}
      </NotesContainer>
      <AddNoteBtn />
    </>
  );
}
