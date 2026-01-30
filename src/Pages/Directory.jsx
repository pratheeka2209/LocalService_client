import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const allProviders = [
  // Home Repairs & Maintenance
  { id: 1, name: 'Electrician', category: 'Repairs', service: 'Electrical Work', rating: 4.5, reviews: 127, price: '₹400', phone: '+91 98765 43210', address: 'Sector 15, Gurgaon', image: '⚡' },
  { id: 2, name: 'Plumber', category: 'Repairs', service: 'Plumbing Service', rating: 4.8, reviews: 89, price: '₹500', phone: '+91 98765 43211', address: 'Lajpat Nagar, Delhi', image: '🚰' },
  { id: 3, name: 'AC Technician', category: 'Repairs', service: 'AC Repair', rating: 4.6, reviews: 156, price: '₹600', phone: '+91 98765 43212', address: 'Andheri West, Mumbai', image: '❄️' },
  { id: 4, name: 'Carpenter', category: 'Repairs', service: 'Wood Work', rating: 4.4, reviews: 98, price: '₹800', phone: '+91 98765 43213', address: 'Koramangala, Bangalore', image: '🔨' },
  { id: 5, name: 'Painter', category: 'Repairs', service: 'Wall Painting', rating: 4.3, reviews: 76, price: '₹300', phone: '+91 98765 43214', address: 'Banjara Hills, Hyderabad', image: '🎨' },
  { id: 6, name: 'Tile Fixer', category: 'Repairs', service: 'Tile Work', rating: 4.5, reviews: 65, price: '₹450', phone: '+91 98765 43215', address: 'Anna Nagar, Chennai', image: '🔲' },
  { id: 7, name: 'Welder', category: 'Repairs', service: 'Metal Work', rating: 4.2, reviews: 54, price: '₹700', phone: '+91 98765 43216', address: 'Whitefield, Bangalore', image: '🔥' },
  
  // Cleaning Services
  { id: 8, name: 'House Cleaner', category: 'Cleaning', service: 'Home Cleaning', rating: 4.7, reviews: 203, price: '₹1200', phone: '+91 98765 43217', address: 'Connaught Place, Delhi', image: '🏠' },
  { id: 9, name: 'Office Cleaner', category: 'Cleaning', service: 'Office Cleaning', rating: 4.4, reviews: 91, price: '₹2000', phone: '+91 98765 43218', address: 'Cyber City, Gurgaon', image: '🏢' },
  { id: 10, name: 'Deep Cleaner', category: 'Cleaning', service: 'Deep Cleaning', rating: 4.6, reviews: 134, price: '₹1800', phone: '+91 98765 43219', address: 'T Nagar, Chennai', image: '🧽' },
  { id: 11, name: 'Carpet Cleaner', category: 'Cleaning', service: 'Carpet Cleaning', rating: 4.3, reviews: 76, price: '₹800', phone: '+91 98765 43220', address: 'Bandra West, Mumbai', image: '🪣' },
  { id: 12, name: 'Window Cleaner', category: 'Cleaning', service: 'Window Cleaning', rating: 4.5, reviews: 89, price: '₹600', phone: '+91 98765 43221', address: 'Park Street, Kolkata', image: '🪟' },
  { id: 13, name: 'Bathroom Cleaner', category: 'Cleaning', service: 'Bathroom Cleaning', rating: 4.4, reviews: 67, price: '₹500', phone: '+91 98765 43222', address: 'Jubilee Hills, Hyderabad', image: '🚿' },
  
  // Beauty & Wellness
  { id: 14, name: 'Hair Stylist', category: 'Beauty', service: 'Hair Cut & Style', rating: 4.8, reviews: 245, price: '₹800', phone: '+91 98765 43223', address: 'Karol Bagh, Delhi', image: '💇' },
  { id: 15, name: 'Massage Therapist', category: 'Beauty', service: 'Body Massage', rating: 4.5, reviews: 189, price: '₹1500', phone: '+91 98765 43224', address: 'All Mumbai', image: '💆' },
  { id: 16, name: 'Nail Artist', category: 'Beauty', service: 'Nail Art', rating: 4.4, reviews: 112, price: '₹400', phone: '+91 98765 43225', address: 'Electronic City, Bangalore', image: '💅' },
  { id: 17, name: 'Makeup Artist', category: 'Beauty', service: 'Bridal Makeup', rating: 4.7, reviews: 98, price: '₹3000', phone: '+91 98765 43226', address: 'Sector 18, Noida', image: '💄' },
  { id: 18, name: 'Eyebrow Threader', category: 'Beauty', service: 'Eyebrow Threading', rating: 4.3, reviews: 156, price: '₹200', phone: '+91 98765 43227', address: 'Salt Lake, Kolkata', image: '👁️' },
  
  // Food & Catering
  { id: 19, name: 'Tiffin Service', category: 'Food', service: 'Daily Tiffin', rating: 4.6, reviews: 167, price: '₹200', phone: '+91 98765 43228', address: 'Jayanagar, Bangalore', image: '🍱' },
  { id: 20, name: 'Party Caterer', category: 'Food', service: 'Event Catering', rating: 4.7, reviews: 89, price: '₹300', phone: '+91 98765 43229', address: 'Rishikesh, Uttarakhand', image: '🍽️' },
  { id: 21, name: 'Home Cook', category: 'Food', service: 'Home Cooking', rating: 4.5, reviews: 123, price: '₹500', phone: '+91 98765 43230', address: 'Greater Kailash, Delhi', image: '👨‍🍳' },
  { id: 22, name: 'Cake Baker', category: 'Food', service: 'Custom Cakes', rating: 4.8, reviews: 76, price: '₹800', phone: '+91 98765 43231', address: 'Koregaon Park, Pune', image: '🎂' },
  { id: 23, name: 'Snack Vendor', category: 'Food', service: 'Party Snacks', rating: 4.4, reviews: 134, price: '₹150', phone: '+91 98765 43232', address: 'Powai, Mumbai', image: '🥪' },
  
  // Transportation
  { id: 24, name: 'Taxi Driver', category: 'Transport', service: 'City Taxi', rating: 4.3, reviews: 234, price: '₹15', phone: '+91 98765 43233', address: 'Anna Nagar, Chennai', image: '🚕' },
  { id: 25, name: 'Auto Driver', category: 'Transport', service: 'Auto Rickshaw', rating: 4.2, reviews: 178, price: '₹12', phone: '+91 98765 43234', address: 'Nehru Place, Delhi', image: '🛺' },
  { id: 26, name: 'Bike Taxi', category: 'Transport', service: 'Bike Ride', rating: 4.4, reviews: 145, price: '₹8', phone: '+91 98765 43235', address: 'SP Road, Bangalore', image: '🏍️' },
  { id: 27, name: 'Packers Movers', category: 'Transport', service: 'Home Shifting', rating: 4.6, reviews: 89, price: '₹8000', phone: '+91 98765 43236', address: 'Rajouri Garden, Delhi', image: '📦' },
  { id: 28, name: 'Goods Transport', category: 'Transport', service: 'Goods Delivery', rating: 4.3, reviews: 123, price: '₹500', phone: '+91 98765 43237', address: 'Hitech City, Hyderabad', image: '🚚' },
  
  // Education & Training
  { id: 29, name: 'Home Tutor', category: 'Education', service: 'Subject Tuition', rating: 4.8, reviews: 167, price: '₹800', phone: '+91 98765 43238', address: 'Vasant Vihar, Delhi', image: '📚' },
  { id: 30, name: 'Music Teacher', category: 'Education', service: 'Music Lessons', rating: 4.5, reviews: 89, price: '₹1000', phone: '+91 98765 43239', address: 'Malleswaram, Bangalore', image: '🎵' },
  { id: 31, name: 'Dance Teacher', category: 'Education', service: 'Dance Classes', rating: 4.6, reviews: 123, price: '₹700', phone: '+91 98765 43240', address: 'Banjara Hills, Hyderabad', image: '💃' },
  { id: 32, name: 'Yoga Instructor', category: 'Education', service: 'Yoga Classes', rating: 4.7, reviews: 98, price: '₹600', phone: '+91 98765 43241', address: 'Andheri West, Mumbai', image: '🧘' },
  { id: 33, name: 'Computer Teacher', category: 'Education', service: 'Computer Training', rating: 4.4, reviews: 76, price: '₹900', phone: '+91 98765 43242', address: 'Koramangala, Bangalore', image: '💻' },
  
  // Pet Care
  { id: 34, name: 'Pet Groomer', category: 'Pets', service: 'Pet Grooming', rating: 4.6, reviews: 98, price: '₹1200', phone: '+91 98765 43243', address: 'T Nagar, Chennai', image: '🐕' },
  { id: 35, name: 'Pet Doctor', category: 'Pets', service: 'Pet Treatment', rating: 4.8, reviews: 76, price: '₹800', phone: '+91 98765 43244', address: 'Whitefield, Bangalore', image: '🩺' },
  { id: 36, name: 'Pet Trainer', category: 'Pets', service: 'Pet Training', rating: 4.5, reviews: 67, price: '₹1000', phone: '+91 98765 43245', address: 'Connaught Place, Delhi', image: '🦮' },
  { id: 37, name: 'Pet Sitter', category: 'Pets', service: 'Pet Sitting', rating: 4.4, reviews: 89, price: '₹500', phone: '+91 98765 43246', address: 'Bandra West, Mumbai', image: '🐾' },
  
  // Fitness & Sports
  { id: 38, name: 'Personal Trainer', category: 'Fitness', service: 'Gym Training', rating: 4.5, reviews: 134, price: '₹1500', phone: '+91 98765 43247', address: 'Park Street, Kolkata', image: '💪' },
  { id: 39, name: 'Swimming Coach', category: 'Fitness', service: 'Swimming Lessons', rating: 4.4, reviews: 67, price: '₹1000', phone: '+91 98765 43248', address: 'Jubilee Hills, Hyderabad', image: '🏊' },
  { id: 40, name: 'Cricket Coach', category: 'Fitness', service: 'Cricket Training', rating: 4.6, reviews: 89, price: '₹800', phone: '+91 98765 43249', address: 'Karol Bagh, Delhi', image: '🏏' },
  
  // Technology Services
  { id: 41, name: 'Mobile Repair', category: 'Tech', service: 'Phone Repair', rating: 4.3, reviews: 156, price: '₹500', phone: '+91 98765 43250', address: 'All Mumbai', image: '📱' },
  { id: 42, name: 'Laptop Repair', category: 'Tech', service: 'Laptop Service', rating: 4.7, reviews: 189, price: '₹800', phone: '+91 98765 43251', address: 'Electronic City, Bangalore', image: '💻' },
  { id: 43, name: 'TV Repair', category: 'Tech', service: 'TV Service', rating: 4.4, reviews: 123, price: '₹600', phone: '+91 98765 43252', address: 'Sector 18, Noida', image: '📺' },
  { id: 44, name: 'WiFi Setup', category: 'Tech', service: 'Internet Setup', rating: 4.5, reviews: 98, price: '₹400', phone: '+91 98765 43253', address: 'Salt Lake, Kolkata', image: '📶' },
  
  // Event Services
  { id: 45, name: 'Event Planner', category: 'Events', service: 'Party Planning', rating: 4.8, reviews: 89, price: '₹15000', phone: '+91 98765 43254', address: 'Jayanagar, Bangalore', image: '🎉' },
  { id: 46, name: 'Decorator', category: 'Events', service: 'Event Decoration', rating: 4.5, reviews: 123, price: '₹8000', phone: '+91 98765 43255', address: 'Rishikesh, Uttarakhand', image: '🎈' },
  { id: 47, name: 'DJ Service', category: 'Events', service: 'Music & DJ', rating: 4.6, reviews: 76, price: '₹5000', phone: '+91 98765 43256', address: 'Greater Kailash, Delhi', image: '🎧' },
  { id: 48, name: 'Photographer', category: 'Events', service: 'Event Photography', rating: 4.7, reviews: 134, price: '₹10000', phone: '+91 98765 43257', address: 'Koregaon Park, Pune', image: '📸' },
  
  // Gardening & Landscaping
  { id: 49, name: 'Gardener', category: 'Garden', service: 'Garden Maintenance', rating: 4.6, reviews: 145, price: '₹800', phone: '+91 98765 43258', address: 'Powai, Mumbai', image: '🌱' },
  { id: 50, name: 'Plant Care', category: 'Garden', service: 'Plant Service', rating: 4.4, reviews: 78, price: '₹400', phone: '+91 98765 43259', address: 'Anna Nagar, Chennai', image: '🪴' }
]

