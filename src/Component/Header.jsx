import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const [user, setUser] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const checkUser = () => {
      const userData = localStorage.getItem('user')
      const token = localStorage.getItem('token')
      if (userData && token) {
        setUser(JSON.parse(userData))
      } else {
        setUser(null)
      }
    }
    
    checkUser()
    
    // Listen for storage changes (when user logs in/out in another tab)
    window.addEventListener('storage', checkUser)
    
    return () => {
      window.removeEventListener('storage', checkUser)
    }
  }, [location]) // Re-check when location changes

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
          <li>
            <Link to='/reviews' className="nav-link">Reviews</Link>
          </li>
          <li>
            <Link to='/help' className="nav-link">Help</Link>
          </li>
          <li>
            <Link to='/about' className="nav-link">About</Link>
          </li>
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
                  <Link to='/reviews' className="dropdown-item" onClick={() => setShowDropdown(false)}>
                    ⭐ Write Review
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