
import './Practice.css';
import logo from '../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

import practiceAreas  from './Practice.json'

export default function Practice() {
  return (
        <>
            <div className="practice-section">
                <h2>Areas of Practice</h2>
                <div className="card-section">
                    {practiceAreas.map((area, index) => (
                        <div className="card" key={index}>
                            <img src={logo} alt="logo" />
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                            {area.link && (
                            <Link to={area.link} className="read-more-btn">
                                Read More
                            </Link>
                            )}
                        </div>
                    ))}
                </div>
                </div>
        </>
  );
}