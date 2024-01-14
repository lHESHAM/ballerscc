import React, { useEffect } from 'react';
import Video1 from '../video/amro1.mp4'
import Video2 from '../video/Aboutus1.mp4'
import Video3 from '../video/Aboutus.mp4'
import { useTranslation } from 'react-i18next';

import './zig.css'

export default function Zig() {
  useEffect(() => {
    const video = document.getElementById("responsive-video");
    const video1 = document.getElementById("responsive-video1");
    const video2 = document.getElementById("responsive-video2");

    if (video) {
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.controls = false;

      video.addEventListener("loadeddata", function () {
        video.play();
      });
    }

    if (video1) {
      video1.autoplay = true;
      video1.loop = true;
      video1.muted = true;
      video1.controls = false;

      video1.addEventListener("loadeddata", function () {
        video1.play();
      });
    }

    if (video2) {
      video2.autoplay = true;
      video2.loop = true;
      video2.muted = true;
      video2.controls = false;

      video2.addEventListener("loadeddata", function () {
        video2.play();
      });
    }
  }, []);
  const { t } = useTranslation();


  return (

    <div class="zig-container">

      <span className='basketball'> 🏀 </span>
      <div className='zig1'>
        <div>
          <p className='text-video'>{t('Zigi1')} </p>
        </div>
        <div className='zigi-video' >
          <video controls loop autoPlay muted id="responsive-video"  className='responsive-video'>
            <source src={Video1} />
          </video>
        </div>
      </div>

      <span className='basketball'> 🏀 </span>
      <div className='zigcenter'>
        <div className='zigi-video'>
        <video controls loop autoPlay muted id="responsive-video2" className='responsive-video2'>
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
          <video controls loop autoPlay muted id="responsive-video1" className='responsive-video1'>
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