import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reviews = () => {
  const navigate = useNavigate()
  const [reviewData, setReviewData] = useState({
    service: '',
    provider: '',
    rating: 5,
    comment: ''
  })

  const services = [
    'Electrical Work', 'Plumbing Service', 'AC Repair', 'Wood Work',
    'Home Cleaning', 'Office Cleaning', 'Hair Cut & Style', 'Body Massage',
    'Daily Tiffin', 'Event Catering', 'City Taxi', 'Auto Rickshaw',
    'Subject Tuition', 'Music Lessons', 'Pet Grooming', 'Gym Training',
    'Phone Repair', 'Party Planning', 'Garden Maintenance'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save review to localStorage for demo
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]')
    const newReview = {
      ...reviewData,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      user: JSON.parse(localStorage.getItem('user'))?.name || 'Anonymous'
    }
    reviews.push(newReview)
    localStorage.setItem('reviews', JSON.stringify(reviews))
    
    alert('Review submitted successfully!')
    setReviewData({ service: '', provider: '', rating: 5, comment: '' })
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Write a Review</h2>
        <p className="auth-subtitle">Share your experience with our services</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <select
              className="form-input"
              value={reviewData.service}
              onChange={(e) => setReviewData({...reviewData, service: e.target.value})}
              required
            >
              <option value="">Select Service</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Provider Name"
              className="form-input"
              value={reviewData.provider}
              onChange={(e) => setReviewData({...reviewData, provider: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label style={{display: 'block', marginBottom: '5px', fontWeight: 'bold'}}>Rating</label>
            <select
              className="form-input"
              value={reviewData.rating}
              onChange={(e) => setReviewData({...reviewData, rating: parseInt(e.target.value)})}
            >
              <option value={5}>5 Stars - Excellent</option>
              <option value={4}>4 Stars - Good</option>
              <option value={3}>3 Stars - Average</option>
              <option value={2}>2 Stars - Poor</option>
              <option value={1}>1 Star - Terrible</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              placeholder="Write your review..."
              className="form-input"
              rows="4"
              value={reviewData.comment}
              onChange={(e) => setReviewData({...reviewData, comment: e.target.value})}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit Review</button>
        </form>
      </div>
    </div>
  )
}

export default Reviews