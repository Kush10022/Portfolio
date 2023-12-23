// // Home.js
// import React from 'react';
// import '../styles/Home.css'; // Import your styles

// const Home = () => {
//   return (
//     <section id="home">
//       <div className="home-container">
//         <h2>Welcome to My Portfolio</h2>
//         <p>Explore my projects, learn about my skills, and get in touch!</p>
//       </div>
//     </section>
//   );
// };
// export default Home;

// Home.js
// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import '../styles/Home.css'; // Import your styles;
import profilePhoto from '../profile-photo.jpg'; // Import your profile photo

const Home = () => {
  let navigate = useNavigate();

  return (
    <section id="home">
      <div className="home-container">
        {/* ... */}
        <img src={profilePhoto} alt="Your Name" className="profile-photo" />
        <h2>Welcome to My Portfolio</h2>
         <p>Explore my projects, learn about my skills, and get in touch!</p>
        <button onClick={() => navigate('/about')}>About Me</button>
        <button onClick={() => navigate('/projects')}>Projects</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
        <button onClick={() => navigate('/skills')}>Skills</button>
        <button onClick={() => navigate('/download-resume')}>Download Resume</button>
      </div>
    </section>
  );
};

export default Home;
