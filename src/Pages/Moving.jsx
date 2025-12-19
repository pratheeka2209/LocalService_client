import React, { useState } from 'react'

const movingServices = [
  { name: 'Local Moving', icon: '🚚', category: 'Moving' },
  { name: 'Long Distance', icon: '🛣️', category: 'Moving' },
  { name: 'Packing Service', icon: '📦', category: 'Packing' },
  { name: 'Storage', icon: '🏪', category: 'Storage' },
  { name: 'Furniture Moving', icon: '🛋️', category: 'Specialized' },
  { name: 'Delivery Service', icon: '🚛', category: 'Logistics' }
]

const categories = ['All', 'Moving', 'Packing', 'Storage', 'Specialized', 'Logistics']

const Moving = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? movingServices 
    : movingServices.filter(service => service.category === selectedCategory)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Moving & Logistics</h2>
        <p className="auth-subtitle">Complete moving and logistics solutions</p>
        
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

export default Moving