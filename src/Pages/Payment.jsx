import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { bookingAPI } from '../services/api'

const Payment = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const bookingData = location.state || {}
  
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  })

  const handlePayment = async (e) => {
    e.preventDefault()
    
    try {
      const mongoBooking = {
        userId: bookingData.userId,
        serviceId: bookingData.serviceId,
        serviceName: bookingData.serviceName,
        provider: bookingData.provider,
        date: bookingData.date,
        time: bookingData.time,
        address: bookingData.address,
        notes: bookingData.notes,
        basePrice: bookingData.basePrice,
        totalAmount: bookingData.totalAmount
      }

      await bookingAPI.create(mongoBooking)
      alert('Payment Successful! Booking Confirmed.')
      navigate('/orders')
    } catch (error) {
      alert('Payment failed: ' + error.message)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2 className="auth-title">Payment</h2>
        
        <div style={{background: '#f8f9fa', padding: '15px', borderRadius: '4px', marginBottom: '20px'}}>
          <h3>Booking Summary</h3>
          <p><strong>Service:</strong> {bookingData.serviceName}</p>
          <p><strong>Provider:</strong> {bookingData.provider}</p>
          <p><strong>Date:</strong> {bookingData.date}</p>
          <p><strong>Time:</strong> {bookingData.time}</p>
          <p><strong>Amount:</strong> ₹{bookingData.totalAmount}</p>
        </div>

        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label>Payment Method</label>
            <select 
              className="form-input" 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="wallet">Wallet</option>
            </select>
          </div>

          {paymentMethod === 'card' && (
            <>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="form-input"
                  value={cardData.number}
                  onChange={(e) => setCardData({...cardData, number: e.target.value})}
                  required
                />
              </div>
              <div style={{display: 'flex', gap: '10px'}}>
                <div className="form-group" style={{flex: 1}}>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="form-input"
                    value={cardData.expiry}
                    onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group" style={{flex: 1}}>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="form-input"
                    value={cardData.cvv}
                    onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="form-input"
                  value={cardData.name}
                  onChange={(e) => setCardData({...cardData, name: e.target.value})}
                  required
                />
              </div>
            </>
          )}

          {paymentMethod === 'upi' && (
            <div className="form-group">
              <input
                type="text"
                placeholder="UPI ID (e.g., user@paytm)"
                className="form-input"
                required
              />
            </div>
          )}

          {paymentMethod === 'wallet' && (
            <div className="form-group">
              <select className="form-input" required>
                <option value="">Select Wallet</option>
                <option value="paytm">Paytm</option>
                <option value="phonepe">PhonePe</option>
                <option value="googlepay">Google Pay</option>
              </select>
            </div>
          )}

          <button type="submit" className="submit-btn">
            Pay ₹{bookingData.totalAmount}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Payment