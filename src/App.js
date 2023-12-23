// App.js
import React from 'react';
//import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/aboutme';
import Contact from './components/contactme'
import Projects from './components/project';
import Header from './components/header';
import Home from './components/Home';
import Skills from './components/Skills'
import DownloadLink from './components/DownloadLink'; // Add this import
function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Add the Header component here */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} /> {/* Add this route */}
            {/* Add more routes for other components */}
            <Route
              path="/download-resume"
              element={
                <DownloadLink file="resume.pdf" label="Download Resume" />
              }
            />
          </Routes>
        </main>
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </Router>
  );
}
export default App;
