import React, { useState, useEffect } from 'react'
import { bookingAPI } from '../services/api'

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
          const mongoOrders = await bookingAPI.getByUser(user._id)
          
          const formattedOrders = mongoOrders.map(order => ({
            id: order.orderId,
            service: order.serviceName,
            provider: order.provider,
            date: order.date,
            time: order.time,
            status: order.status,
            amount: `₹${order.totalAmount}`,
            address: order.address,
            notes: order.notes,
            _id: order._id
          }))
          
          setOrders(formattedOrders)
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error)
      }
    }
    
    fetchOrders()
  }, [])

  const handleCancel = async (orderId) => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      try {
        const order = orders.find(o => o.id === orderId)
        if (order._id) {
          await bookingAPI.delete(order._id)
          const updatedOrders = orders.filter(o => o.id !== orderId)
          setOrders(updatedOrders)
          alert('Order cancelled successfully')
        }
      } catch (error) {
        alert(error.message)
      }
    }
  }

  const handleReschedule = async (orderId) => {
    const newDate = prompt('Enter new date (YYYY-MM-DD):')
    const newTime = prompt('Enter new time (e.g., 10:00 AM):')
    
    if (newDate && newTime) {
      try {
        const order = orders.find(o => o.id === orderId)
        if (order._id) {
          await bookingAPI.update(order._id, { date: newDate, time: newTime })
          const updatedOrders = orders.map(o => 
            o.id === orderId ? { ...o, date: newDate, time: newTime } : o
          )
          setOrders(updatedOrders)
          alert('Order rescheduled successfully')
        }
      } catch (error) {
        alert(error.message)
      }
    }
  }

  const providerContacts = {
    'Electrician': '+91 98765 43210',
    'Plumber': '+91 98765 43211',
    'AC Technician': '+91 98765 43212',
    'Carpenter': '+91 98765 43213',
    'House Cleaner': '+91 98765 43217',
    'Office Cleaner': '+91 98765 43218',
    'Hair Stylist': '+91 98765 43223',
    'Massage Therapist': '+91 98765 43224',
    'Tiffin Service': '+91 98765 43228',
    'Party Caterer': '+91 98765 43229',
    'Taxi Driver': '+91 98765 43233',
    'Auto Driver': '+91 98765 43234',
    'Home Tutor': '+91 98765 43238',
    'Music Teacher': '+91 98765 43239',
    'Pet Groomer': '+91 98765 43243',
    'Personal Trainer': '+91 98765 43247',
    'Mobile Repair': '+91 98765 43250',
    'Event Planner': '+91 98765 43254',
    'Gardener': '+91 98765 43258'
  }

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1>My Orders</h1>
        <p>Track and manage your service bookings</p>
      </div>
      
      <div className="orders-list">
        {orders.map(order => (
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
            
            <div className="provider-contact">
              <p><strong>Provider Contact:</strong> {providerContacts[order.provider] || '+91 98765 00000'}</p>
            </div>
            
            <div className="order-actions">
              {(order.status === 'Confirmed' || order.status === 'Pending') && (
                <button className="action-btn cancel" onClick={() => handleCancel(order.id)}>Cancel Order</button>
              )}
              {(order.status === 'Confirmed' || order.status === 'Pending') && (
                <button className="action-btn reschedule" onClick={() => handleReschedule(order.id)}>Reschedule</button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {orders.length === 0 && (
        <div className="no-orders">
          <p>No orders found. Start by booking a service!</p>
        </div>
      )}
    </div>
  )
}

export default Orders