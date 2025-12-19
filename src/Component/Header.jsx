import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [user, setUser] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    setShowDropdown(false)
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">🛎️</span>
          <span className="logo-text">Servio</span>
        </Link>
        <ul className="nav-list">
          <li>
            <Link to='/' className="nav-link">Home</Link>
          </li>
          <li>
            <Link to='/directory' className="nav-link">Directory</Link>
          </li>
          {user && (
            <li>
              <Link to='/orders' className="nav-link">My Orders</Link>
            </li>
          )}
          {user ? (
            <li className="user-dropdown">
              <button 
                className="user-account-btn" 
                onClick={() => setShowDropdown(!showDropdown)}
              >
                👤 {user.name} ▼
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to='/profile' className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    👤 Profile
                  </Link>
                  <Link to='/my-account' className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    💼 My Account
                  </Link>
                  <Link to='/orders' className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    📋 My Orders
                  </Link>
                  <button onClick={handleLogout} className="dropdown-item logout-item">
                    🚪 Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <>
              <li>
                <Link to='/login' className="login-btn">Login</Link>
              </li>
              <li>
                <Link to='/signup' className="signup-btn">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header