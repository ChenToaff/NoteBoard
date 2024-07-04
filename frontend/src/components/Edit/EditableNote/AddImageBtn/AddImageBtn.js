import axios from "services/api";
import "./AddImageBtn.css";
import useSelectedNote from "hooks/useSelectedNote";

export default function AddImageBtn() {
  const { setSelectedNote, selectedNote, setImageLoading } = useSelectedNote();

  async function uploadImage(e) {
    const formData = new FormData();
    formData.set("image", e.target.files[0]);
    setImageLoading(true);
    const res = await axios.patch(`/notes/${selectedNote.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setImageLoading(false);
    setSelectedNote(res.data);
    e.target.value = "";
  }

  return (
    <button className="add-image-btn-container">
      <label>
        <input
          onInput={(e) => uploadImage(e)}
          type="file"
          accept="image/*"
          hidden
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-card-image"
          viewBox="0 0 16 16"
        >
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
        </svg>
      </label>
    </button>
  );
}
