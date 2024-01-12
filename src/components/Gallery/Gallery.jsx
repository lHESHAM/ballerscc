import React from 'react'
import './Gallery.css'
import { useTranslation } from 'react-i18next';


export default function Gallery() {
  const { t } = useTranslation();

  return (



    <div className='gallery-container'>
        <h2 class="speacial-heading">{t('gallery')}</h2>
        <p>{t('tagline-gallery')}</p>
    
    <div className='gallery'>
      <div className='gallery-img-box'><h3> Ala'a</h3></div>
      <div className='gallery-img-box'><h3> Yara</h3></div>
      <div className='gallery-img-box'><h3> Jasmin</h3></div>
      <div className='gallery-img-box'><h3> Amin</h3></div>
    </div>
    
    
    </div>
  )
}
