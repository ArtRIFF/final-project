import React from 'react';
import './style.scss';


const BtnLinks = () => {
  return (
    <section className='btn-links'>
      <div className='btn-links__medias'> 
        <a href="btn-links__media"> <img src="img/header-hero/mediaOne.svg" alt="mediaOne" className='btn-links__media' /></a>
        <a href="btn-links__media"> <img src="img/header-hero/mediaTwo.svg" alt="mediaTwo" className='btn-links__media' /></a>
        <a href="btn-links__media"> <img src="img/header-hero/mediaThree.svg" alt="mediaThree" className='btn-links__media' /></a>
      </div>
      <div className='btn-links__line'><img src="img/header-hero/lineTwo.svg" alt="lineTwo" className='btn-links__lineTwo' /></div>
    </section>
  )
}
export default BtnLinks;