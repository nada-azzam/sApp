import React from 'react';
import featureBox from '../../../assets/imgs/features/thumb-1.png';



const Services = () => {
    return (
        <section id="services" className="section service-area bg-gray overflow-hidden ptb_100">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">

                        <div className="service-text pt-4 pt-lg-0">
                            <h2 className="text-capitalize mb-4">Make your Device Manage Everything For you</h2>
                            <ul className="service-list">
                                <li className="single-service media py-2">
                                    <div className="service-icon pr-4">
                                        <span>
                                            <i className="fab fa-buffer"></i>
                                        </span>
                                    </div>
                                    <div className="service-text media-body">
                                        <p>Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                                    </div>
                                </li>
                                <li className="single-service media py-2">
                                    <div className="service-icon pr-4">
                                        <span>
                                            <i className="fas fa-brush"></i>
                                        </span>
                                    </div>
                                    <div className="service-text media-body">
                                        <p>Customizable design dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                                    </div>
                                </li>
                                <li className="single-service media py-2">
                                    <div className="service-icon pr-4">
                                        <span>
                                            <i className="fas fa-burn"></i>
                                        </span>
                                    </div>
                                    <div className="service-text media-body">
                                        <p>Drop ipsum dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                                    </div>
                                </li>
                                <li className="single-service media py-2">
                                    <div className="service-icon pr-4">
                                        <span>
                                            <i className="fas fa-cart-arrow-down"></i>
                                        </span>
                                    </div>
                                    <div className="service-text media-body">
                                        <p>Marketing chart dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" className="btn btn-bordered mt-4">Learn More</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-lg-block">
                        <div className="service-thumb mx-auto">
                            <img src={featureBox} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
