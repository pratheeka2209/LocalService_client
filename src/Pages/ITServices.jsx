import React, { useState } from 'react'

const itServices = [
  { name: 'Computer Repair', icon: '💻', category: 'Repair' },
  { name: 'Phone Repair', icon: '📱', category: 'Repair' },
  { name: 'Network Setup', icon: '🌐', category: 'Installation' },
  { name: 'Data Recovery', icon: '💾', category: 'Recovery' },
  { name: 'Software Install', icon: '💿', category: 'Software' },
  { name: 'Tech Support', icon: '🛠️', category: 'Support' }
]

const categories = ['All', 'Repair', 'Installation', 'Recovery', 'Software', 'Support']

const ITServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">IT & Electronics</h2>
        <p className="auth-subtitle">Technology solutions and electronic services</p>
        
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

export default ITServices