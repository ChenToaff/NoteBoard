import NotesContainer from "components/Common/NotesContainer/NotesContainer";
import Note from "components/View/Note/Note";
import useArray from "hooks/useArray";
import { useEffect } from "react";
import axiosInstance from "services/api";

export default function Home() {
  const notes = useArray([]);

  useEffect(() => {
    async function loadData() {
      const res = await axiosInstance.get("/notes");
      notes.set(res.data);
    }
    loadData();
  }, []);
  return <NotesContainer NoteType={Note} notes={notes.array} />;
}
