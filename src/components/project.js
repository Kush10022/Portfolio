// Projects.js
import React from 'react';
import '../styles/Projects.css'; // Import your styles

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="project">
          <h3>Metropolitan-Museum-of-Art</h3>
          <p>Description of Project 1...</p>
          <a href="https://github.com/Kush10022/Metropolitan-Museum-of-Art.git" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2...</p>
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};
export default Projects;
