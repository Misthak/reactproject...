
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">

        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/professors">Professors</Link>
        <Link className="nav-link" to="/contact">Contact</Link>

      </div>
    </nav>
  )
}

export default Navbar
