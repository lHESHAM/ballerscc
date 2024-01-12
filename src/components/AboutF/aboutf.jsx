import React from 'react'
import VideoJoin from '../video/BALLERS.mp4'
import { useTranslation } from 'react-i18next';

import './aboutf.css'
export default function Aboutf() {
  const { t } = useTranslation();

  return (
    <div>

    <div className='container-aboutf1'>
      <video className='responsive-video-a' controls loop autoPlay muted>
        <source src={VideoJoin} type='video/mp4' />
      </video>
      <a href="./join" className="ctaa-about animated-button">{t('Zigi-JoinButton')}</a>
    </div>

  </div>
  
  )
}

// <div className='container-aboutf'>
    
// <h5> At Ballers Basketball Academy, we're your hoops BFFs! We've got the tricks and treats to fix any basketball blues. Our platform is the cool spot for secure and awesome basketball training, no matter where you dribble. Let's ball in style!" 🏀🌟</h5>
// <p> At Ballers Basketball Academy, we're your hoops BFFs! We've got the tricks and treats to fix any basketball blues. Our platform is the cool spot for secure and awesome basketball training, no matter where you dribble. Let's ball in style!" 🏀🌟</p>
// </div>