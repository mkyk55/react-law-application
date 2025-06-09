import './header.css';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


export default function Header() {
  return (
        <>
            <header className="header-bar">
                <div className="header-item">
                    <FiPhone className="icon" />
                    <span>+91 7065146073</span>
                </div>
                <div className="header-item">
                    <FiMail className="icon" />
                    <span>advovate.mayank55@gmail.com</span>
                </div>
                <div className="header-item">
                    <FiMapPin className="icon" />
                    <span>F-318, Karkardooma Court </span>
                </div>
                <div className="social-icons">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="icon" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                </div>
            </header>
        </>
  );
}