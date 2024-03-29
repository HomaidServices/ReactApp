import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/components/Services/services.css";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Adjust this threshold as per your need
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={`section3 prevent-select ${isVisible ? "visible" : ""}`} id="servicesSection" ref={servicesRef}>
        <h1 className={`section3-heading animate__zoomIn ${isVisible ? "animate__fadeInUp" : ""}`}>WHAT WE OFFER?</h1>

        <div className="section3-container">
          <div className={`custom-card ${isVisible ? "animate__fadeInLeft" : ""}`}>
            <div className="img-box">
              <img src="/src/assets/alternative-service-cooking.webp" alt="Cooking" />
            </div>
            <div className="custom-content">
              <h2 className="section3-title">Cooking</h2>
              <p className="section3-subtitle">
                Welcome to the world of flavour, innovation and endless
                possibilities in kitchen.
              </p>
              <Link to="/cookingprofile">
                <button className="services-btn" id="cookingBtn">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div className={`custom-card ${isVisible ? "animate__fadeInRight" : ""}`}>
            <div className="img-box">
              <img src="/src/assets/alternative-service-cleaning.webp" alt="Cleaning" />
            </div>
            <div className="custom-content">
              <h2 className="section3-title">Cleaning</h2>
              <p className="section3-subtitle">
                We believe in transforming the chore of cleaning into a
                delightful and efficient experience.
              </p>
              <Link to="/cleaningservices">
                <button className="services-btn" id="cleaningBtn">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
