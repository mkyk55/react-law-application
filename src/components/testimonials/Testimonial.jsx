import './Testimonial.css'
import logo from '../../assets/images/logo.jpg'; // Adjust the path as necessary
import {useEffect, useState } from "react";

    const testimonials = [
        {
            text: `In a matter against DDA, Mr. Vinod Dahiya Advocate save us through the trouble against the mammoth 
        government agency in courts of law and 
        emerged victorious to get the two acers plot allotment for sr. 
        secondary school in favour of education department Government of Delhi.`,
            name: "Mayank Kumar",
            img: logo,
        },
        {
            text: `In a matter against DDA, Mr. Vinod Dahiya Advocate save us through the trouble against the mammoth 
        government agency in courts of law and 
        emerged victorious to get the two acers plot allotment for sr. 
        secondary school in favour of education department Government of Delhi.`,
            name: "Vidyut",
            img: logo,
        },
        {
            text: `In a matter against DDA, Mr. Vinod Dahiya Advocate save us through the trouble against the mammoth 
        government agency in courts of law and 
        emerged victorious to get the two acers plot allotment for sr. 
        secondary school in favour of education department Government of Delhi.`,
            name: "New Client",
            img: logo,
        },
  // Add more testimonials as needed
];

export default function Testimonal(){

 const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
    return (
    <div className="testimonials-section">
      <h2>What Our Clients Says</h2>
      <div className="carousel-container">
        <button className="carousel-btn" onClick={prevTestimonial}>&lt;</button>
        <div className="testimonial-card">
          <p>{testimonials[current].text}</p>
          <div className="clients-name">
            <img className="client-img" src={testimonials[current].img} alt="" />
            <h3 className="client-name">{testimonials[current].name}</h3>
          </div>
        </div>
        <button className="carousel-btn" onClick={nextTestimonial}>&gt;</button>
      </div>
    </div>
  );
}