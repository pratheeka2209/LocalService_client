import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserDetails = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Update user data in localStorage
    const user = JSON.parse(localStorage.getItem('user'))
    const updatedUser = { ...user, ...formData }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    
    alert('Profile completed successfully!')
    navigate('/my-account')
  }

  const handleSkip = () => {
    navigate('/my-account')
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container fade-in">
        <h2 className="auth-title slide-up">Complete Your Profile</h2>
        <p className="auth-subtitle">Please provide your details</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                name="firstName"
                type="text"
                className="form-input"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                name="lastName"
                type="text"
                className="form-input"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              name="phone"
              type="tel"
              className="form-input"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              name="address"
              type="text"
              className="form-input"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                name="city"
                type="text"
                className="form-input"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                name="state"
                type="text"
                className="form-input"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              name="zipCode"
              type="text"
              className="form-input"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn hover-grow">
              Complete Profile
            </button>
            <button type="button" className="btn secondary" onClick={handleSkip}>
              Skip for Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserDetails