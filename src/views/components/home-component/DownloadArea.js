import React from 'react';
import googlePlay from '../../../assets/imgs/features/google-play.png';
import appStore from '../../../assets/imgs/features/app-store.png';


const DownloadArea = () => {
    return (
        <section className="section download-area overlay-dark ptb_100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="welcome-intro text-center">
                            <h2 className="text-white">sApp is available for all devices</h2>
                            <p className="text-white my-3 d-none d-sm-block">sApp is available for all devices, consectetur adipisicing elit. Itaque at harum quam explicabo. Aliquam optio, delectus, dolorem quod neque eos totam. Delectus quae animi tenetur voluptates doloribus commodi dicta modi aliquid deserunt, quis maiores nesciunt autem, aperiam natus.</p>
                            <p className="text-white my-3 d-block d-sm-none">sApp is available for all devices, consectetur adipisicing elit. Vel neque, cumque. Temporibus eligendi veniam, necessitatibus aut id labore nisi quisquam.</p>
                            <div className="button-group">
                                <a href="#">
                                    <img src={googlePlay} alt="" />
                                </a>
                                <a href="#">
                                    <img src={appStore} alt="" />
                                </a>
                            </div>
                            <p className="d-inline-block text-white font-italic mt-3">* Available on iPhone, iPad and all Android devices</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DownloadArea;