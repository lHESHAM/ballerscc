import React from 'react'
import Zig from '../components/Zig/zig'
import Aboutf from '../components/AboutF/aboutf'
import FixedButton from '../components/FixedButton/FixedButton'
import ScrollToTop from '../components/ScrollToTop/top'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/Navbar'
import AboutS from '../components/AboutS/AboutS'


export default function about() {
  return (
    <div>
      <Navbar />
      <AboutS />
      <Aboutf />
      <Zig />
      <Footer />
      <FixedButton />
      <ScrollToTop />
    </div>
  )
}
