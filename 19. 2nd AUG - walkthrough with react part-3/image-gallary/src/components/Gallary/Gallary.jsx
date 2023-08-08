// https://api.slingacademy.com/v1/sample-data/photos?limit=20&offset=0
import { useEffect, useState } from "react"
import Image from "../Image/Image"
import axios from "axios"
import './Gallary.css'

function Gallary() {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ photoList, setPhotoList ] = useState([])
    const [ offset, setOffset ] = useState(0)

    async function imageGallaryList() {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?limit=20&offset=${offset}`)
        const result = response.data

        setOffset(result.offset)
        setPhotoList(result.photos)
        setIsLoading(false)
    }

    useEffect(() => {
        imageGallaryList()
    }, [ offset ])
    
  return (
    <>
        <div className="image-gallary-wrapper">
            {
                isLoading 
                ? 'Loading...' 
                : photoList.map(photo => <Image url={photo.url} key={photo.id} id={photo.id} /> )
            }
        </div>
        <div className="controller-wrapper">
            <button className="prev-btn" onClick={() => setOffset(offset - 20)} disabled={offset <= 0}>Prev</button>
            <button className="next-btn" onClick={() => setOffset(offset + 20)} disabled={offset >= 120}>Next</button>
        </div>
    </>
  )
}

export default Gallary