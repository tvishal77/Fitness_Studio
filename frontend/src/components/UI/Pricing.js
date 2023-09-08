import React from 'react'
import '../../styles/pricing.css'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <section id='pricing-plan'>
            <div className='container'>
                <div className="pricing__top">
                    <h2 className="section__title">Gym <span className="highlights">Pricing</span> Plan</h2>
                    <p>Our gym offers flexible pricing plans to suit your fitness goals. Whether you prefer a monthly membership, pay-as-you-go, or a customized package, we have options to accommodate every budget and fitness journey. Join us today to start your fitness transformation.</p>
                </div>

                {/*============= Pricing Wrapper ============= */}
                <div className="pricing__wrapper">
                    <div className="pricing__item" data-aos="fade-up" data-aos-duration="1800">
                        <div className="pricing__card-top">
                            <h2>Regular Member</h2>
                            <h2 className='pricing'>$50<span> /month</span></h2>
                        </div>
                        <div className="services">
                            <ul >
                                <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> 2 hours of Exercises</li>
                                <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Without consultaion to the coaches</li>
                                <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Access to the Community</li>
                            </ul>
                            <div className='services-1'>
                                <button className="register__btn"><Link to="/register">Join now</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="pricing__item pricing__item-02" data-aos="fade-up" data-aos-duration="1800">
                        <div className="pricing__card-top">
                            <h2>Premium Member</h2>
                            <h2 className='pricing'>$70<span> /month</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> 5 hours of Exercises</li>
                                <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Free consultaion to the coaches</li>
                                <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Access to the Community</li>
                            </ul>
                            <div className='services-1'>
                                <button className="register__btn" ><Link to="/register">Join now</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="pricing__item" data-aos="fade-up" data-aos-duration="1800">
                        <div className="pricing__card-top">
                            <h2>Standard Member</h2>
                            <h2 className='pricing'>$100<span> /month</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> 8 hours of Exercises</li>
                                <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Consultaion of Private Coach</li>
                                <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Free Fitness Merchandises</li>
                            </ul>
                            <div className='services-1'>
                                <button className="register__btn"><Link to="/register">Join now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
