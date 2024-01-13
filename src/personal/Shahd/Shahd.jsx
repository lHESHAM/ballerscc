import React from 'react'
import ShahdS from '../../components/images/RaniaS.jpg'
import {IoLogoInstagram } from 'react-icons/io5';
import './Shahd.css'

export default function amroS() {
  return (
    <div>
    <div className="story">
      <h2 className="story-heading">Shahd Adnan</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={ShahdS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">Shahd Adnan</p>
            <p className="role">( Desginer | UI / UX )
            </p>
            <p className='role'><a href='https://www.instagram.com/shahdadnan01/'> <IoLogoInstagram   />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>
            Shahd Adnan, born in Palestine in 2001, is currently pursuing her university studies in design. She is dedicated to her education and is working towards her degree at a university in Palestine.
            </p>

            <p>

            Shahd Adnan's commitment to design goes beyond the classroom, as she actively engages in various design projects to enhance her practical skills. Alongside her academic pursuits, she has participated in design competitions and collaborative initiatives, showcasing her passion and talent in the field. Shahd is determined to make meaningful contributions to the world of design, drawing inspiration from her Palestinian roots and the rich cultural heritage that surrounds her.        </p>
      
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
