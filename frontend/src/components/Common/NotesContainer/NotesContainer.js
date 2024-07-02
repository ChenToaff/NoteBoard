import "./NotesContainer.css";
import MasonryGrid from "../MasonryGrid/MasonryGrid";

export default function NotesContainer({ children }) {
  return (
    <div className="notes-container">
      <MasonryGrid>{children} </MasonryGrid>
    </div>
  );
}
