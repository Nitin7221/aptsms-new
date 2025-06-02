import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/Pages/Home.jsx'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/membership" element={<div>Membership Page</div>} />
        <Route path="/corporate-members" element={<div>List of Corporate Members</div>} />
        <Route path="/life-members" element={<div>List of Life Members</div>} />
        <Route path="/events" element={<div>Events Page</div>} />
        <Route path="/annual-congress" element={<div>Annual Congress</div>} />
        <Route path="/international-conferences" element={<div>International Conferences</div>} />
        <Route path="/about-aptsms" element={<div>About APTSMS</div>} />
        <Route path="/aptsms-presidents" element={<div>APTSMS Presidents</div>} />
        <Route path="/executive-council" element={<div>Executive Council</div>} />
        <Route path="/endowment-lectures" element={<div>Endowment Lectures</div>} />
        <Route path="/by-laws" element={<div>By-laws</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/president-message" element={<div>President Message</div>} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/e-magzine" element={<div>E-Magzine Page</div>} />
      </Routes>
  )
}

export default Routing