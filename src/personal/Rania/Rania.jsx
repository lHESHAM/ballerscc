import React from 'react'
import RaniaS from '../../components/images/RaniaS.jpg'
import {IoLogoInstagram } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import './Rania.css'

export default function Ranias() {
  const { t } = useTranslation();

  return (
    <div>
    <div className="story">
      <h2 className="story-heading">{t('Rania-Name')}</h2>



      <div className="story-container">
        <div className="story-container-left">
          <img src={RaniaS} alt="bryan-story" />
        </div>

        <div className="story-container-right">
          <div className="right-text">
            <p className="person">{t('Rania-Name')}</p>
            <p className="role">( {t('Rania-postion')} )
            </p>
            <p className='role'><a href='https://www.instagram.com/nutricoach_rania/'> <IoLogoInstagram   />  </a></p>
            <p> </p>
          </div>

          <div className="right-text-para">
            <p>{t('Rania-para1')}

            </p>

            <p>
            {t('Rania-para2')}
                   </p>
      
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
