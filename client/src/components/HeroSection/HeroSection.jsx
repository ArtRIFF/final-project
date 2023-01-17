import React from 'react';
import './style.scss';

const HeroSection = () => {
    return (
        <div className="header__hero">
            <div className="container">
                <div className="header__hero-container">
                    <div className="header__hero__title">
                        <h2 className='title__elegant'>ELEGANT</h2>
                        <h2 className='title__jewelry'>JEWELRY</h2>
                    </div>
                    <div className="hero__media-list">
                        <img src="img/header-hero/jewelry.png" alt="jewelry" className='image__jewelry' />
                    </div>
                    <div className="social__media">
                        <span className='social__media__line'></span>
                        <div className='social__media__wrapper'>
                        <a href="https://www.linkedin.com/company/dan-it-education/"><img src="img/header-hero/mediaOne.svg" alt="" className="social__list" /></a>
                        <a href="https://www.facebook.com/daniteducation/"><img src="img/header-hero/mediaTwo.svg" alt="" className="social__list" /></a>
                        <a href="https://www.instagram.com/daniteducation/"><img src="img/header-hero/mediaThree.svg" alt="" className="social__list" /></a>
                        </div>
                    </div>
                    <div className="left-side">
                        <div className="line-left__container">
                            <span className="line-left"></span>
                        </div>
                        <div className="hero__image">
                            <img src="img/header-hero/iconThree.png" alt="ring__brilliant" className="image__item" />
                            <img src="img/header-hero/iconOne.png" alt="ring__brilliant" className="image__item" />
                            <img src="img/header-hero/iconTwo.png" alt="ring__brilliant" className="image__item" />
                        </div>
                    </div>
                    <div className="image__section">
                        <img src="img/header-hero/girl.png" alt="jewelry_girl" className='image__content' />
                        <div className="image__section-right-side">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;