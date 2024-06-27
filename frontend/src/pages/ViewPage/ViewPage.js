import NotesContainer from "components/Common/NotesContainer/NotesContainer";
import Note from "components/View/Note/Note";
import useNotes from "hooks/useNotes";

export default function Home() {
  const notes = useNotes();

  return (
    <NotesContainer>
      {notes.array.map((note, index) => (
        <Note key={index} note={note} index={index} />
      ))}
    </NotesContainer>
  );
}
