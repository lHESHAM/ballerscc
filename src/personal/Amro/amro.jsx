import React from 'react'
import './amro.css'

import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import AmroS from './amroS'

export default function amro() {
  return (
    <div>
        <Navbar />
        <AmroS />
        <Footer />
    </div>
  )
}
