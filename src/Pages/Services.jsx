import React from 'react'
import { useParams, Link } from 'react-router-dom'

const allServices = {
  repair: [
    { name: 'General Repairs', icon: '🔧', price: '$50-80', rating: 4.5, provider: 'Mike\'s Repair', reviews: 127 },
    { name: 'Electrical Repairs', icon: '⚡', price: '$75-120', rating: 4.8, provider: 'ElectricPro', reviews: 89 },
    { name: 'Plumbing Repairs', icon: '🚰', price: '$60-100', rating: 4.6, provider: 'PlumbFix', reviews: 156 },
    { name: 'Appliance Repair', icon: '🔧', price: '$45-90', rating: 4.3, provider: 'ApplianceCare', reviews: 73 }
  ],
  cleaning: [
    { name: 'House Cleaning', icon: '🏠', price: '$80-150', rating: 4.7, provider: 'CleanHome', reviews: 203 },
    { name: 'Office Cleaning', icon: '🏢', price: '$100-200', rating: 4.4, provider: 'OfficePro', reviews: 91 },
    { name: 'Carpet Cleaning', icon: '🧽', price: '$60-120', rating: 4.6, provider: 'CarpetCare', reviews: 134 },
    { name: 'Window Cleaning', icon: '🪟', price: '$40-80', rating: 4.5, provider: 'ClearView', reviews: 67 }
  ],
  vehicle: [
    { name: 'Car Wash', icon: '🚗', price: '$25-50', rating: 4.2, provider: 'AutoWash', reviews: 245 },
    { name: 'Oil Change', icon: '🛢️', price: '$35-60', rating: 4.6, provider: 'QuickLube', reviews: 189 },
    { name: 'Tire Service', icon: '🛞', price: '$50-150', rating: 4.4, provider: 'TirePro', reviews: 112 },
    { name: 'Battery Service', icon: '🔋', price: '$80-200', rating: 4.3, provider: 'PowerCell', reviews: 78 }
  ],
  home: [
    { name: 'Gardening', icon: '🌱', price: '$40-100', rating: 4.5, provider: 'GreenThumb', reviews: 156 },
    { name: 'Pest Control', icon: '🐛', price: '$60-150', rating: 4.7, provider: 'BugBusters', reviews: 98 },
    { name: 'Security Systems', icon: '🔒', price: '$200-500', rating: 4.8, provider: 'SecureHome', reviews: 67 },
    { name: 'Painting', icon: '🎨', price: '$100-300', rating: 4.4, provider: 'ColorCraft', reviews: 143 }
  ]
}

const Services = () => {
  const { category } = useParams()
  
  const services = allServices[category] || []
  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Services'

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">{categoryName} Services</h2>
        <p className="auth-subtitle">Choose from top-rated service providers</p>
        
        <div className="provider-list">
          {services.map((service, index) => (
            <div className="provider-card" key={index}>
              <div className="provider-header">
                <div className="service-icon">{service.icon}</div>
                <div className="provider-info">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="provider-name">by {service.provider}</p>
                  <div className="rating">
                    <span className="stars">{'★'.repeat(Math.floor(service.rating))}{'☆'.repeat(5-Math.floor(service.rating))}</span>
                    <span className="rating-text">{service.rating} ({service.reviews} reviews)</span>
                  </div>
                </div>
                <div className="price">{service.price}</div>
              </div>
              <Link to={`/booking/${service.name}`} className="book-btn">
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services