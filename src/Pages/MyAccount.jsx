import React, { useState } from 'react'

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('profile')
  
  // Load user data from localStorage
  const [userData, setUserData] = useState(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const parsedUser = JSON.parse(user)
      return {
        name: parsedUser.name || '',
        email: parsedUser.email || '',
        firstName: parsedUser.firstName || '',
        lastName: parsedUser.lastName || '',
        phone: parsedUser.phone || '',
        address: parsedUser.address || '',
        city: parsedUser.city || '',
        state: parsedUser.state || '',
        zipCode: parsedUser.zipCode || '',
        dateOfBirth: parsedUser.dateOfBirth || ''
      }
    }
    return {
      name: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      dateOfBirth: ''
    }
  })

  const sampleOrders = [
    {
      id: '#ORD001',
      service: 'House Cleaning',
      provider: 'House Cleaner',
      date: '2024-01-25',
      time: '10:00 AM',
      status: 'Confirmed',
      amount: '₹1300',
      address: 'Sector 15, Gurgaon'
    },
    {
      id: '#ORD002',
      service: 'Electrical Work',
      provider: 'Electrician',
      date: '2024-01-22',
      time: '2:00 PM',
      status: 'Completed',
      amount: '₹500',
      address: 'Lajpat Nagar, Delhi'
    }
  ]

  const handleProfileUpdate = async (e) => {
    e.preventDefault()
    
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('http://localhost:5000/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData)
      })
      
      const data = await response.json()
      
      if (response.ok) {
        const currentUser = JSON.parse(localStorage.getItem('user'))
        const updatedUser = { ...currentUser, ...userData }
        localStorage.setItem('user', JSON.stringify(updatedUser))
        alert('Profile updated successfully!')
      } else {
        alert(data.message || 'Failed to update profile')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    }
  }

  const handleLogout = () => {
    // Clear auth data and redirect
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div className="account-container">
      <div className="account-header">
        <h1>My Account</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="account-tabs">
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          My Orders
        </button>
      </div>

      {activeTab === 'profile' && (
        <div className="tab-content">
          <h2>Profile Information</h2>
          <form onSubmit={handleProfileUpdate} className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={userData.firstName}
                  onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={userData.lastName}
                  onChange={(e) => setUserData({...userData, lastName: e.target.value})}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                value={userData.email}
                readOnly
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-input"
                value={userData.phone}
                onChange={(e) => setUserData({...userData, phone: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-input"
                value={userData.address}
                onChange={(e) => setUserData({...userData, address: e.target.value})}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-input"
                  value={userData.city}
                  onChange={(e) => setUserData({...userData, city: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">State</label>
                <input
                  type="text"
                  className="form-input"
                  value={userData.state}
                  onChange={(e) => setUserData({...userData, state: e.target.value})}
                />
              </div>
            </div>
            
            <button type="submit" className="submit-btn">Update Profile</button>
          </form>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="tab-content">
          <h2>My Orders</h2>
          <div className="orders-list">
            {sampleOrders.map(order => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <div className="order-info">
                    <h3>{order.service}</h3>
                    <p className="order-id">Order {order.id}</p>
                    <p className="provider">by {order.provider}</p>
                  </div>
                  <div className="order-status">
                    <span className={`status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                    <span className="amount">{order.amount}</span>
                  </div>
                </div>
                
                <div className="order-details">
                  <div className="detail-item">
                    <span className="label">Date:</span>
                    <span className="value">{order.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Time:</span>
                    <span className="value">{order.time}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Address:</span>
                    <span className="value">{order.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MyAccount