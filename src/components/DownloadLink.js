// DownloadLink.js
import React from 'react';
import '../styles/DownloadLink.css'; // Import your styles

const DownloadLink = ({ file, label }) => {
  return (
    <div className="download-link-container"> 
      <a href={process.env.PUBLIC_URL + `/pdf/${file}`} download>
        {label}
      </a>
    </div>
  );
};

export default DownloadLink;
