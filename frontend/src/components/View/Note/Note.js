import Image from "components/Common/Image/Image";
import "./Note.css";

export default function Note({ note }) {
  return (
    <div className="catg-card">
      <div data-color={note.color} className="note rounded note-shadow">
        <h1>{note.title}</h1>
        <p className="m-0">{note.text}</p>
        <Image image={note.image} />
      </div>
    </div>
  );
}
