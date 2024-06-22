import "./Image.css";
export default function Image({ image }) {
  if (image) {
    return <img loading="lazy" className="note-image" src={image} />;
  }
}
