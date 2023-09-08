import React, { useState } from 'react'
import '../../styles/testimonial.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftarrow from '../../assets/img/leftarrow.png'
import rightarrow from '../../assets/img/rightarrow.png'


const Testimonials = () => {

  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;


  return (
    <section id="testimonials">
      <div className='container'>
        <div className='Testimonials'>
          <div className="left-t">
            <h2>Testimonials</h2>
            <span className='stroke-text'><strong>What they</strong></span>
            <span>say about us</span>
            <span>
              {testimonialsData[selected].review}
            </span>
            <span>
              <span>
                {testimonialsData[selected].name}
              </span>
              -{testimonialsData[selected].status}
            </span>
          </div>
          <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className='arrows'>
              <img
                onClick={() => {
                  selected === 0 ?
                    setSelected(tlength - 1) :
                    setSelected((prev) => prev - 1)
                }}
                src={leftarrow} alt="" />
              <img
                onClick={() => {
                  selected === tlength - 1
                    ? setSelected(0) :
                    setSelected((prev) => prev + 1);
                }}
                src={rightarrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials