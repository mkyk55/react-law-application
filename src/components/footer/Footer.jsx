import './Footer.css'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Map from '../map/Map';

export default function Footer (){
    return(
        <>
            <div className="footer-section">
                <div className="footer-content">

             
                    <div className="footer">
                        <h3  className='footer-headings'>Useful Links</h3>
                        <ul>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Our Team</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="/news">News</Link></li>

                        </ul>
                    </div>

                    <div className="footer">
                        <h3 className='footer-headings'>Practice Areas Links</h3>
                        <ul>
                            <li><Link to="#">Corporate Law</Link></li>
                            <li><Link to="#">Criminal Law</Link></li>
                            <li><Link to="#">Property Disputes</Link></li>
                            <li><Link to="#">Corporate Law</Link></li>
                            <li><Link to="#">Criminal Law</Link></li>
                            <li><Link to="#">Property Disputes</Link></li>
                            <li><Link to="#">Corporate Law</Link></li>
                            <li><Link to="#">Criminal Law</Link></li>
                            <li><Link to="#">Property Disputes</Link></li>
                        </ul>
                    </div>

                        <div className="footer">
                            <h3 className='footer-headings'>Contact Details</h3>
                            <ul>    
                                <li>
                                    <span>+ 91 7065146073</span>
                                </li>
                                <li>
                                    <span>advovate.mayank55@gmail.com</span>
                                </li>
                                <li>
                                    <span>F-318, Karkardooma Court </span>
                                </li>
                            </ul>
                            <div>   
                                
                                
                                
                            </div>
                            <div>
                                
                            </div>
                            <div>

                                
                            </div>
                                
                        </div>
                
                       
                    </div>

            </div>
        </>
    )
}