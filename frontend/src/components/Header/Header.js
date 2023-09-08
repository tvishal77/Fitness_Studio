import React, {useRef,} from 'react'
import { useEffect } from 'react';
import logo from '../../assets/img/dumble.png'
import '../../styles/header.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
// You can also import regular or other styles of icons if needed
// import { far } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);
const nav__links = [
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#schedule',
        display:'Schedule'
    },
    {
        path:'#classes',
        display:'Classes'
    },
    {
        path:'#pricing-plan',
        display:'Pricing'
    }
]

const btn__links = [
    {
        path:'#pricing-plan',
        display:'Register'
    }
]


const Header=()=> {
    const headerRef = useRef(null);

    const headerFunc = ()=>{
        if(document.body.scrollTop >80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('sticky__header');
        }
        else{
            headerRef.current.classList.remove('sticky__header');

        }
    };

    useEffect(()=>{
        window.addEventListener("scroll", headerFunc);

        return () => window.removeEventListener("scroll", headerFunc);
    },[]);


  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav__wrapper'>
            <div className='logo'>
                <div className="logo__img">
                    <img src={logo} alt="" />
                </div>
                <h2>Fitness Studio</h2>
            </div>
            {/*==========Nav Menu ==========*/}
            <div className='navigation'>
                <ul className='menu'>
                    {
                        nav__links.map(item=>(
                            <li className='nav__item'>
                                <a href={item.path}>{item.display}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/*========= Nav Right=========*/}
            <div className='nav__right'>
            {
                    btn__links.map(item=>(
                      <button className='register__btn'>
                          <a href={item.path}>{item.display}</a>
                      </button>
                  ))
                  }                <span className="mobile__menu">
                <FontAwesomeIcon icon="fa-solid fa-bars" />
                </span>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
