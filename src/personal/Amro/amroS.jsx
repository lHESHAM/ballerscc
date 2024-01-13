import React from 'react'
import AmroS from '../../components/images/AmroS.jpg'
import { IoLogoFacebook , IoLogoInstagram  , IoLogoLinkedin } from 'react-icons/io5';
import './amro.css'

export default function amroS() {
  return (
    <div>
    <div className="story">
      <h2 className="story-heading">Amro Al-Wageei</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={AmroS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">Amro Al-Wageei</p>
            <p className="role">(Founder | Coach | Technical team leader)</p>
            <p className='role'><a href='./join'> <IoLogoFacebook  />  </a> <a href='./join'> <IoLogoInstagram   />  </a> <a href='./join'> <IoLogoLinkedin  />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>
            At 26 years old, I bring a wealth of experience and expertise in the realm of basketball, having dedicated over 13 years to honing my skills and mastering the game. my passion for basketball has been an integral part of my journey. This deep-rooted love for the sport has not only sculpted my physical abilities but has also instilled in me valuable qualities such as teamwork, discipline, and resilience.
            </p>

            <p>
            Currently, I channel my enthusiasm for technology and development as an Orange Technical Trainer specializing in full-stack web development. Leveraging my extensive background in basketball, I've seamlessly transitioned into the role of a technical trainer, using my coaching skills to guide aspiring developers on their journey. The parallels between the precision and strategy required in both basketball and web development are evident in my teaching approach, where I emphasize teamwork, attention to detail, and the ability to adapt to challenges. Through this unique combination of experiences, I strive to inspire and empower the next generation of developers to reach their full potential in the dynamic world of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
