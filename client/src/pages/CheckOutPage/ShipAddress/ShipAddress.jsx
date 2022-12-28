import React, {useRef, useState} from "react";
import {string} from "yup";
import "./ShipAddress.scss";
import {useContext} from "react";
import {UserContext} from "../../../context/UserContext";

const ShipAddress = (props) => {
  const fullNameRef = useRef(null);
  const countryRef = useRef(null);
  const streetAddrRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipCodeRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const {userInfo} = useContext(UserContext);

  const [fullNameShip, setFullNameShip] = useState(`${userInfo ? userInfo?.firstName + " " + userInfo?.lastName : ''}`);
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
    const re = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setFullNameShipError("Enter your full name please");
    } else setFullNameShipError(" ");
  };
  const [phoneShip, setPhoneShip] = useState(`${userInfo ? userInfo?.telephone : ''}`);
  const [phoneShipDirty, setPhoneShipDirty] = useState(false);
  const [phoneShipError, setPhoneShipError] = useState("Invalid phone number");

  const phoneShipHandler = (e) => {
    setPhoneShip(e.target.value);
    const re = /^\+380\d{3}\d{2}\d{2}\d{2}$/
    if (!re.test(String(e.target.value))) {
      setPhoneShipError("Invalid phone number");
    } else {
      setPhoneShipError("")
    }
  };

  const handleBlur = () => {
    const fullName = fullNameRef.current.value;
    const country = countryRef.current.value;
    const streetAddr = streetAddrRef.current.value;
    const city = cityRef.current.value;
    const state = stateRef.current.value;
    const zipCode = zipCodeRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    if (fullName && country && streetAddr && city && state && zipCode && phoneNumber) {
      props.onShippingReady({
        fullName,
        country,
        streetAddr,
        city,
        state,
        zipCode,
        phoneNumber,
      })
    }
  };

  return (
    <section className="ship-info-section" onBlur={handleBlur}>
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
                placeholder="John Johnson"
                ref={fullNameRef}
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
              placeholder="Ukraine"
              ref={countryRef}
            />
          </form>
        </div>

        <div className="ship-info-section__addres">
          <form action="" className="ship-info-section__info">
            <label htmlFor="#" className="ship-info-section__name">
              Street Address
            </label>
            <input
              type="text"
              className="ship-info-section__text"
              placeholder="Khreshchatyk, 23"
              ref={streetAddrRef}
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
              placeholder="Kyiv"
              ref={cityRef}
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
                placeholder="State/Region"
                ref={stateRef}
              />
            </form>
            <form action="" className="ship-info-section__infos">
              <label htmlFor="#" className="ship-info-section__name">
                Zip Code
              </label>
              <input
                type="text"
                className="ship-info-section__texts"
                placeholder="01234"
                ref={zipCodeRef}
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
              placeholder="+3801234567"
              ref={phoneNumberRef}
            />
            {phoneShipDirty && phoneShipError && (
              <div className="contact-info-section__error-message">
                {phoneShipError}
              </div>
            )}
          </form>
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
