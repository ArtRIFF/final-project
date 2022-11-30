import React from 'react';
import './style.scss';


const ShipAddress = () => {
  return (
    <section className='ship-info-section'>
      <div className='container'>
        <p className='ship-info-section__title'>2. Shiping Address</p>

        <div className='ship-info-section__nameInfo'>
          <div className='ship-info-section__firstName'>
            <form action="" className='ship-info-section__infos'>
              <label htmlFor="#" className='ship-info-section__name' >First Name</label>
              <input type="text" className='ship-info-section__texts' placeholder='First Name' />
            </form>
            <form action="" className='ship-info-section__infos'>
              <label htmlFor="#" className='ship-info-section__name' >Last Name</label>
              <input type="text" className='ship-info-section__texts' placeholder='Last Name' />
            </form>
          </div>
        </div>

        <div className='ship-info-section__country'>
          <form action="" className='ship-info-section__info' >
            <label htmlFor="#" className='ship-info-section__name' >Country</label>
            <input type="text" className='ship-info-section__text' placeholder='Country' /></form>
        </div>

        <div className='ship-info-section__addres'>
          <form action="" className='ship-info-section__info' >
            <label htmlFor="#" className='ship-info-section__name' >Street Addres</label>
            <input type="text" className='ship-info-section__text' placeholder='Street Addres' /></form>
        </div>

        <div className='ship-info-section__line'> + Add Line 2</div>

        <div className='ship-info-section__addres'>
          <form action="" className='ship-info-section__info' >
            <label htmlFor="" className='ship-info-section__name' > City</label>
            <input type="text" className='ship-info-section__text' placeholder='City' /></form>
        </div>

        <div className='ship-info-section__stateInfo'>
          <div className='ship-info-section__stateInfo'>
          <form action="" className='ship-info-section__infos'>
              <label htmlFor="#" className='ship-info-section__name' >State</label>

              <input type="text"  className='ship-info-section__texts' placeholder='State' />
            </form>
            <form action="" className='ship-info-section__infos'>
              <label htmlFor="#" className='ship-info-section__name' >Zip Code</label>
              <input type="text" className='ship-info-section__texts' placeholder='Zip Code' />
            </form>
          </div>

        </div>

        <div className='ship-info-section__phone'>
          <form action="" className='ship-info-section__info' >
            <label htmlFor="#" className='ship-info-section__name' >Phone Number</label>
            <input type="text" className='ship-info-section__text' placeholder='Phone Number' /></form>
        </div>

        <div className='ship-info-section__checkBox'>
        <input type="checkbox" className='ship-info-section__box' /> Save this informations for a future fast checkout
        </div>

        <div className='ship-info-section__checkBox'>
          <input type="checkbox" className='ship-info-section__box' /> Receive SMS Notifications
        </div>
      </div>



    </section>
  )
}
export default ShipAddress;