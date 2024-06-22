import NotesContainer from "components/Common/NotesContainer/NotesContainer";
import Note from "../../components/view/Note/Note";

export default function Home({ notes }) {
  return <NotesContainer NoteType={Note} notes={notes.array} />;
}
