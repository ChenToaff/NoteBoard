import "./Image.css";
export default function Image({ image }) {
  if (image) {
    return (
      <div className="image-container">
        <img loading="lazy" className="note-image" src={image} />
      </div>
    );
  }
}
