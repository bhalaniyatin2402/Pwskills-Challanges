import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className='image-gallary-header-wrapper'>
      <Link to="/" >
        <h1>React-Image-Gallary</h1>
      </Link>
    </header>
  )
}

export default Header
