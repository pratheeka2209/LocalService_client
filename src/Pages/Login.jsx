import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      console.log('🚀 Attempting login...', formData.email)
      const userData = await authAPI.login({
        email: formData.email,
        password: formData.password
      })

      console.log('✅ Login successful:', userData)
      localStorage.setItem('token', userData.token)
      localStorage.setItem('user', JSON.stringify(userData))
      alert('Login successful!')
      navigate('/profile')
    } catch (error) {
      console.error('❌ Login error:', error)
      alert(error.message || 'Login failed. Please check your credentials.')
    }
    
    setLoading(false)
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container fade-in">
        <div>
          <h2 className="auth-title slide-up">
            Sign in to your account
          </h2>
          <p className="auth-subtitle">
            Or{' '}
            <Link to="/signup" className="auth-link">
              create a new account
            </Link>
          </p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              name="password"
              type="password"
              required
              className="form-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn hover-grow" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login