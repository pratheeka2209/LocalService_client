import React, { useState } from 'react'

const Help = () => {
  const [activeTab, setActiveTab] = useState('faq')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const faqs = [
    {
      question: "How do I book a service?",
      answer: "Browse our directory, select a service provider, fill in your details, and proceed to payment."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel confirmed bookings from your Orders page. Cancellation policies may apply."
    },
    {
      question: "How do I reschedule an appointment?",
      answer: "Go to your Orders page and click the 'Reschedule' button next to your booking."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards, UPI, and digital wallets like Paytm, PhonePe, and Google Pay."
    },
    {
      question: "How can I contact a service provider?",
      answer: "Provider contact details are shown in your booking confirmation and Orders page."
    }
  ]

  const handleContactSubmit = (e) => {
    e.preventDefault()
    alert('Your message has been sent! We will get back to you soon.')
    setContactForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="account-container fade-in">
      <div className="account-header">
        <h1 className="slide-up">Help & Support</h1>
      </div>

      <div className="account-tabs">
        <button 
          className={`tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          📋 FAQ
        </button>
        <button 
          className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          📞 Contact Us
        </button>
        <button 
          className={`tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
          onClick={() => setActiveTab('guide')}
        >
          📖 User Guide
        </button>
      </div>

      {activeTab === 'faq' && (
        <div>
          <h2 style={{textAlign: 'center', marginBottom: '2rem', color: '#2c3e50'}}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="order-card">
              <h3 style={{color: '#3498db', marginBottom: '10px'}}>{faq.question}</h3>
              <p style={{color: '#7f8c8d', lineHeight: '1.6'}}>{faq.answer}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="auth-form-container" style={{maxWidth: '600px', margin: '0 auto'}}>
          <h2 className="auth-title">Contact Support</h2>
          <form onSubmit={handleContactSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                className="form-input"
                value={contactForm.subject}
                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-input"
                rows="5"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      )}

      {activeTab === 'guide' && (
        <div>
          <h2 style={{textAlign: 'center', marginBottom: '2rem', color: '#2c3e50'}}>How to Use Our Platform</h2>
          <div className="order-card">
            <h3 style={{color: '#3498db'}}>Step 1: Create Account</h3>
            <p>Sign up with your email and create a secure password.</p>
          </div>
          <div className="order-card">
            <h3 style={{color: '#3498db'}}>Step 2: Browse Services</h3>
            <p>Use our directory to find service providers in your area.</p>
          </div>
          <div className="order-card">
            <h3 style={{color: '#3498db'}}>Step 3: Book Service</h3>
            <p>Select a provider, choose date/time, and provide service address.</p>
          </div>
          <div className="order-card">
            <h3 style={{color: '#3498db'}}>Step 4: Make Payment</h3>
            <p>Complete payment using your preferred method.</p>
          </div>
          <div className="order-card">
            <h3 style={{color: '#3498db'}}>Step 5: Manage Bookings</h3>
            <p>Track, reschedule, or cancel bookings from your Orders page.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Help