import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Pages/Home.jsx';
import About from '../components/Pages/About.jsx';
import Contact from '../components/Pages/Contact.jsx';
import PresidentMessage from '../components/Pages/PresidentMessage.jsx';
import Gallery from '../components/Pages/Gallery.jsx';
import MembersList from '../components/Pages/MembersList.jsx';
import Membership from '../components/Pages/Membership.jsx';
import JournalCard from '../components/Pages/eMagazine.jsx';
import BylawsPage from '../components/Pages/ByLaws.jsx';
import EndowmentLectures from '../components/Pages/EndowmentLectures.jsx';
import InternationalConferencesPage from '../components/Pages/IntConferences.jsx';
import CongressPage from '../components/Pages/AnnualCongress.jsx';
import APTSMSPresidents from '../components/Pages/APTSMSPresidents.jsx'
import ExecutiveCouncil from '../components/Pages/ExecutiveCouncil.jsx'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/announcement" element={<div>Announcement</div>}/>
        <Route path="/membership" element={<Membership/>} />
        <Route path="/corporate-members" element={<MembersList/>} />
        <Route path="/life-members" element={<div>List of Life Members</div>} />
        <Route path="/events" element={<div>Events Page</div>} />
        <Route path="/annual-congress" element={<CongressPage/>} />
        <Route path="/international-conferences" element={<InternationalConferencesPage/>} />
        {<Route path="/about-aptsms" element={<About/>} />}
        <Route path="/aptsms-presidents" element={<APTSMSPresidents/>} />
        <Route path="/executive-council" element={<ExecutiveCouncil/>} />
        <Route path="/endowment-lectures" element={<EndowmentLectures/>} />
        <Route path="/by-laws" element={<BylawsPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/president-message" element={<PresidentMessage/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/e-magzine" element={<JournalCard/>} />
      </Routes>
  )
}

export default Routing