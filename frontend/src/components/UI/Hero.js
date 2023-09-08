import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroImg from '../../assets/img/gym-02.png'
import dumbleIcon from '../../assets/img/dumble.png'
import '../../styles/hero.css'


const btn__links = [
    {
        path:'#pricing-plan',
        display:'Get Started'
    }
]

const Hero = () => {
  return (
    <section id='home'>
        <div className='container'>
          <div className='hero__wrapper'>
            {/*========= Hreo Content ========= */}
            <div className="hero__content">
              <h2 className='section__title' data-aos="fade-up" data-aos-duration="1500">Exercise is the key to a <span className="highlights">Healthy</span> life cycle</h2>
              <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">In here we will help you to shape and build your ideal body and live up to your life to fullest.Exercise is the cornerstone of a healthy life. It boosts your physical well-being, strengthens your immune system, and enhances mental clarity. Regular physical activity helps you maintain a healthy weight, reduce the risk of chronic diseases, and promotes longevity. Embrace exercise for a vibrant and fulfilling life journey.</p>
              <div className='hero__btns' data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                  {
                    btn__links.map(item=>(
                      <button className='register__btn'>
                          <a href={item.path}>{item.display}</a>
                      </button>
                  ))
                  }
              </div>
            </div>
            <div className="hero__img">
              <div className="hero__img-wrapper">
                <div className="box-01">
                  <div className="box-02">
                    <div className="box-03">
                      <div className="box__img">
                        <img src={heroImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heart__rate" data-aos="fade-right" data-aos-duration="1500">
                  <h5>Heart rate</h5>
                  <span><FontAwesomeIcon icon="fa-solid fa-heart-pulse" /></span>
                  <h5>2567 BPM</h5>
                </div>
                <div className="gym__location" data-aos="fade-left" data-aos-duration="1500">
                  <span><FontAwesomeIcon icon="fa-solid fa-location-dot" /></span>
                  <h5>Find a new <br/> gym near you</h5>
                </div>
                <div className="dumble__icon" data-aos="fade-down" data-aos-duration="1500">
                  <img src={dumbleIcon} alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
    </section>
    
  );
}

export default Hero
