import './Areas.css';
import { Link } from 'react-router-dom';

const LegalAreas = ({service}) => {

  return (

            <>
                {/* <div className="crumb-section"> 
                <div className="crumb-container">
                    <Link to="/" className="crumb-link">Home</Link>
                    <span className="crumb-separator"> | </span>
                    <span className="crumb-current">{service.name}</span>
                </div>
                </div>


                <div className="left-section">

                </div>

                <div className="right-section">
                <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
                <h1>{service.name}</h1>
                <img
                    src={service.image}
                    alt={service.name}
                    style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
                />
                <p>{service.description}</p>
                </div>

                </div> */}


                    <div className="crumb-section"> 
                        <div className="crumb-container">
                            <Link to="/" className="crumb-link">Home</Link>
                            <span className="crumb-separator"> | </span>
                            <span className="crumb-current">{service.name}</span>
                        </div>
                    </div>

                    <div className="wrapper">
                    <div className="left-section">
                        {/* You can place related services, links, lawyer card, etc. */}
                    </div>

                    <div className="right-section">
                        <div className="service-content">
                        <h1 className='service-heading'>{service.name}</h1>
                        <img
                            src={service.image}
                            alt={service.name}
                            className="service-image"
                        />
                        <p>{service.description}</p>
                        </div>
                    </div>
                
                </div>

            </>
  );
};

export default LegalAreas;
