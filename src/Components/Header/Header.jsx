import React, { useState } from 'react'
import menuIcon from '../../Assets/images/icon-menu.svg'
import closeIcon from '../../Assets/images/icon-close.svg'
import './header.scss'
import { Link } from 'react-router-dom'

function Header () {
  const [toggle, setToggle] = useState(false)
 
  return (
    <>
      <div id='navcard' className={toggle ? 'show' : ''}>
        <img id='close' src={closeIcon} onClick={() => setToggle(false)}></img>
        <ul>
          <Link to='/about'>
            <a href='#'>About</a>
          </Link>
          <li>
            <a href='#'>Contact Us</a>
          </li>
          <Link to='/register'>
            <a href='#' id='register'>
              Register
            </a>
          </Link>
        </ul>
      </div>

      <header className='header'>
        <span id='flex'>
          <a id='logo' href=''>
            <span>
            ART<span id='redColor'>SYNC</span>
            </span>
          </a>
        </span>

        <nav className='navbar'>
          <ul>
            <li>
            <Link to='/login'>
              <a href='#about'>Login</a>
            </Link>
            </li>
            <li>
              <Link to='/signup'>
                <button id='register'>
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <img
          src={menuIcon}
          onClick={() => setToggle(true)}
          id='menuBar'
          alt=''
        />
      </header>
    </>
  )
}

export default Header
