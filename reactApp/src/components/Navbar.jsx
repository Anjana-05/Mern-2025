import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/contact' className='link'>Contact</Link>
            <Link to='/skills' className='link'>Skills</Link>
            <Link to='/child' className='link'>Child</Link>
            <Link to='/signup' className='link'>Signup</Link>
            <Link to='/login' className='link'>Login</Link>
            <Link to='/todo' className='link'>Todo</Link>
            <Link to='/hooks' className='link'>Hooks</Link>
        </nav>
    </div>
  )
}

export default Navbar