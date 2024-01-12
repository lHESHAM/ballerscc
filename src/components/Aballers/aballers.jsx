import React from 'react'
import { Link } from 'react-router-dom';
import New from '../images/About.png';
import { useTranslation } from 'react-i18next';

import './aballers.css'

function Aboutballers() {
  const { t } = useTranslation();

  return (
    <div>

      {/* About Ballers */}
      <section className="about_dr">
        <div className="main_dr">
          <img src={New} alt="Second-Section" />
          <div className="all-text">
            <h4> {t('Ballers-Title')} </h4>
            <h2> {t('Ballers-desc1')}</h2>
            <p>
              {" "}
              <strong>
                <span>{t('Ballers-Title1')}</span>{" "}
              </strong>
              {t('Ballers-desc2')}
              <strong>
                <br />
                <br /> {t('Ballers-desc3')}
              </strong>
            </p>
            <div className="btn_dr">
              <Link to="./team">
                <button type="button"> {t('Ballers-Team-Button')} </button>
              </Link>
              <Link to="./join">
                <button type="button" className="btn2">
                  {t('Ballers-Join-Button')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Ballers */}

    </div>
  )
}

export default Aboutballers
