import React from 'react';
import './style.scss';
import BtnLinks from './BtnLinks/BtnLinks';
import Button from '../Button/BattonAll/ButtonAll';

const HeroSection = () => {
    return (
        <section className='header-hero-section'>
            <div className='header-hero-section__conteiner'>
                <div className='header-hero'>
                    <img src="img/header-hero/lineOne.svg" alt="line" className='header-hero__line' />

                    <div className='header-hero__items'>
                        <img src="img/header-hero/iconThree.png" alt="icon" className='header-hero__item' />
                        <img src="img/header-hero/iconOne.png" alt="icon" className='header-hero__item' />
                        <img src="img/header-hero/iconTwo.png" alt="icon" className='header-hero__item' />
                    </div>

                    <div className='header-hero__picture'>
                        <img src="img/header-hero/girl_01.png" alt="jewelry_girl" className='header-hero-picture__pict' />
                        <img src="img/header-hero/girl.png" alt="jewelry_girl" className='header-hero-picture__pictures' />
                        <img src="img/header-hero/girl_02.png" alt="jewelry_girl" className='header-hero-picture__girlTwo' />
                        <img src="img/header-hero/jewelry.png" alt="jewelru" className='header-hero-picture__jewelry' />
                        <img src="img/header-hero/jewelry_01.png" alt="jewelru" className='header-hero-picture__jewel' />
                    </div>

                    <div className='header-hero__title'>
                        <p className='header-hero__titleOne'>ELEGANT</p>
                        <p className='header-hero__titleTwo'>JEWELRY</p>
                    </div>
                    <div> <BtnLinks />
                    </div>
                </div><div className='header-hero__btn-see'>
                <Button text='SeeMore' className='section__btn-header' id='section__btn' /></div>
            </div>
            

        </section>
    )
}
export default HeroSection;