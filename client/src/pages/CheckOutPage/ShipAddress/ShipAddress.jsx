import React from "react";
import "./ShipAddress.scss";
import Input from "../../LoginPage/RegistrationPage/Input/Input";


const ShipAddress = (props) => {

  return (
    <section className="ship-info-section">
      <div className="ship-info-section__wrap">
        <p className="ship-info-section__title">2. Shiping Address</p>

        <div className="ship-info-section__nameInfo">
          <div className="ship-info-section__firstName">
            <div className="ship-info-section__infos">
              <label htmlFor="#" className="ship-info-section__name">
                Full Name
              </label>
              <Input
                name="fullNameShip"
                type="text"
                className="ship-info-section__texts"
                placeholder="John Johnson"
              />
            </div>
          </div>
        </div>

        <div className="ship-info-section__country  ">
          <div className="ship-info-section__info ">
            <label htmlFor="#" className="ship-info-section__name">
              Country
            </label>
            <Input
              name="countryShip"
              type="text"
              className="ship-info-section__text"
              placeholder="Ukraine"
            />
          </div>
        </div>

        <div className="ship-info-section__addres">
          <div className="ship-info-section__info">
            <label htmlFor="#" className="ship-info-section__name">
              Street Address
            </label>
            <Input
              name="streetShip"
              type="text"
              className="ship-info-section__text"
              placeholder="Khreshchatyk, 23"
            />
          </div>
        </div>
        <div className="ship-info-section__addres">
          <div className="ship-info-section__info">
            <label htmlFor="" className="ship-info-section__name">
              City
            </label>
            <Input
              name="cityShip"
              type="text"
              className="ship-info-section__text"
              placeholder="Kyiv"
            />
          </div>
        </div>
        <div className="ship-info-section__stateInfo">
          <div className="ship-info-section__stateInfo">
            <div className="ship-info-section__infos">
              <label htmlFor="#" className="ship-info-section__name">
                State
              </label>
              <Input
                name="stateShip"
                type="text"
                className="ship-info-section__texts"
                placeholder="State/Region"
              />
            </div>
            <div className="ship-info-section__infos">
              <label htmlFor="#" className="ship-info-section__name">
                Zip Code
              </label>
              <Input
                name="codeShip"
                type="text"
                className="ship-info-section__texts"
                placeholder="01234"
              />
            </div>
          </div>
        </div>

        <div className="ship-info-section__phone">
          <div className="ship-info-section__info">
            <label htmlFor="#" className="ship-info-section__name">
              Phone Number
            </label>
            <Input
              name="phoneShip"
              type="text"
              className="ship-info-section__text"
              placeholder="3801234567"
            />
          </div>
        </div>
        <div className="ship-info-section__checkBox">
          <input type="checkbox"/>
          <span className="ship-info-section__box">
            Save this information for a future fast checkout
          </span>
        </div>
      </div>
    </section>
  );
};
export default ShipAddress;
