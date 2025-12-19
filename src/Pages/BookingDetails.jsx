import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { bookingAPI } from '../services/api'

const BookingDetails = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    address: '',
    notes: ''
  })

  // All services data
  const allServices = {
    1: { name: 'Electrical Work', provider: 'Electrician', basePrice: 400, rating: 4.5 },
    2: { name: 'Plumbing Service', provider: 'Plumber', basePrice: 500, rating: 4.8 },
    3: { name: 'AC Repair', provider: 'AC Technician', basePrice: 600, rating: 4.6 },
    4: { name: 'Wood Work', provider: 'Carpenter', basePrice: 800, rating: 4.4 },
    5: { name: 'Wall Painting', provider: 'Painter', basePrice: 300, rating: 4.3 },
    6: { name: 'Tile Work', provider: 'Tile Fixer', basePrice: 450, rating: 4.5 },
    7: { name: 'Metal Work', provider: 'Welder', basePrice: 700, rating: 4.2 },
    8: { name: 'Home Cleaning', provider: 'House Cleaner', basePrice: 1200, rating: 4.7 },
    9: { name: 'Office Cleaning', provider: 'Office Cleaner', basePrice: 2000, rating: 4.4 },
    10: { name: 'Deep Cleaning', provider: 'Deep Cleaner', basePrice: 1800, rating: 4.6 },
    11: { name: 'Carpet Cleaning', provider: 'Carpet Cleaner', basePrice: 800, rating: 4.3 },
    12: { name: 'Window Cleaning', provider: 'Window Cleaner', basePrice: 600, rating: 4.5 },
    13: { name: 'Bathroom Cleaning', provider: 'Bathroom Cleaner', basePrice: 500, rating: 4.4 },
    14: { name: 'Hair Cut & Style', provider: 'Hair Stylist', basePrice: 800, rating: 4.8 },
    15: { name: 'Body Massage', provider: 'Massage Therapist', basePrice: 1500, rating: 4.5 },
    16: { name: 'Nail Art', provider: 'Nail Artist', basePrice: 400, rating: 4.4 },
    17: { name: 'Bridal Makeup', provider: 'Makeup Artist', basePrice: 3000, rating: 4.7 },
    18: { name: 'Eyebrow Threading', provider: 'Eyebrow Threader', basePrice: 200, rating: 4.3 },
    19: { name: 'Daily Tiffin', provider: 'Tiffin Service', basePrice: 200, rating: 4.6 },
    20: { name: 'Event Catering', provider: 'Party Caterer', basePrice: 300, rating: 4.7 },
    21: { name: 'Home Cooking', provider: 'Home Cook', basePrice: 500, rating: 4.5 },
    22: { name: 'Custom Cakes', provider: 'Cake Baker', basePrice: 800, rating: 4.8 },
    23: { name: 'Party Snacks', provider: 'Snack Vendor', basePrice: 150, rating: 4.4 },
    24: { name: 'City Taxi', provider: 'Taxi Driver', basePrice: 15, rating: 4.3 },
    25: { name: 'Auto Rickshaw', provider: 'Auto Driver', basePrice: 12, rating: 4.2 },
    26: { name: 'Bike Ride', provider: 'Bike Taxi', basePrice: 8, rating: 4.4 },
    27: { name: 'Home Shifting', provider: 'Packers Movers', basePrice: 8000, rating: 4.6 },
    28: { name: 'Goods Delivery', provider: 'Goods Transport', basePrice: 500, rating: 4.3 },
    29: { name: 'Subject Tuition', provider: 'Home Tutor', basePrice: 800, rating: 4.8 },
    30: { name: 'Music Lessons', provider: 'Music Teacher', basePrice: 1000, rating: 4.5 },
    31: { name: 'Dance Classes', provider: 'Dance Teacher', basePrice: 700, rating: 4.6 },
    32: { name: 'Yoga Classes', provider: 'Yoga Instructor', basePrice: 600, rating: 4.7 },
    33: { name: 'Computer Training', provider: 'Computer Teacher', basePrice: 900, rating: 4.4 },
    34: { name: 'Pet Grooming', provider: 'Pet Groomer', basePrice: 1200, rating: 4.6 },
    35: { name: 'Pet Treatment', provider: 'Pet Doctor', basePrice: 800, rating: 4.8 },
    36: { name: 'Pet Training', provider: 'Pet Trainer', basePrice: 1000, rating: 4.5 },
    37: { name: 'Pet Sitting', provider: 'Pet Sitter', basePrice: 500, rating: 4.4 },
    38: { name: 'Gym Training', provider: 'Personal Trainer', basePrice: 1500, rating: 4.5 },
    39: { name: 'Swimming Lessons', provider: 'Swimming Coach', basePrice: 1000, rating: 4.4 },
    40: { name: 'Cricket Training', provider: 'Cricket Coach', basePrice: 800, rating: 4.6 },
    41: { name: 'Phone Repair', provider: 'Mobile Repair', basePrice: 500, rating: 4.3 },
    42: { name: 'Laptop Service', provider: 'Laptop Repair', basePrice: 800, rating: 4.7 },
    43: { name: 'TV Service', provider: 'TV Repair', basePrice: 600, rating: 4.4 },
    44: { name: 'Internet Setup', provider: 'WiFi Setup', basePrice: 400, rating: 4.5 },
    45: { name: 'Party Planning', provider: 'Event Planner', basePrice: 15000, rating: 4.8 },
    46: { name: 'Event Decoration', provider: 'Decorator', basePrice: 8000, rating: 4.5 },
    47: { name: 'Music & DJ', provider: 'DJ Service', basePrice: 5000, rating: 4.6 },
    48: { name: 'Event Photography', provider: 'Photographer', basePrice: 10000, rating: 4.7 },
    49: { name: 'Garden Maintenance', provider: 'Gardener', basePrice: 800, rating: 4.6 },
    50: { name: 'Plant Service', provider: 'Plant Care', basePrice: 400, rating: 4.4 }
  }

  const serviceInfo = allServices[serviceId] || { name: 'Service', provider: 'Provider', basePrice: 500, rating: 4.0 }

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const totalAmount = serviceInfo.basePrice + 100
    
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      if (!user) {
        alert('Please login first')
        navigate('/login')
        return
      }

      const mongoBooking = {
        userId: user._id,
        serviceId: serviceId,
        serviceName: serviceInfo.name,
        provider: serviceInfo.provider,
        date: bookingData.date,
        time: bookingData.time,
        address: bookingData.address,
        notes: bookingData.notes,
        basePrice: serviceInfo.basePrice,
        totalAmount: totalAmount
      }

      await bookingAPI.create(mongoBooking)
      alert('Order is successfully placed!')
      navigate('/orders')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Book {serviceInfo.name}</h2>
        <p className="auth-subtitle">Complete your booking details</p>

        <div className="service-summary">
          <h3>Service Details</h3>
          <p><strong>Service:</strong> {serviceInfo.name}</p>
          <p><strong>Provider:</strong> {serviceInfo.provider}</p>
          <p><strong>Rating:</strong> {serviceInfo.rating} ⭐</p>
          <p><strong>Base Price:</strong> ₹{serviceInfo.basePrice}</p>
          <p><strong>Service Charge:</strong> ₹100</p>
          <p className="total-amount"><strong>Total Amount: ₹{serviceInfo.basePrice + 100}</strong></p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Service Date</label>
            <input
              type="date"
              name="date"
              className="form-input"
              value={bookingData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Preferred Time</label>
            <select
              name="time"
              className="form-input"
              value={bookingData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select Time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Service Address</label>
            <textarea
              name="address"
              className="form-input"
              rows="3"
              placeholder="Enter complete address"
              value={bookingData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Special Instructions</label>
            <textarea
              name="notes"
              className="form-input"
              rows="2"
              placeholder="Any special requirements..."
              value={bookingData.notes}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Confirm Booking - Pay ₹{serviceInfo.basePrice + 100}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingDetails