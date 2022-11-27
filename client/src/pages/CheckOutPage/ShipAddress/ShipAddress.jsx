import React, { useState } from "react";
import { string } from "yup";
import "./ShipAddress.scss";

const ShipAddress = () => {
  const [fullNameShip, setFullNameShip] = useState("");
  const [fullNameShiplDirty, setFullNameShipDirty] = useState(false);
  const [fullNameShipError, setFullNameShipError] =
    useState("Invalid full name");

  const blurFullNameHandler = (e) => {
    switch (e.target.name) {
      case "fullNameShip":
        setFullNameShipDirty(true);
        break;
      case "phoneShip":
        setPhoneShipDirty(true);
        break;
    }
  };
  const shipAddressHandler = (e) => {
    setFullNameShip(e.target.value);
    if (!String.test(String(e.target.value).toLowerCase())) {
      setFullNameShipError("Invalid full name");
    } else setFullNameShipError(" ");
  };
  const [phoneShip, setPhoneShip] = useState("");
  const [phoneShipDirty, setPhoneShipDirty] = useState(false);
  const [phoneShipError, setPhoneShipError] = useState("Invalid phone number");

  const phoneShipHandler = (e) => {
    if (!Number.isInteger(e.target.value)) {
      setPhoneShipError("Invalid phone number");
    }
    setPhoneShip(e.target.value);
  };
  return (
    <section className="ship-info-section">
      <div className="ship-info-section__wrap">
        <p className="ship-info-section__title">2. Shiping Address</p>

        <div className="ship-info-section__nameInfo">
          <div className="ship-info-section__firstName">
            <form action="" className="ship-info-section__infos">
              <label htmlFor="#" className="ship-info-section__name">
                Full Name
              </label>
              <input
                onBlur={(e) => blurFullNameHandler(e)}
                onChange={(e) => shipAddressHandler(e)}
                name="fullNameShip"
                value={fullNameShip}
                type="text"
                className="ship-info-section__texts"
                placeholder="Full Name"
              />
              {fullNameShiplDirty && fullNameShipError && (
                <div className="contact-info-section__error-message">
                  {fullNameShipError}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="ship-info-section__country  ">
          <form action="" className="ship-info-section__info ">
            <label htmlFor="#" className="ship-info-section__name">
              Country
            </label>
            <input
              type="text"
              className="ship-info-section__text"
              placeholder="Country"
            />
          </form>
        </div>

        <div className="ship-info-section__addres">
          <form action="" className="ship-info-section__info">
            <label htmlFor="#" className="ship-info-section__name">
              Street Addres
            </label>
            <input
              type="text"
              className="ship-info-section__text"
              placeholder="Street Addres"
            />
          </form>
        </div>
        <div className="ship-info-section__addres">
          <form action="" className="ship-info-section__info">
            <label htmlFor="" className="ship-info-section__name">
              City
            </label>
            <input
              type="text"
              className="ship-info-section__text"
              placeholder="City"
            />
          </form>
        </div>

        <div className="ship-info-section__stateInfo">
          <div className="ship-info-section__stateInfo">
            <form action="" className="ship-info-section__infos">
              <label htmlFor="#" className="ship-info-section__name">
                State
              </label>

              <input
                type="text"
                className="ship-info-section__texts"
                placeholder="State"
              />
            </form>
            <form action="" className="ship-info-section__infos">
              <label htmlFor="#" className="ship-info-section__name">
                Zip Code
              </label>
              <input
                type="text"
                className="ship-info-section__texts"
                placeholder="Zip Code"
              />
            </form>
          </div>
        </div>

        <div className="ship-info-section__phone">
          <form action="" className="ship-info-section__info">
            <label htmlFor="#" className="ship-info-section__name">
              Phone Number
            </label>
            <input
              onBlur={(e) => blurFullNameHandler(e)}
              onChange={(e) => phoneShipHandler(e)}
              name="phoneShip"
              value={phoneShip}
              type="text"
              className="ship-info-section__text"
              placeholder="+38"
            />
            {phoneShipDirty && phoneShipError && (
              <div className="contact-info-section__error-message">
                {phoneShipError}
              </div>
            )}
          </form>
        </div>

        <div className="ship-info-section__checkBox">
          <input type="checkbox" className="ship-info-section__box" /> Save this
          informations for a future fast checkout
        </div>
      </div>
    </section>
  );
};
export default ShipAddress;
