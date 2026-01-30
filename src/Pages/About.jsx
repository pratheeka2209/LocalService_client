import React from 'react'

const About = () => {
  return (
    <div className="account-container fade-in">
      <div className="account-header">
        <h1 className="slide-up">About Servio</h1>
        <p>Your trusted local service directory</p>
      </div>

      <div className="auth-form-container" style={{maxWidth: '800px', margin: '0 auto'}}>
        <div style={{textAlign: 'left', lineHeight: '1.8'}}>
          <h2 style={{color: '#3498db', marginBottom: '20px'}}>Our Mission</h2>
          <p style={{marginBottom: '20px', color: '#7f8c8d'}}>
            Servio connects you with trusted local service providers in your area. 
            We make it easy to find, book, and manage services for your home and business needs.
          </p>

          <h2 style={{color: '#3498db', marginBottom: '20px'}}>What We Offer</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px'}}>
            <div style={{padding: '15px', background: '#f8f9fa', borderRadius: '4px'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '10px'}}>🔧 Home Repairs</h3>
              <p style={{color: '#7f8c8d', fontSize: '14px'}}>Electricians, plumbers, carpenters, and more</p>
            </div>
            <div style={{padding: '15px', background: '#f8f9fa', borderRadius: '4px'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '10px'}}>🧹 Cleaning Services</h3>
              <p style={{color: '#7f8c8d', fontSize: '14px'}}>Home and office cleaning professionals</p>
            </div>
            <div style={{padding: '15px', background: '#f8f9fa', borderRadius: '4px'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '10px'}}>💄 Beauty & Wellness</h3>
              <p style={{color: '#7f8c8d', fontSize: '14px'}}>Hair stylists, massage therapists, and more</p>
            </div>
            <div style={{padding: '15px', background: '#f8f9fa', borderRadius: '4px'}}>
              <h3 style={{color: '#2c3e50', marginBottom: '10px'}}>🚗 Transportation</h3>
              <p style={{color: '#7f8c8d', fontSize: '14px'}}>Taxi, auto, and delivery services</p>
            </div>
          </div>

          <h2 style={{color: '#3498db', marginBottom: '20px'}}>Why Choose Servio?</h2>
          <ul style={{color: '#7f8c8d', paddingLeft: '20px'}}>
            <li style={{marginBottom: '10px'}}>Verified service providers</li>
            <li style={{marginBottom: '10px'}}>Easy online booking and payment</li>
            <li style={{marginBottom: '10px'}}>24/7 customer support</li>
            <li style={{marginBottom: '10px'}}>Transparent pricing</li>
            <li style={{marginBottom: '10px'}}>Secure and reliable platform</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About