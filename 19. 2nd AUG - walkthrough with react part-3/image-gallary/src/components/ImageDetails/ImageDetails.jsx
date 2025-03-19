// https://api.slingacademy.com/v1/sample-data/photos/3

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ImageDetails.css";
// when error get this image is set
const imageUrl =
  "https://1.bp.blogspot.com/-5guLEIH3TSA/TZTHVhH0emI/AAAAAAAAAwQ/JS8Rr_63SPg/s1600/Lcastillo_ReaderSketch01.jpg";

function ImageDetails() {
  const { id } = useParams();
  const [imageDetailState, setImageDetailState] = useState({
    photoDetail: {},
    error: false,
  });

  async function imageDetail() {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    const result = response.data.photo;

    // when image api return image does not return response
    // when image do not return image it will return error
    try {
      await axios.get(result.url);
    } catch (error) {
      if (error.response) {
        setImageDetailState((state) => ({ ...state, error: true }));
      }
    }
    setImageDetailState((state) => ({ ...state, photoDetail: result }));
  }

  useEffect(() => {
    imageDetail();
  }, []);

  return (
    <div className="image-detail-wrapper">
      <div className="image-detail-card">
        <div className="image-detail-left">
          {imageDetailState.error ? (
            <img src={imageUrl} alt="" />
          ) : (
            <img src={imageDetailState.photoDetail.url} alt="" />
          )}
        </div>
        <div className="image-detail-right">
          <h2>{imageDetailState.photoDetail.title}</h2>
          <p>{imageDetailState.photoDetail.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;
