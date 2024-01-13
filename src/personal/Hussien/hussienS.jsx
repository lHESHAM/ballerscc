import React from 'react'
import AmroS from '../../components/images/HussienS.jpg'
import {IoLogoInstagram  , IoLogoLinkedin } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import './hussien.css'

export default function Hussiens() {
  const { t } = useTranslation();

  return (
    <div>
    <div className="story">
      <h2 className="story-heading">{t('Hussien-Name')}</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={AmroS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">{t('Hussien-Name')}</p>
            <p className="role">({t('Hussien-postion')} )</p>
            <p className='role'><a href='https://www.instagram.com/hussein_husam10/'> <IoLogoInstagram   />  </a> <a href='https://www.linkedin.com/in/hussein-injass-4aa933228/'> <IoLogoLinkedin  />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>
            {t('Hussien-para1')}
            </p>

            <p>
            {t('Hussien-para2')}
            </p>
            <p>
            {t('Hussien-para3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
