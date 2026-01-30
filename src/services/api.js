const API_BASE_URL = 'http://localhost:5000/api'

// Auth API with fallback
export const authAPI = {
  register: async (userData) => {
    console.log('🚀 Sending signup request to:', `${API_BASE_URL}/auth/register`)
    console.log('📝 User data:', userData)
    
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.password
      })
    })
    
    const data = await response.json()
    console.log('📥 Server response:', data)
    
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed')
    }
    
    return data
  },

  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
    
    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
  }
}

// Booking API - MongoDB only
export const bookingAPI = {
  create: async (bookingData) => {
    console.log('🔄 Creating booking in MongoDB...', bookingData)
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(bookingData)
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    console.log('✅ Booking created:', data)
    return data
  },

  getByUser: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${userId}`)
    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
  },

  update: async (bookingId, updateData) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/status`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(updateData)
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
  },

  cancel: async (bookingId) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}/cancel`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
  }
}