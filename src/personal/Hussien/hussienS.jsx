import React from 'react'
import AmroS from '../../components/images/HussienS.jpg'
import {IoLogoInstagram  , IoLogoLinkedin } from 'react-icons/io5';
import './hussien.css'

export default function amroS() {
  return (
    <div>
    <div className="story">
      <h2 className="story-heading">Hussein Injass</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={AmroS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">Hussein Injass</p>
            <p className="role">(Full Stack Web Developer | Mern Stack )</p>
            <p className='role'><a href='https://www.instagram.com/hussein_husam10/'> <IoLogoInstagram   />  </a> <a href='https://www.linkedin.com/in/hussein-injass-4aa933228/'> <IoLogoLinkedin  />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>
            Hello, I'm Hussein Injass, a passionate Full Stack Developer with a knack for crafting seamless and engaging web applications. With a solid foundation in both front-end and back-end technologies, I bring a comprehensive skill set to the table.
            </p>

            <p>
            On the front-end, I specialize in creating intuitive and visually appealing user interfaces. Proficient in HTML, CSS, and JavaScript, I leverage popular frameworks like React to build dynamic and responsive applications that deliver an exceptional user experience.
            </p>
            <p>
            Equally comfortable on the back-end, I navigate server-side logic and database management effortlessly. My expertise spans languages such as Node.js , Php and laravel framework ,allowing me to develop robust server-side components and integrate them seamlessly with databases using SQL or NoSQL technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
