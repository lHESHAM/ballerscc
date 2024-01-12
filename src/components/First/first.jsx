import React from 'react';
import { CalendarSharp, CallOutline, LocationOutline } from 'react-ionicons';
import { useTranslation } from 'react-i18next';
import './first.css';

function First() {
  const { t } = useTranslation();

  const handleClick = () => {
    window.location.href = '/join'; 
  };

  // {t('telephone-first')} , {t('telephone-first-content')}
  // {t('location-first')} , {t('location-first-content')}
  // {t('join-first')} , {t('join-first-content')}

  return (
    <main className='first-main'>
    <div className='first-container'>
      <div className='first-card'>
        <div className='first-icon'>
          <CallOutline
          color={'#a69b9b'}
          height="70px"
          width="70px"
        /> 
        </div>
        <div className='first-content'>
        <h2>{t('telephone-first')}</h2>
        <p>{t('telephone-first-content1')}</p>
        <p>{t('telephone-first-content2')}</p>
        </div>
      </div>
      <div className='first-card'>
        <div className='first-icon'>
          <LocationOutline
          color={'#a69b9b'}
          height="70px"
          width="70px"
        /> 
        </div>
        <div className='first-content'>
        <h2>{t('location-first')}</h2>
        <p>{t('location-first-content')}</p>
        </div>
      </div>
      <div className='first-card'>
        <div className='first-icon'>
          <CalendarSharp
          color={'#a69b9b'}
          height="70px"
          width="70px"
          /> 
        </div>
        <div className='first-content'>
        <h2>{t('join-first')}</h2>
        <button className="button-81" onClick={handleClick}>{t('join-first-content')}</button>
        </div>
      </div>
    </div>
    </main>

  );

  
}

export default First