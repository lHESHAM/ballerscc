import React from 'react'
import LaithS from '../../components/images/LaithS.jpg'
import {IoLogoInstagram  , IoLogoLinkedin } from 'react-icons/io5';
import './Laith.css'

export default function amroS() {
  return (
    <div>
    <div className="story">
      <h2 className="story-heading">Laith Abbas</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={LaithS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">Laith Abbas</p>
            <p className="role">( Back-End Web Developer |AI Engineer & ML )</p>
            <p className='role'><a href='https://www.instagram.com/laith.y_/'> <IoLogoInstagram   />  </a> <a href='https://www.linkedin.com/in/laith-yaseen/'> <IoLogoLinkedin  />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>
            Hello, I'm Laith Abbas,  Back-End Web Developer recognized for his expertise in designing scalable server-side architectures using languages such as Laravel, PHP
            </p>

            <p>

            Meticulous approach to detail sets him apart in crafting robust and efficient systems for dynamic websites and applications. What distinguishes Laith is his integration of Artificial Intelligence (AI) and Machine Learning (ML) into projects, showcasing a forward-thinking mindset. Beyond traditional web development, he leverages AI engineering skills to create intelligent, automated solutions that enhance user experiences.            </p>
      
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
