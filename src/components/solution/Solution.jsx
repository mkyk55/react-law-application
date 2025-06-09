import './Solution.css';
import logo from '../../assets/images/logo.jpg';
import practice from '../../assets/images/practice.jpg';


export default function Solution() {
  return (
    <>
      <div className="solution-section">
        <div className="left">
            <h2 className='heading'>Solutions for all situations</h2>
            <div className="cards">
                <div className="blocks">
                    <img src={logo} alt="" />
                      <div>
                        <h3  className='practice-h3'>Corporate Law</h3>
                        <h4>Lawyers</h4>
                      </div>
                </div>
                 <div className="blocks black">
                     <img src={logo} alt="" />
                     <div>
                        <h3 className='practice-h3'>Corporate Law</h3>
                        <h4>Lawyers</h4>
                     </div>
                </div>
                 <div className="blocks black">
                     <img src={logo} alt="" />
                     <div>
                        <h3  className='practice-h3'>Corporate Law</h3>
                        <h4>Lawyers</h4>
                     </div>
                    

                </div>
                 <div className="blocks">
                     <img src={logo} alt="" />
                     <div>
                        <h3  className='practice-h3'>Corporate Law</h3>
                        <h4>Lawyers</h4>
                     </div>
                </div>
            </div>
        </div>
        
        <div className="right">
            <img src={practice} alt="" />
        </div>
      </div>
    </>
  );
}