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
      const userData = await authAPI.login({
        email: formData.email,
        password: formData.password
      })

      localStorage.setItem('token', userData.token)
      localStorage.setItem('user', JSON.stringify(userData))
      alert('Login successful!')
      window.location.href = '/profile'
    } catch (error) {
      alert(error.message)
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
          <div>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-input form-input-rounded-top"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              id="password"
              name="password"
              type="password"
              required
              className="form-input form-input-rounded-bottom"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="submit" className="submit-btn hover-grow" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login