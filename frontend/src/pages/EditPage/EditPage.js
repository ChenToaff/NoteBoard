import { createContext, useEffect } from "react";
import EditableNote from "components/Edit/EditableNote/EditableNote";
import NotesContainer from "components/Common/NotesContainer/NotesContainer";
import AddNoteBtn from "components/Edit/AddNoteBtn/AddNoteBtn";
import useArray from "hooks/useArray";
import axiosInstance from "services/api";
import { EditableNoteProvider } from "context/EditableNoteContext";

export const editContext = createContext();

export default function Edit() {
  const notes = useArray([]);

  useEffect(() => {
    async function loadData() {
      const res = await axiosInstance.get("/notes");
      notes.set(res.data);
    }
    loadData();
  }, []);

  return (
    <editContext.Provider value={{ notes }}>
      <NotesContainer notes={notes.array}>
        {notes.array.map((note, index) => (
          <EditableNoteProvider key={index} index={index}>
            <EditableNote />
          </EditableNoteProvider>
        ))}
      </NotesContainer>
      <AddNoteBtn />
    </editContext.Provider>
  );
}
