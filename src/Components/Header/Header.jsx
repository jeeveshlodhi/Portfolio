import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header className='headerWrapper'>
        <nav>
            <ul>
                <Link to='/about'><li>About</li></Link>
                <Link to='/project'><li>Projects</li></Link>
                <Link to='/resume'><li>Resume</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header