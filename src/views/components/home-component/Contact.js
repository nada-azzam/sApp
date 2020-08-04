import React from 'react';


const CounterArea = () => {
    return (
        <section id="contact" className="section contact-area bg-gray ptb_100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="section-heading text-center">
                            <h2 className="text-capitalize">Stay Tuned</h2>
                            <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                            <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-12 col-md-5">
                        <div className="contact-us">
                            <p className="mb-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <ul>
                                <li className="py-2">
                                    <a className="media" href="#">
                                        <div className="social-icon mr-3">
                                            <i className="fas fa-home"></i>
                                        </div>
                                        <span className="media-body align-self-center">Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002</span>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a className="media" href="#">
                                        <div className="social-icon mr-3">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <span className="media-body align-self-center">+1 230 456 789-012 345 6789</span>
                                    </a>
                                </li>
                                <li className="py-2">
                                    <a className="media" href="#">
                                        <div className="social-icon mr-3">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <span className="media-body align-self-center">exampledomain@domain.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 pt-4 pt-md-0">
                        <div className="contact-box text-center">
                            <form id="contact-form">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" placeholder="Name" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" required="required" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea rows="6" className="form-control" name="message" placeholder="Message" required="required"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn  btn-block mt-3"><span className="text-white pr-3"><i className="fas fa-paper-plane"></i></span>Send Message</button>
                                </div>
                            </div>
                        </form>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default CounterArea;
