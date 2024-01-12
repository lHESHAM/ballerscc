import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Team from '../components/Teams/team'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import FixedButton from '../components/FixedButton/FixedButton'
import ScrollToTop from '../components/ScrollToTop/top'
import Navbar from '../components/NavBar/Navbar'
export default function team() {
  return (
    <div>
      <Navbar />
      <Team />
      <Contact />
      <Footer />
      <FixedButton />
      <ScrollToTop />
    </div>
  )
}
