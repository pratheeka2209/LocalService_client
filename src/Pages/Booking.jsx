import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Booking = () => {
  const { service } = useParams()
  const navigate = useNavigate()
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    address: '',
    notes: ''
  })

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking:', { service, ...bookingData })
    navigate('/orders')
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Book {service}</h2>
        <p className="auth-subtitle">Schedule your service appointment</p>

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
              placeholder="Enter your address"
              value={bookingData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Additional Notes</label>
            <textarea
              name="notes"
              className="form-input"
              rows="3"
              placeholder="Any special instructions..."
              value={bookingData.notes}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking