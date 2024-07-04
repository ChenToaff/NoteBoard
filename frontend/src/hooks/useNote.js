import useNotes from "./useNotes";

export default function useNote(noteId) {
  const notes = useNotes();
  const note = notes.array.find((note) => note.id === noteId);

  return note;
}
