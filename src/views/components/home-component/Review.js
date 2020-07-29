import React from 'react';
import avtar1 from '../../../assets/imgs/avatar/avatar-1.png';
import avtar2 from '../../../assets/imgs/avatar/avatar-2.png';
import avtar3 from '../../../assets/imgs/avatar/avatar-3.png';
import qoute from '../../../assets/imgs/features/quote.png';




const Reviews = () => {
  return (
<section id="review" className="section review-area ptb_100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="section-heading text-center">
                            <span className="title-badge">
                                 <i className="far fa-lightbulb mr-1"></i>
                                <span >Customer's</span>
                                Reviews
                            </span>
                            <h2 className="text-capitalize">What our customers are saying</h2>
                            <p className="d-none d-sm-block mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                            <p className="d-block d-sm-none mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 res-margin">
                        <div className="single-review card">
                            <div className="card-top p-4">
                                <div className="review-icon">

                                 <i className="fas fa-star text-warning"></i>

                                 <i className="fas fa-star text-warning"></i>

                                 <i className="fas fa-star text-warning"></i>

                                 <i className="fas fa-star text-warning"></i>

                                 <i className="fas fa-star text-warning"></i>
                                </div>
                                <h4 className="mt-4 mb-3">Excellent service &amp; support!!</h4>
                                <div className="review-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.</p>
                                </div>
                                 <div className="quot-icon">
                                    <img className="avatar-md" src={qoute} alt=""/>
                                </div>
                            </div>
                            <div className="reviewer media bg-gray p-4">
                                <div className="reviewer-thumb">
                                    <img className="avatar-lg radius-100" src={avtar1} alt=""/>
                                </div>
                                <div className="reviewer-meta media-body align-self-center ml-4">
                                    <h5 className="reviewer-name color-primary mb-2">Junaid Hasan</h5>
                                    <h6 className="text-secondary fw-6">CEO, Themeland</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 res-margin">
                        <div className="single-review card">
                            <div className="card-top p-4">
                                <div className="review-icon">
                                     <i className="fas fa-star text-warning"></i>
                                     <i className="fas fa-star text-warning"></i>
                                     <i className="fas fa-star text-warning"></i>
                                     <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star-half-alt text-warning"></i>
                                </div>
                                <h4 className="mt-4 mb-3">Nice work! Keep it up</h4>
                                <div className="review-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.</p>
                                </div>
                                 <div className="quot-icon">
                                    <img className="avatar-md" src={qoute} alt=""/>
                                </div>
                            </div>
                            <div className="reviewer media bg-gray p-4">
                                <div className="reviewer-thumb">
                                    <img className="avatar-lg radius-100" src={avtar2} alt=""/>
                                </div>
                                <div className="reviewer-meta media-body align-self-center ml-4">
                                    <h5 className="reviewer-name color-primary mb-2">Junaid Hasan</h5>
                                    <h6 className="text-secondary fw-6">CEO, Themeland</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="single-review card">
                            <div className="card-top p-4">
                                <div className="review-icon">
                                 <i className="fas fa-star text-warning"></i>
                                 <i className="fas fa-star text-warning"></i>
                                 <i className="fas fa-star text-warning"></i>
                                 <i className="fas fa-star text-warning"></i>
                                 <i className="fas fa-star text-warning"></i>
                                </div>
                                <h4 className="mt-4 mb-3">Great support!!</h4>
                                <div className="review-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam id facilis, provident doloremque placeat eveniet molestias laboriosam. Optio, esse.</p>
                                </div>
                                 <div className="quot-icon">
                                    <img className="avatar-md" src={qoute} alt=""/>
                                </div>
                            </div>
                            <div className="reviewer media bg-gray p-4">
                                <div className="reviewer-thumb">
                                    <img className="avatar-lg radius-100" src={avtar3} alt=""/>
                                </div>
                                <div className="reviewer-meta media-body align-self-center ml-4">
                                    <h5 className="reviewer-name color-primary mb-2">Junaid Hasan</h5>
                                    <h6 className="text-secondary fw-6">CEO, Themeland</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
}

export default Reviews;
