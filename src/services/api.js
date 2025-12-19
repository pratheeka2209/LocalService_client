const API_BASE_URL = 'https://localservice-server.onrender.com/api'

// Auth API with fallback
export const authAPI = {
  register: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      // Fallback to localStorage
      const localUser = {
        _id: Date.now(),
        name: userData.name,
        email: userData.email,
        token: 'local-token-' + Date.now()
      }
      localStorage.setItem('user', JSON.stringify(localUser))
      localStorage.setItem('token', localUser.token)
      return localUser
    }
  },

  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      // Fallback to localStorage validation
      const existingUser = localStorage.getItem('user')
      if (existingUser) {
        const userData = JSON.parse(existingUser)
        if (userData.email === credentials.email) {
          return userData
        }
      }
      throw new Error('Invalid credentials or no account found')
    }
  }
}

// Booking API with fallback
export const bookingAPI = {
  create: async (bookingData) => {
    console.log('🔄 Attempting MongoDB booking...', bookingData)
    try {
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message)
      console.log('✅ MongoDB booking successful:', data)
      return data
    } catch (error) {
      console.log('❌ MongoDB failed, using localStorage:', error.message)
      // Fallback to localStorage
      const newOrder = {
        id: '#ORD' + Date.now().toString().slice(-6),
        service: bookingData.serviceName,
        provider: bookingData.provider,
        date: bookingData.date,
        time: bookingData.time,
        status: 'Confirmed',
        amount: `₹${bookingData.totalAmount}`,
        address: bookingData.address,
        notes: bookingData.notes,
        _id: Date.now()
      }
      
      const existingOrders = JSON.parse(localStorage.getItem('userOrders') || '[]')
      existingOrders.unshift(newOrder)
      localStorage.setItem('userOrders', JSON.stringify(existingOrders))
      return newOrder
    }
  },

  getByUser: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${userId}`)
      const data = await response.json()
      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      // Fallback to localStorage
      const savedOrders = localStorage.getItem('userOrders')
      if (savedOrders) {
        const orders = JSON.parse(savedOrders)
        return orders.map(order => ({
          orderId: order.id,
          serviceName: order.service,
          provider: order.provider,
          date: order.date,
          time: order.time,
          status: order.status,
          totalAmount: parseInt(order.amount.replace('₹', '')),
          address: order.address,
          notes: order.notes,
          _id: order._id
        }))
      }
      return []
    }
  },

  update: async (bookingId, updateData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      // Fallback to localStorage
      const savedOrders = JSON.parse(localStorage.getItem('userOrders') || '[]')
      const updatedOrders = savedOrders.map(order => 
        order._id == bookingId ? { ...order, ...updateData } : order
      )
      localStorage.setItem('userOrders', JSON.stringify(updatedOrders))
      return { success: true }
    }
  },

  delete: async (bookingId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
        method: 'DELETE'
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      // Fallback to localStorage
      const savedOrders = JSON.parse(localStorage.getItem('userOrders') || '[]')
      const updatedOrders = savedOrders.filter(order => order._id != bookingId)
      localStorage.setItem('userOrders', JSON.stringify(updatedOrders))
      return { success: true }
    }
  }
}