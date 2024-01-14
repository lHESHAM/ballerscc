import React from 'react'
import AmroS from '../../components/images/AmroS.jpg'
import { IoLogoFacebook , IoLogoInstagram  , IoLogoLinkedin } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import './amro.css'

export default function Amros() {
  const { t } = useTranslation();

  return (
    <div>
    <div className="story">
      <h2 className="story-heading">{t('Amro-Name')}</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={AmroS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">{t('Amro-Name')}</p>
            <p className="role">({t('Amro-postion')})</p>
            <p className='role'><a href='https://www.facebook.com/profile.php?id=100012890643589'> <IoLogoFacebook  />  </a> <a href='https://www.instagram.com/shandaqamro7/'> <IoLogoInstagram   />  </a> <a href='https://www.linkedin.com/in/amro-shandaq/'> <IoLogoLinkedin  />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>{t('Amro-para1')}</p>

            <p>{t('Amro-para2')}</p>
            <p>{t('Amro-para3')}</p>
            <p>{t('Amro-para4')}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
