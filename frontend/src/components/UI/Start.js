import React from 'react'
import '../../styles/start.css'
import trainerImg from '../../assets/img/trainer.png' 


const btn__links = [
    {
        path:'#pricing-plan',
        display:'Get Started'
    }
]

const Start = () => {
  return (
    <section id='classes'>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={trainerImg} alt=""  data-aos="fade-left" data-aos-duration="1500" />
                </div>
                <div className="start__content"  data-aos="fade-right" data-aos-duration="1500">
                    <h2 className="section__title">
                        Ready to make a <span className="highlights">change?</span>
                    </h2>
                    <p>
                    Ready to make a positive change in your life? Our gym provides a welcoming and supportive environment for individuals of all fitness levels. With state-of-the-art equipment, expert trainers, and a variety of classes, you'll find the motivation and resources you need to achieve your health and fitness goals. Join us today!                    </p>
                    {
                    btn__links.map(item=>(
                      <button className='register__btn'>
                          <a href={item.path}>{item.display}</a>
                      </button>
                  ))
                  }                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start
