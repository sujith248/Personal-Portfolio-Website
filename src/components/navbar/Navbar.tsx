import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav id='desktop-nav'>
        <div className='logo'>Sujith Dachepally</div>
        <div>
          <ul className='nav-links'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id='hamburger-nav'>
        <div className='logo'>John Doe</div>
        <div className='hamburger-menu'>
          <div
            className={`hamburger-icon ${toggleMenu && 'open'}`}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${toggleMenu && 'open'}`}>
            <li>
              <a href='#about' onClick={() => setToggleMenu(!toggleMenu)}>
                About
              </a>
            </li>
            <li>
              <a href='#experience' onClick={() => setToggleMenu(!toggleMenu)}>
                Experience
              </a>
            </li>
            <li>
              <a href='#projects' onClick={() => setToggleMenu(!toggleMenu)}>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' onClick={() => setToggleMenu(!toggleMenu)}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
