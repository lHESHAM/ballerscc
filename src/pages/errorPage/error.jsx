import React from 'react';
import ErrorImage from '../components/images/error.png';
import './error.css'; 

const ErrorPage = () => {
  return (


    <div>
    <h2 class="speacial-heading">Error Page</h2>
    <p>Error Page</p>
    <div className="image-container">
    <img
    className="responsive-image"
    src={ErrorImage}
    alt="Error"
    />
    {/* Adding the GIF using an iframe */}
    <div className="error-gif">
    <iframe 
    src="https://giphy.com/embed/GIqFz0HfqdvdYhalWs" width="480" height="319" title='test'></iframe>
   
    
    </div>
    </div>
    </div>
  );
};

export default ErrorPage;
