import React from 'react'
import { useTranslation } from 'react-i18next';

import './AfterServices.css'

 function Multi() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="cta">
          <h2> {t('callToAction')} </h2>
            <a href="./join" className="action_btn">
            BallersLife 😊🏀
            </a>
      </section>
    </div>
  )
}
export default Multi



