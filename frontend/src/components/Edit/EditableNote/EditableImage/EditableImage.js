import Image from "components/Common/Image/Image";
import axios from "services/api";
import Loading from "components/Common/Loading/Loading";
import useSelectedNote from "hooks/useSelectedNote";
import "./EditableImage.css";

export default function EditableImage() {
  const { setSelectedNote, selectedNote, imageLoading } = useSelectedNote();

  return (
    <div className="image-container">
      {imageLoading ? (
        <Loading />
      ) : (
        <>
          <svg
            className="image-trash-can"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            onClick={() =>
              setSelectedNote((prevNote) => ({ ...prevNote, image: null }))
            }
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />{" "}
          </svg>
          <Image image={selectedNote.image} />
        </>
      )}
    </div>
  );
}
