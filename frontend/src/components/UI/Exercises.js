import React from 'react'
import '../../styles/exercises.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'


const Exercises = () => {
  return (
    <section id='schedule'>
      <div className='container exercise__container '>
        <div className='exercise__top'>
          <h2 className='section__title'>Benefits of <span className='highlights'>Exercise</span> 
          </h2>
          <p>Exercise offers numerous benefits, including improved physical health, increased energy, reduced stress, and enhanced mood.<br/> It's your key to a healthier, happier life. Start reaping the rewards today.</p>
        </div>

        {/* ============ Exercise List =========== */}
        <div className='exercise__wrapper'>
          <div className="exercise__item" data-aos="zoom-in" data-aos-duration="1500">
            <span className='exercise__icon'>
              <img src={ yoga} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Healthy life</h4>
              <p>This program is designed for those who exercises only for their body fitness not for body building</p>
            </div>
          </div>
          <div className="exercise__item"  data-aos="zoom-in" data-aos-duration="1500">
            <span className='exercise__icon'>
              <img src={lunges} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Increased Flexibility</h4>
              <p>In this program, you are trained to do sequential moves in range of 20 until 30 minitues. </p>
            </div>
          </div> 
          <div className="exercise__item"  data-aos="zoom-in" data-aos-duration="1500">
            <span className='exercise__icon'>
              <img src={extended} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Reducing Blood Pressure</h4>
              <p>This program is suitable for you who want to get rid of your fat and lose their weight.</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Exercises
