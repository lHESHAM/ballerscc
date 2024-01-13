import React from 'react'
import AhmadS from '../../components/images/AhmadS.jpg'
import { IoLogoFacebook , IoLogoInstagram  } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import './ahmad.css'

export default function Ahmads() {
  const { t } = useTranslation();

  return (
    <div>
    <div className="story">
      <h2 className="story-heading">{t('Ahmad-Name')}</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={AhmadS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">{t('Ahmad-Name')}</p>
            <p className="role">({t('Ahmad-postion')})</p>
            <p className='role'><a href='https://www.facebook.com/ahmed.ameen.581730'> <IoLogoFacebook  />  </a> <a href='https://www.instagram.com/ahmad_ameen_1/'> <IoLogoInstagram   />  </a> </p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>
            {t('Ahmad-para1')}
            </p>

            <p>
            {t('Ahmad-para2')}
            </p>
            <p>
            {t('Ahmad-para3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
