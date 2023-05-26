import React from 'react';
import './Projects.scss';
import Icon1 from '../../Assets/Images/boaticon.png';
import Icon2 from '../../Assets/Images/drumsicon.png';
import Icon3 from '../../Assets/Images/planeicon.png';
// import Icon4 from '../../Assets/Images/';

const Projects = () => {
  return (
    <div className="projects-container">
      <ul className='projects-ul'>
        <li className="project">
          <img className="project-icon" src={Icon1} alt="Project 1" />
          <div className="project-title">Fine Tune Marine</div>
          <div className="project-description">Produced the design and code of a dynamic website for a small business. Utilized HTML, SASS, React, JavaScript, and Web APIs. to create a visually appealing and user-friendly interface..</div>
        </li>
        <li className="project">
          <img className="project-icon" src={Icon2} alt="Project 2" />
          <div className="project-title">Project 2</div>
          <div className="project-description">Longer text for Project 2...</div>
        </li>
        <li className="project">
          <img className="project-icon" src={Icon3} alt="Project 3" />
          <div className="project-title">Project 3</div>
          <div className="project-description">Longer text for Project 3...</div>
        </li>
        {/* <li className="project">
          <img className="project-icon" src={Icon4} alt="Project 4" />
          <div className="project-title">Project 4</div>
          <div className="project-description">Longer text for Project 4...</div>
        </li> */}
      </ul>
    </div>
  );
};

export default Projects;