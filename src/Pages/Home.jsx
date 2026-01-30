import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="hero fade-in">
        <h1 className="slide-up">Local Services Directory</h1>
        <p className="slide-up">Find trusted service providers in your area</p>
        <Link to="/directory" className="btn primary hover-grow">Find Services</Link>
      </section>
      
      <section className="stats fade-in">
        <div className="stat-item hover-grow">
          <h3>45+</h3>
          <p>Services</p>
        </div>
        <div className="stat-item hover-grow">
          <h3>200+</h3>
          <p>Providers</p>
        </div>
        <div className="stat-item hover-grow">
          <h3>500+</h3>
          <p>Customers</p>
        </div>
        <div className="stat-item hover-grow">
          <h3>4.8</h3>
          <p>Rating</p>
        </div>
      </section>
    </div>
  );
};

export default Home;