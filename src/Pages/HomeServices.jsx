import React, { useState } from 'react'

const homeServices = [
  { name: 'Gardening', icon: '🌱', category: 'Outdoor' },
  { name: 'Lawn Care', icon: '🌿', category: 'Outdoor' },
  { name: 'Pest Control', icon: '🐛', category: 'Maintenance' },
  { name: 'Security Systems', icon: '🔒', category: 'Installation' },
  { name: 'Interior Design', icon: '🎨', category: 'Design' },
  { name: 'Painting', icon: '🎨', category: 'Maintenance' }
]

const categories = ['All', 'Outdoor', 'Maintenance', 'Installation', 'Design']

const HomeServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? homeServices 
    : homeServices.filter(service => service.category === selectedCategory)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Home Services</h2>
        <p className="auth-subtitle">Complete home care and improvement services</p>
        
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

export default HomeServices