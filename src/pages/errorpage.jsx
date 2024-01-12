import { useRouteError } from "react-router-dom";
import ErrorImage from '../components/images/error1.png';
import Navbar from "../components/NavBar/Navbar";
import Footer from '../components/Footer/Footer'
// import { Link } from 'react-router-dom';
import './errorpage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
    
    <Navbar />

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

    <Footer />

      </div>


  );
}
