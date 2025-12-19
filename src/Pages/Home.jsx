import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="hero fade-in">
        <h1 className="slide-up">Welcome to Servio</h1>
        <p className="slide-up">Your trusted local service directory</p>
        <Link to="/directory" className="btn primary hover-grow">Browse Services</Link>
        
        <div className="hero-features">
          <div className="feature slide-up">
            <span>⭐</span>
            <span>Verified Providers</span>
          </div>
          <div className="feature slide-up">
            <span>💰</span>
            <span>Best Prices</span>
          </div>
          <div className="feature slide-up">
            <span>⚡</span>
            <span>Quick Booking</span>
          </div>
        </div>
      </section>
      
      <section className="stats fade-in">
        <div className="stat-item hover-grow">
          <h3>50+</h3>
          <p>Services Available</p>
        </div>
        <div className="stat-item hover-grow">
          <h3>500+</h3>
          <p>Trusted Providers</p>
        </div>
        <div className="stat-item hover-grow">
          <h3>1000+</h3>
          <p>Happy Customers</p>
        </div>
      </section>
    </div>
  );
};

export default Home;