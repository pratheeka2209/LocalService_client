import React, { useState, useEffect } from 'react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      setProfileData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || ''
      })
    }
  }, [])

  const orderHistory = [
    { id: '#12345', service: 'House Cleaning', provider: 'CleanHome Pro', date: '2024-01-15', status: 'Completed', amount: '$120' },
    { id: '#12346', service: 'Plumbing Repair', provider: 'PlumbFix Solutions', date: '2024-01-20', status: 'Scheduled', amount: '$85' },
    { id: '#12347', service: 'Car Wash', provider: 'AutoWash Express', date: '2024-01-10', status: 'Completed', amount: '$35' }
  ]

  const favoriteProviders = [
    { name: 'CleanHome Pro', service: 'House Cleaning', rating: 4.7, phone: '(555) 456-7890' },
    { name: 'ElectricPro Services', service: 'Electrical Work', rating: 4.8, phone: '(555) 234-5678' },
    { name: 'GreenThumb Gardens', service: 'Gardening', rating: 4.5, phone: '(555) 012-3456' }
  ]

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    console.log('Profile updated:', profileData)
    alert('Profile updated successfully!')
  }

  return (
    <div className="account-container fade-in">
      <div className="account-header">
        <h1 className="slide-up">My Profile</h1>
      </div>

      <div className="account-tabs">
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          👤 Profile
        </button>
        <button 
          className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          📋 Order History
        </button>
        <button 
          className={`tab-btn ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          ⭐ Favorites
        </button>
      </div>

      {activeTab === 'profile' && (
        <div className="auth-form-container" style={{maxWidth: '600px', margin: '0 auto'}}>
          <h2 className="auth-title">Profile Information</h2>
          <form onSubmit={handleProfileUpdate} className="auth-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                value={profileData.name}
                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={profileData.email}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Phone Number"
                value={profileData.phone}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Address"
                value={profileData.address}
                onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                className="form-input"
                rows="3"
              />
            </div>
            <button type="submit" className="submit-btn hover-grow">Update Profile</button>
          </form>
        </div>
      )}

      {activeTab === 'orders' && (
        <div>
          <h2 style={{textAlign: 'center', marginBottom: '2rem', color: '#2c3e50'}}>Order History</h2>
          <div>
            {orderHistory.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>{order.service}</h3>
                    <div className="order-id">Order {order.id}</div>
                    <div className="provider">by {order.provider}</div>
                  </div>
                  <div>
                    <div className="amount">{order.amount}</div>
                    <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                  </div>
                </div>
                <div className="order-details">
                  <div className="detail-item">
                    <span className="label">Date:</span>
                    <span className="value">{order.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'favorites' && (
        <div>
          <h2 style={{textAlign: 'center', marginBottom: '2rem', color: '#2c3e50'}}>Favorite Providers</h2>
          <div className="providers-grid">
            {favoriteProviders.map((provider, index) => (
              <div key={index} className="provider-card">
                <div className="provider-image">🏢</div>
                <div className="provider-details">
                  <h3>{provider.name}</h3>
                  <p>{provider.service}</p>
                  <div className="rating">
                    {'★'.repeat(Math.floor(provider.rating))} {provider.rating}
                  </div>
                  <p style={{color: '#7f8c8d', fontSize: '0.9rem'}}>{provider.phone}</p>
                  <button className="book-btn">Contact Provider</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile