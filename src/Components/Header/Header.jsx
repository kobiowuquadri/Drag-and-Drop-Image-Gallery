import React, { useState, useEffect } from 'react';
import menuIcon from '../../Assets/images/icon-menu.svg';
import closeIcon from '../../Assets/images/icon-close.svg';
import './header.scss';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth(); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <div id='navcard' className={toggle ? 'show' : ''}>
        <img id='close' src={closeIcon} onClick={() => setToggle(false)} alt="Close" />
        <ul>
          <Link to='/login'>
            <a href='#'>Login</a>
          </Link>
          {user ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <Link to='/signup'>
              <a href='#' id='register'>
                Register
              </a>
            </Link>
          )}
        </ul>
      </div>

      <header className='header'>
        <span id='flex'>
          <a id='logo' href='/'>
            <span>
              ART<span id='redColor'>SYNC</span>
            </span>
          </a>
        </span>

        <nav className='navbar'>
          <ul>
            {user ? ( 
              <li>
                <button id='regsiter' onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to='/login'>
                    <a href='#about'>Login</a>
                  </Link>
                </li>
                <li>
                  <Link to='/signup'>
                    <button id='register'>Register</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <img
          src={menuIcon}
          onClick={() => setToggle(true)}
          id='menuBar'
          alt='Menu'
        />
      </header>
    </>
  );
}

export default Header;
