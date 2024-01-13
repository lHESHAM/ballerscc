import React from 'react'
import { Link } from 'react-router-dom';
import Neww from '../images/story1.jpg';
import { useTranslation } from 'react-i18next';

import './AboutS.css'

function AboutS() {
  const { t } = useTranslation();

  return (
    <div>

      <section className="about_drr">
        <div className="main_drr">
          <img src={Neww} alt="Second-Section"/>
          <div className="all-textt">
            <h4> {t('Ballers-Title-About')} </h4>
            <p>
              {" "}
              <strong>
                <span>{t('Ballers-Title1-About')}</span>{" "}
              </strong>
              {t('Ballers-desc2-About')} <br /><br/>
              <p>{t('Ballers-desc4-About')}</p>
              {t('Ballers-desc2-About')} <br /><br/>
              <p>{t('Ballers-desc5-About')}</p>
              <strong>
                <br />
                <br /> {t('Ballers-desc3-About')}
              </strong>
            </p>
            <div className="btn_drr">
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

    </div>
  )
}

export default AboutS
