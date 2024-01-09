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
          <p>Independently developed a robust Web API using Express and Node.js, facilitating efficient data management and enhancing the museum's online presence. 
        Utilized Next.js for the front end and integrated a MongoDB database to create a modern, responsive website that improved user engagement and provided a dynamic online experience for museum visitors. 
          </p>
          <a href="https://github.com/Kush10022/Metropolitan-Museum-of-Art.git" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project">
          <h3>Ticket Kart</h3>
          <p>The vision for TicketKart is to provide a reliable, efficient, and user-friendly platform for concert 
            promoters and customers, enabling them to seamlessly manage events, sell and purchase tickets, 
            and select preferred seats. Comprehensive solution includes the ability to add venue information, 
            making TicketKart the go-to platform for all concert-related needs. 
            My goal is to make TicketKart the most trusted and preferred ticket sales system in the market.</p>
          <a href="https://github.com/Kush10022/TicketMaster" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project">
          <h3>Normal website using multer and bodyparser</h3>
          <p>This website incorporates Express for handling web routes and employs two key middleware packages: 
            body-parser and multer. body-parser is used for parsing incoming request bodies, making it easier 
            to extract and handle form data, especially URL-encoded data. multer is specialized for handling 
            multipart/form-data, which is primarily used for file uploads. This middleware is configured to 
            facilitate image uploading, storing them in a designated directory. The script's functionality includes 
            handling various web page requests, processing form submissions, and managing image uploads.</p>
          <a href="https://github.com/Kush10022/MulterAndBodyParser" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};
export default Projects;
