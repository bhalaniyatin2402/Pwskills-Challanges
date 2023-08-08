import { Link } from 'react-router-dom'
import './Image.css'

function Image({ url, id }) {
  return (
    <div className="image-card-wrapper">
      <Link to={`photo/${id}`}>
        <img
            src={url}
        />
      </Link>
    </div>
  )
}

export default Image
