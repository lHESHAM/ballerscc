import React from 'react';
import Video1 from '../video/amro1.mp4'
import Video2 from '../video/Aboutus1.mp4'
import Video3 from '../video/Aboutus.mp4'
import { useTranslation } from 'react-i18next';

import './zig.css'

export default function Zig() {
  const { t } = useTranslation();


  return (

    <div class="zig-container">

      <span className='basketball'> 🏀 </span>
      <div className='zig1'>
        <div>
          <p className='text-video'>{t('Zigi1')} </p>
        </div>
        <div className='zigi-video' >
          <video controls loop autoPlay muted className='responsive-video'>
            <source src={Video1} />
          </video>
        </div>
      </div>

      <span className='basketball'> 🏀 </span>
      <div className='zigcenter'>
        <div className='zigi-video'>
          <video controls loop autoPlay muted className='responsive-video2'>
            <source src={Video3} />
          </video>
        </div>
        <div>
        <p className='text-video'> {t('Zigi2')} </p>
      </div>

      </div>

      <span className='basketball'> 🏀 </span>
      <div className='zig1' >
        <div>
          <p className='text-video'>{t('Zigi3')}</p>
        </div>
        <div className='zigi-video'>
          <video controls loop autoPlay muted className='responsive-video1'>
            <source src={Video2} />
          </video>
        </div>
      </div>

      <span className='basketball'> 🏀 </span>
      <a href="./join" className="ctaa-about animated-button">{t('Zigi-JoinButton')}</a>
      <h3 className='thanks-about'>{t('Zigi-last1')} <span> {t('Zigi-last2')} </span>{t('Zigi-last3')}  </h3>



    </div>


  )
}




// <h1 style={{color : "orangered" , textDecoration : "underline"}}>
// BALLERS