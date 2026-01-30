import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      console.log('🚀 Starting signup process...')
      console.log('📝 Form data:', formData)
      
      const userData = await authAPI.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      })
      
      console.log('✅ Signup successful:', userData)
      localStorage.setItem('token', userData.token)
      localStorage.setItem('user', JSON.stringify(userData))
      alert('Account created successfully!')
      navigate('/profile')
    } catch (error) {
      console.error('❌ Signup error:', error)
      alert(error.message || 'Registration failed. Please try again.')
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container fade-in">
        <h2 className="auth-title slide-up">Create Account</h2>
        <p className="auth-subtitle">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Sign in</Link>
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="name"
              type="text"
              required
              className="form-input"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              name="password"
              type="password"
              required
              className="form-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              name="confirmPassword"
              type="password"
              required
              className="form-input"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn hover-grow">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup