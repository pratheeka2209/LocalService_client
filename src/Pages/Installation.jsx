import React, { useState } from 'react'

const installationServices = [
  { name: 'AC Installation', icon: '❄️', category: 'HVAC' },
  { name: 'TV Mounting', icon: '📺', category: 'Electronics' },
  { name: 'Furniture Assembly', icon: '🪑', category: 'Furniture' },
  { name: 'Ceiling Fan', icon: '🌀', category: 'Electrical' },
  { name: 'Water Heater', icon: '🔥', category: 'Plumbing' },
  { name: 'Smart Home Setup', icon: '🏠', category: 'Electronics' }
]

const categories = ['All', 'HVAC', 'Electronics', 'Furniture', 'Electrical', 'Plumbing']

const Installation = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? installationServices 
    : installationServices.filter(service => service.category === selectedCategory)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Installation & Maintenance</h2>
        <p className="auth-subtitle">Professional installation and maintenance services</p>
        
        <div className="filter-container">
          <h3>Filter by Category:</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-name">{service.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Installation