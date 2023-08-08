// https://api.slingacademy.com/v1/sample-data/photos/3

import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './ImageDetails.css'
// when error get this image is set
const imageUrl = 'https://1.bp.blogspot.com/-5guLEIH3TSA/TZTHVhH0emI/AAAAAAAAAwQ/JS8Rr_63SPg/s1600/Lcastillo_ReaderSketch01.jpg'

function ImageDetails() {
    const [ photoDetail, setPhotoDetail ] = useState({})
    const { id } = useParams()
    const [ error, setError ] = useState(false)
    
    async function imageDetail() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        const result = response.data.photo

        // when image api return image does not return response
        // when image do not return image it will return error
        try {
            await axios.get(result.url)
        } catch (error) {
            if(error.response) {
                setError(true)
            }
        }
        setPhotoDetail(result)
    }

    useEffect(() => {
        imageDetail()
    }, [ ])


  return (
    <div className="image-detail-wrapper">
        <div className="image-detail-card">
            <div className="image-detail-left">
                {error ? <img src={imageUrl} alt="" /> : <img src={photoDetail.url} alt="" />}
            </div>
            <div className="image-detail-right">
                <h2>{photoDetail.title}</h2>
                <p>{photoDetail.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ImageDetails
