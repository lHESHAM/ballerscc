import React from 'react'
import Zig from '../components/Zig/zig'
import Aboutf from '../components/AboutF/aboutf'
// import Navbar from '../components/Navbar/Navbar'
// import FormikF from '../components/Formik/formik'
import FixedButton from '../components/FixedButton/FixedButton'
import ScrollToTop from '../components/ScrollToTop/top'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/Navbar'

export default function about() {
  return (
    <div>
      <Navbar />
      <Aboutf />
      <Zig />
      <Footer />
      <FixedButton />
      <ScrollToTop />
    </div>
  )
}
