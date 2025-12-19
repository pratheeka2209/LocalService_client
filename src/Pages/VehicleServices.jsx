import React, { useState } from 'react'

const vehicleServices = [
  { name: 'Car Wash', icon: '🚗', category: 'Maintenance' },
  { name: 'Oil Change', icon: '🛢️', category: 'Maintenance' },
  { name: 'Tire Service', icon: '🛞', category: 'Repair' },
  { name: 'Battery Service', icon: '🔋', category: 'Repair' },
  { name: 'Brake Service', icon: '🛑', category: 'Repair' },
  { name: 'Car Detailing', icon: '✨', category: 'Maintenance' }
]

const categories = ['All', 'Maintenance', 'Repair']

const VehicleServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? vehicleServices 
    : vehicleServices.filter(service => service.category === selectedCategory)

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Vehicle Services</h2>
        <p className="auth-subtitle">Complete automotive care and maintenance</p>
        
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

export default VehicleServices