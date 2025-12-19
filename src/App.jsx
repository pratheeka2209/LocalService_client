import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import Directory from './Pages/Directory'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import UserDetails from './Pages/UserDetails'
import BookingDetails from './Pages/BookingDetails'
import Orders from './Pages/Orders'
import MyAccount from './Pages/MyAccount'
import Profile from './Pages/Profile'
import './styles.css'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path="/booking/:serviceId" element={<BookingDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App