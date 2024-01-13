import React from 'react'
import RaniaS from '../../components/images/RaniaS.jpg'
import {IoLogoInstagram } from 'react-icons/io5';
import './Rania.css'

export default function amroS() {
  return (
    <div>
    <div className="story">
      <h2 className="story-heading">Rania Enbh</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={RaniaS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">Rania Enbh</p>
            <p className="role">( Sport & Nutrition Coach )
            </p>
            <p className='role'><a href='https://www.instagram.com/nutricoach_rania/'> <IoLogoInstagram   />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>
            Rania Muhammad Enbeh obtained the rank of professional from the University of Jordan specializing in nutrition in the year 2020. Rania has three years of personal experience in the field of professional nutrition, and has obtained many internationally recognized certificates.
            </p>

            <p>

            Rania Anaba works hard and sincerely to use science and benefit, and seeks to educate society about the importance of health and fitness through the use of social media in a messaging and influential manner. Rania is distinguished by her passion for cutting-edge learning, as she follows complete recipes for the latest scientific research specialized in the field of health and fitness. It is concerned with providing effective and appropriate advice to every person who wishes to be guided or advised in the field of sports nutrition, and based on the suspected          </p>
      
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
