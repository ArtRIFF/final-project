import React from 'react';
import './style.scss';
// import BtnLinks from './BtnLinks/BtnLinks';
// import Button from '../Button/ButtonAll/ButtonAll';

const HeroSection = () => {
    return (
        <div className="header__hero">
            <div className="container">
                    <div className="header__hero-container">
                        <span className="line"></span>                        
                        <div className="hero__image">
                            <img src="img/header-hero/iconThree.png" alt="ring__brilliant" className="image__item"/>
                            <img src="img/header-hero/iconOne.png" alt="ring__brilliant" className="image__item"/>
                            <img src="img/header-hero/iconTwo.png" alt="ring__brilliant" className="image__item"/>
                        </div>
                        <div className="image__section">
                            <img src="img/header-hero/girl.png" alt="jewelry_girl" className='image__content'/>
                            <div className="header__hero-title">
                                <h2 className='title__elegant'>ELEGANT</h2>
                                <h2 className='title__jewelry'>JEWELRY</h2>
                                <div className="hero__media-list">
                                    <img src="img/header-hero/jewelry.png" alt="jewelry" className='image__jewelry'/>
                                    <span className='line__social'></span>
                                    <div className="social__media">
                                        <a href="https://www.linkedin.com/company/dan-it-education/"><img src="img/header-hero/mediaOne.svg" alt="" className="social__list" /></a>
                                        <a href="https://www.facebook.com/daniteducation/"><img src="img/header-hero/mediaTwo.svg" alt="" className="social__list" /></a>
                                        <a href="https://www.instagram.com/daniteducation/"><img src="img/header-hero/mediaThree.svg" alt="" className="social__list" /></a>
                                    </div>
                                </div>
                            </div>                  
                        </div>  
                    </div>
            </div>
        </div>
    )
}
export default HeroSection;