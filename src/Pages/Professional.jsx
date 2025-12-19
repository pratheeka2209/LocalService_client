import React, { useState } from 'react'

const professionalServices = [
  { name: 'Tutoring', icon: '📚', category: 'Education' },
  { name: 'Legal Advice', icon: '⚖️', category: 'Legal' },
  { name: 'Tax Preparation', icon: '📊', category: 'Financial' },
  { name: 'Photography', icon: '📸', category: 'Creative' },
  { name: 'Event Planning', icon: '🎉', category: 'Events' },
  { name: 'Personal Training', icon: '💪', category: 'Fitness' }
]

const categories = ['All', 'Education', 'Legal', 'Financial', 'Creative', 'Events', 'Fitness']

const Professional = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? professionalServices 
    : professionalServices.filter(service => service.category === selectedCategory)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Professional Help</h2>
        <p className="auth-subtitle">Expert professional services for your needs</p>
        
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

export default Professional