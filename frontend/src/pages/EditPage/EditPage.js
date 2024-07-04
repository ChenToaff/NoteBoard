import { createContext, useEffect } from "react";
import EditableNote from "components/Edit/EditableNote/EditableNote";
import NotesContainer from "components/Common/NotesContainer/NotesContainer";
import AddNoteBtn from "components/Edit/AddNoteBtn/AddNoteBtn";
import { SelectedNoteProvider } from "context/SelectedNoteContext";
import useNotes from "hooks/useNotes";
import Note from "components/View/Note/Note";
import "./EditPage.css";
import EditModal from "components/Edit/EditModal/EditModal";

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
