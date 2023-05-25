import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import LinkedInIcon from '../../Assets/Images/linkedinIcon.png';
import GitHubIcon from '../../Assets/Images/githubIcon.png';

const NavBar = () => {
  return (
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
        <div className='icons'>
        <li>
          <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
            <img className='icon1' src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="github.com" target="_blank" rel="noopener noreferrer">
            <img className='icon2'src={GitHubIcon} alt="GitHub" />
          </a>
        </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;