import React, { useState } from 'react'

const cleaningServices = [
  { name: 'House Cleaning', icon: '🏠', category: 'Residential' },
  { name: 'Office Cleaning', icon: '🏢', category: 'Commercial' },
  { name: 'Carpet Cleaning', icon: '🧽', category: 'Specialized' },
  { name: 'Window Cleaning', icon: '🪟', category: 'Specialized' },
  { name: 'Deep Cleaning', icon: '🧹', category: 'Residential' },
  { name: 'Move-in/Move-out', icon: '📦', category: 'Specialized' }
]

const categories = ['All', 'Residential', 'Commercial', 'Specialized']

const Cleaning = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? cleaningServices 
    : cleaningServices.filter(service => service.category === selectedCategory)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Cleaning Services</h2>
        <p className="auth-subtitle">Professional cleaning services for your needs</p>
        
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

export default Cleaning