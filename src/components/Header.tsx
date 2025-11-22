
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <div className="brand">
        <Link to="/">
          <img src={Logo} className="logo" alt="Site logo" />
        </Link>
      </div>
      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/projects">Projects</Link>
        <Link to="/lab">Lab</Link>
      </nav>
    </header>
  )
}