const Directory = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  
  const categories = ['All', 'Repairs', 'Cleaning', 'Beauty', 'Food', 'Transport', 'Education', 'Pets', 'Fitness', 'Tech', 'Events', 'Garden']
  
  const filteredProviders = allProviders.filter(provider => {
    const matchesCategory = selectedCategory === 'All' || provider.category === selectedCategory
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         provider.service.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="directory-container fade-in">
      <div className="directory-header">
        <h1 className="slide-up">Local Service Directory</h1>
        <p className="slide-up">Find trusted service providers in your area</p>
        
        <div className="search-filters">
          <input
            type="text"
            placeholder="Search services or providers..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="category-filters">
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
      </div>

      <div className="providers-grid">
        {filteredProviders.map(provider => (
          <div key={provider.id} className="provider-card hover-grow">
            <div className="provider-image" style={{background: '#3498db', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px', borderRadius: '4px', fontSize: '24px', fontWeight: 'bold'}}>
              {provider.service.charAt(0)}
            </div>
            <div className="provider-details">
              <h3>{provider.name}</h3>
              <p className="service-type">{provider.service}</p>
              <div className="rating">
                <span className="stars">{'★'.repeat(Math.floor(provider.rating))}{'☆'.repeat(5-Math.floor(provider.rating))}</span>
                <span>{provider.rating} ({provider.reviews} reviews)</span>
              </div>
              <p className="price">{provider.price}</p>
              <p className="contact">{provider.phone}</p>
              <p className="address">{provider.address}</p>
              <Link to={`/booking/${provider.id}`} className="book-btn">Book Now</Link>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProviders.length === 0 && (
        <div className="no-results">
          <p>No providers found. Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  )
}

export default Directory