import React from 'react'
import AhmadS from '../../components/images/AhmadS.jpg'
import { IoLogoFacebook , IoLogoInstagram  , IoLogoLinkedin } from 'react-icons/io5';
import './ahmad.css'

export default function amroS() {
  return (
    <div>
    <div className="story">
      <h2 className="story-heading">Ahmad Ameen</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={AhmadS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">Ahmad Ameen</p>
            <p className="role">(Founder | Coach )</p>
            <p className='role'><a href='https://www.facebook.com/ahmed.ameen.581730'> <IoLogoFacebook  />  </a> <a href='https://www.instagram.com/ahmad_ameen_1/'> <IoLogoInstagram   />  </a> </p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>
            Captain Engineer Ahmed Yassin works as an engineer at the Aqaba Development Company
            He was also one of the distinguished modern players with the Aqaba Youth Club, a basketball player for nearly a year, and he also has experience in training in advanced techniques.
            He obtained a certificate of participation in the Arab Trainers Course for the year 2023 and a certificate of participation in the FIBA Level 1 course.
            </p>

            <p>
            He combines a brilliant engineer and a world-class coach in the world of basketball. He possesses unique skills in analyzing and designing electronics with an unlimited passion for developing skills.
            </p>
            <p>
            Including strategy and understanding the basics of the game, leading to making the most of them. His profession combines engineering strengths and sporting passion, creating a unique experience between creativity and excellence in every aspect of sporting life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
