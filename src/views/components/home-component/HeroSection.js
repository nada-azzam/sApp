import React from 'react';
import Header from '../../../components/Header';
import mookup from '../../../assets/imgs/features/welcome-mockup.png';
import googlePlay from '../../../assets/imgs/features/google-play.png';
import appStore from '../../../assets/imgs/features/app-store.png';


const Hero = () => {
  return (

    <header id="hero" className="hero-section" >
      <Header />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-6">
            <div className="welcome-intro">
              <h1 className="text-white">Make cool Landing pages with sApp</h1>
              <p className="text-white my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.</p>
              <div className="button-group d-flex">
                <a href="#">
                  <img src={googlePlay} alt="" />
                </a>
                <a href="#">
                  <img src={appStore} alt="" />
                </a>
              </div>
              <p className="d-inline-block text-white fw-3 font-italic mt-3">* Available on iPhone, iPad and all Android devices</p>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-6">
            <div className="welcome-thumb mx-auto ">
              <img className="welcome-mobile" src={mookup} alt="" />
            </div>
          </div>
        </div>
      </div>


    </header>
  );
}

export default Hero;
