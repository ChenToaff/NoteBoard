import { createContext, useEffect } from "react";
import EditableNote from "components/EditableNote/EditableNote";
import NotesContainer from "components/NotesContainer/NotesContainer";
import AddNoteBtn from "components/AddNoteBtn/AddNoteBtn";
import { SelectedNoteProvider } from "context/SelectedNoteContext";
import useNotes from "hooks/useNotes";
import Note from "components/Note/Note";
import "./EditPage.css";
import EditModal from "components/EditModal/EditModal";

export const editContext = createContext();

export default function Edit() {
  const notes = useNotes();
  return (
    <>
      <SelectedNoteProvider>
        <NotesContainer notes={notes.array}>
          {notes.array.map((note) => (
            <Note noteId={note.id} key={note.id} />
          ))}
        </NotesContainer>
        <AddNoteBtn />
        <EditModal />
      </SelectedNoteProvider>
    </>
  );
}
