// Header.js
// Header.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import your styles

const Header = () => {
  const location = useLocation();

  return (
    <header>
      {location.pathname === '/' ? null : (
        <nav>
          <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link> {/* Add this line for the Skills link */}
                    </li>
                    <li>
                        <Link to="/download-resume">Download Resume</Link> {/* Add this line */}
                    </li>
                </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
