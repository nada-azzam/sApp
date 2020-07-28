import React from 'react';
import Hero from '../components/home-component/HeroSection'
import CounterArea from '../components/home-component/Counter'
import Services from '../components/home-component/Services'
import Feature from '../components/home-component/Feature';
import Review from '../components/home-component/Review';
import DownloadArea from '../components/home-component/DownloadArea';
import Contact from '../components/home-component/Contact';
const Home = () => {
    return (
        <div className="App">
            {/* PRELOADER */}
            <div class="loader">
                <div class="one"></div>
                <div class="two"></div>
            </div>
            {/* PRELOADER */}
            {/*----------------HERO SECTION------------------ */}
            <Hero />
            {/*----------------/HERO SECTION------------------ */}

            {/*----------------COUNTER SECTION------------------ */}
            <CounterArea />
            {/*----------------COUNTER SECTION------------------ */}

            {/*----------------FEATURE SECTION------------------ */}
            <Feature />
            {/*----------------FEATURE SECTION------------------ */}

            {/*----------------SERVICES SECTION------------------ */}
            <Services />
            {/*----------------SERVICES SECTION------------------ */}
            {/*----------------Reviews SECTION------------------ */}
            <Review />
            {/*----------------Reviews SECTION------------------ */}
            {/*----------------DOWNLOAD SECTION------------------ */}
            <DownloadArea />
            {/*----------------DOWNLOAD SECTION------------------ */}
            {/*----------------CONTACT SECTION------------------ */}
            <Contact />
            {/*----------------CONTACT SECTION------------------ */}






        </div>
    );
}

export default Home;
