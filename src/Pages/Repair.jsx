import React, { useState } from 'react'

const repairServices = [
  { name: 'General Repairs', icon: '🔧', category: 'General' },
  { name: 'Home Repairs', icon: '🔨', category: 'Home' },
  { name: 'Electrical Repairs', icon: '⚡', category: 'Electrical' },
  { name: 'Plumbing Repairs', icon: '🚰', category: 'Plumbing' },
  { name: 'Appliance Repair', icon: '🔧', category: 'Appliance' },
  { name: 'AC Repair', icon: '❄️', category: 'Electrical' },
  { name: 'Furniture Repair', icon: '🪑', category: 'Home' },
  { name: 'Phone Repair', icon: '📱', category: 'Electronics' }
]

const categories = ['All', 'General', 'Home', 'Electrical', 'Plumbing', 'Appliance', 'Electronics']

const Repair = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? repairServices 
    : repairServices.filter(service => service.category === selectedCategory)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Repair Services</h2>
        <p className="auth-subtitle">
          Choose from our professional repair services
        </p>
        
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

export default Repair