import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.png'


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='footer' id='footer' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__box">
                        <div className='logo'>
                            <div className="logo__img">
                                <img src={logo} alt="" />
                            </div>
                            <h2 >Fitness Studio</h2>
                        </div>
                    </div>
                    <div className='footer__box'>
                        <h4 className="footer__title">Company</h4>
                        <ul className='footer__links' >
                            <li><a href="#schedule">Our programs</a></li>
                            <li><a href="#classes">Our plans</a></li>
                            <li><a href="#pricing-plan">Become a Member</a></li>
                        </ul>
                    </div>
                    <div className='footer__box'>
                        <h4 className="footer__title">Company</h4>
                        <ul className='footer__links' >
                            <li><a href="#footer"><strong>Support</strong>: </a>Bhanu Teja</li>
                            <li><a href="/"><strong>GitHub</strong></a></li>
                            <li><strong>Contact</strong>:9345678310</li>
                        </ul>
                    </div>
                </div>
                <p className='copyrights'>Copyright - {year} devoloped by FullStakerzzz. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
