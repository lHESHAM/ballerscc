import React from "react";
import Location from "../images/form-location.png";
import Msg from "../images/form-msg.png";

import ImgForm1 from "../images/from2black.png";
import ImgForm2 from "../images/from2black.png";
import ImgForm3 from "../images/form4black.png";

import { useTranslation } from 'react-i18next';

import "./Form.css";

// Formik

function Form() {

  const { t } = useTranslation();

  const FormStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "2px solid #D16459",

  };
  const Formimage = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "2px solid #D16459",
  };
  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <h2>  {t('FormT-Title1')}</h2>
            <p> {t('FormT-desc1')}  </p>

            <div className="details-container">
              <div className="details">
                <img src={Location} alt="location" style={FormStyle} />
                <p>
                  {" "}
                  {t('FormT-location1')} <br />
                  {t('FormT-location2')}
                </p>
              </div>
              <div className="details">
                <img src={Msg} alt="location" style={FormStyle} />
                <p>{t('FormT-email')}</p>
              </div>
            </div>

            <div className="from-image">
              <img src={ImgForm1} alt="location" style={Formimage} />
              <img src={ImgForm2} alt="location" style={Formimage} />
              <img src={ImgForm3} alt="location" style={Formimage} />
            </div>
          </article>

          <article>
            <form className="form">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Your Name*"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address*"
              />
              <input
                type="Message"
                name="Message"
                id="Message"
                placeholder="Your Message*"
              />
              <div className="check">
                <input type="checkbox" id="privacy-policy" />
                <label for="privacy-policy">
                {t('FormT-privacy')} 
                </label>
              </div>

              <button type="sumbit"> {t('FormT-privacy')} </button>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Form;
