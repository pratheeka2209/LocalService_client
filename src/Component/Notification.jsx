import React, { useState, useEffect } from 'react'

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: type === 'success' ? '#27ae60' : '#e74c3c',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '4px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 1000,
      maxWidth: '300px'
    }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span>{message}</span>
        <button 
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            marginLeft: '10px'
          }}
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default Notification