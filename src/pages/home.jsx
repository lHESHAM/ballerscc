import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Wavy from '../components/Wavy/wavy'
import First from '../components/First/first'
import AboutBallers from '../components/Aballers/aballers';
import Services from '../components/services/services'
import AfterServices from '../components/AfterServices/AfterServices'
import Scan from '../components/Scan/scan';
import Ballers from '../components/Ballers/ballers'
// import Gallery from '../components/Gallery/Gallery';
import Map from '../components/Map/map'
import FAQ from '../components/FAQ/faq';
import Footer from '../components/Footer/Footer'
import FixedButton from '../components/FixedButton/FixedButton'
import ScrollToTop from '../components/ScrollToTop/top'
import Navbar from '../components/NavBar/Navbar';

// #BDE4F4
// #404969
// #DC552C

export default function home() {
  return (
    <div>
      <Navbar />
      <Wavy />
      <First />
      <AboutBallers />
      <Services />
      <AfterServices />
      <Scan />
      <Ballers />
      <FAQ />
      <Map />
      <Footer />
      <FixedButton />
      <ScrollToTop />
    </div>
  )
}
