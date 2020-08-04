import React from 'react';
import layers from '../../../assets/imgs/features/layers.png';
import lock from '../../../assets/imgs/features/lock.png';
import premium from '../../../assets/imgs/features/premium.png';



const Feature = () => {
    return (
        <section id="features" className="section features-area  overflow-hidden ">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-7">
                    <div className="section-heading text-center">
                        <span className="title-badge">
                             <i className="far fa-lightbulb "></i>
                            <span >Premium</span>
                            Features
                        </span>
                        <h2>What Makes sApp Different?</h2>
                        <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                        <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12  col-lg-4 res-margin">
                    <div className="image-box text-center icon-1 p-5 wow fadeInLeft" >
                        <div className="featured-img mb-3">
                            <img className="avatar-sm" src={layers} alt=""/>
                        </div>
                        <div className="icon-text">
                            <h3 className="mb-2">Fully functional</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12  col-lg-4 res-margin">
                    <div className="image-box text-center icon-1 p-5 wow fadeInUp" >
                        <div className="featured-img mb-3">
                            <img className="avatar-sm" src={premium} alt=""/>
                        </div>
                        <div className="icon-text">
                            <h3 className="mb-2">Live Chat</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12  col-lg-4">
                    <div className="image-box text-center icon-1 p-5 wow fadeInRight">
                        <div className="featured-img mb-3">
                            <img className="avatar-sm" src={lock} alt=""/>
                        </div>
                        <div className="icon-text">
                            <h3 className="mb-2">Secure Data</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
}

export default Feature;
