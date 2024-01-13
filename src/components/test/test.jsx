import React from 'react'
import './test.css'
import { useTranslation } from 'react-i18next';

export default function Test() {
    const { t } = useTranslation();

    return (
        <div>
            <div>
                <section className="contact section-padding">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center"
                                data-aos="fade-up"
                            >
                                <h1 className="mb-4">
                                {t('content1-join')}  <strong>{t('content2-join')} </strong> {t('content3-join')}  {" "}
                                </h1>
                                <p>
                                {t('email-join1')}
                                    <a href="mailto:ballers@ballersaqaba.com">{t('email-join2')}</a>
                                </p>
                            </div>
                            <div className="col-lg-8 mx-auto col-md-10 col-12">
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
                                                name="address"
                                                placeholder={t('addressPlaceholder')}
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
                                        {/* <div className="col-lg-12 col-12">
                            <textarea
                            className="form-control"
                            rows={6}
                            name="message"
                            placeholder="Message"
                            defaultValue={""}
                            />
                        </div> */}
                                        <div className="col-lg-12 col-12">
                                            <select className="form-control" name="" id="">
                                                <option selected>{t('session1-join')}</option>
                                                <option value="">{t('session2-join')}</option>
                                                <option value="">{t('session3-join')}</option>
                                            </select>
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
                </section>
            </div>
        </div>
    )
}
