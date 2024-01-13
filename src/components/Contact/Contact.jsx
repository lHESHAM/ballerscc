import React from 'react'
// import ContactImg from '../images/ballers_logo.png'
// import ContactImg from '../images/contactus.png'
import './Contact.css'
import { useTranslation } from 'react-i18next';


export default function Contact() {
  const { t } = useTranslation();

  return (


    <div className='container-contactus'>
      <h2 class="speacial-heading">{t('contactus')}</h2>
      <p>{t('tagline-contactus')}</p>



      <div className="contact_body">

        <div className="contact_form">
          <form
            action="#"
            method="post"
            className="contact-form"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="row">
              <div className="col-lg-6 col-12">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder={t('fullNamePlaceholder')}
                  />
              </div>
              <div className="col-lg-6 col-12">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={t('emailPlaceholder')}
                  />
              </div>
              <div className="col-lg-6 col-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder={t('subjectPlaceholder')}
                  />
              </div>
              <div className="col-lg-6 col-12">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder={t('phonePlaceholder')}
                  />
              </div>
              <div className="col-lg-12 col-12">
                <textarea
                  className="form-control"
                  rows={6}
                  name="message"
                  placeholder={t('messagePlaceholder')}
                  defaultValue={""}
                />
              </div>
              <div className="col-lg-5 mx-auto col-7">
                <button
                  type="submit"
                  className="form-control"
                  id="submit-button"
                  name="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>


    </div>

  )
}
