import React from 'react'
import './test.css'
export default function test() {
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
                                    Join  <strong>Ballers </strong> Basketball Academy {" "}
                                </h1>
                                <p>
                                    or email us at{" "}
                                    <a href="mailto:ballers@ballersaqaba.com">ballers@ballersaqaba.com</a>
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
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                placeholder="Address"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="phone"
                                                placeholder="Phone Number"
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
                                                <option selected>choose</option>
                                                <option value="">regular</option>
                                                <option value="">private  </option>
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
