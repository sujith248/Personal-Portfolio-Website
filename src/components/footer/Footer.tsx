import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <div className='nav-links-container'>
          <ul className='nav-links'>
            <li>
              <a href='#about' className='navbar-link'>
                About
              </a>
            </li>
            <li>
              <a href='#experience' className='navbar-link'>
                Experience
              </a>
            </li>
            {/* <li>
              <a href='#projects' className='navbar-link'>
                Projects(In progress...)
              </a>
            </li> */}
            <li>
              <a href='#contact' className='navbar-link'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Sujith Dachepally. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
