import React from 'react'
import LaithS from '../../components/images/LaithS.jpg'
import {IoLogoInstagram  , IoLogoLinkedin } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import './Laith.css'

export default function Laiths() {
  const { t } = useTranslation();

  return (
    <div>
    <div className="story">
      <h2 className="story-heading">{t('Laith-Name')}</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={LaithS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">{t('Laith-Name')}</p>
            <p className="role">( {t('Laith-postion')})</p>
            <p className='role'><a href='https://www.instagram.com/laith.y_/'> <IoLogoInstagram   />  </a> <a href='https://www.linkedin.com/in/laith-yaseen/'> <IoLogoLinkedin  />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>
            {t('Laith-para1')}
            </p>

            <p>
            {t('Laith-para2')}
                       </p>
      
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
