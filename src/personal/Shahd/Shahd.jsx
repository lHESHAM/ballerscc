import React from 'react'
import ShahdS from '../../components/images/Shahds.jpg'
import {IoLogoInstagram } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import './Shahd.css'

export default function Shahds() {
  const { t } = useTranslation();

  return (
    <div>
    <div className="story">
      <h2 className="story-heading">{t('Shahd-Name')}</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={ShahdS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">{t('Shahd-Name')}</p>
            <p className="role">( {t('Shahd-postion')} )
            </p>
            <p className='role'><a href='https://www.instagram.com/shahdadnan01/'> <IoLogoInstagram   />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>{t('Shahd-para1')}
            
            </p>

            <p>
            {t('Shahd-para2')}
                  </p>
            <p>
            {t('Shahd-para3')}
                   </p>
      
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
