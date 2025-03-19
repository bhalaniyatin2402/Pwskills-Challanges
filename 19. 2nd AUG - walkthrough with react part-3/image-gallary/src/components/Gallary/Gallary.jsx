// https://api.slingacademy.com/v1/sample-data/photos?limit=20&offset=0
import { useEffect, useState } from "react";
import Image from "../Image/Image";
import axios from "axios";
import "./Gallary.css";

function Gallary() {
  const [gallaryState, setGallaryState] = useState({
    isLoading: true,
    photoList: [],
    offset: 0,
  });

  async function imageGallaryList() {
    setGallaryState((state) => ({ ...state, isLoading: true }));
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos?limit=20&offset=${gallaryState.offset}`
    );
    const result = response.data;

    setGallaryState((state) => ({
      isLoading: false,
      photoList: result.photos,
      offset: result.offset,
    }));
  }

  useEffect(() => {
    imageGallaryList();
  }, [gallaryState.offset]);

  return (
    <>
      <div className="image-gallary-wrapper">
        {gallaryState.isLoading
          ? "Loading..."
          : gallaryState.photoList.map((photo) => (
              <Image url={photo.url} key={photo.id} id={photo.id} />
            ))}
      </div>
      <div className="controller-wrapper">
        <button
          className="prev-btn"
          onClick={() =>
            setGallaryState((state) => ({
              ...state,
              offset: state.offset - 20,
            }))
          }
          disabled={gallaryState.offset <= 0}
        >
          Prev
        </button>
        <button
          className="next-btn"
          onClick={() =>
            setGallaryState((state) => ({
              ...state,
              offset: state.offset + 20,
            }))
          }
          disabled={gallaryState.offset >= 120}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Gallary;
