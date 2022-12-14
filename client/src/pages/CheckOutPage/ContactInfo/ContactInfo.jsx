import React, { useState } from "react";
import "./ContactInfo.scss";
import { NavLink } from "react-router-dom";


import {useContext} from "react";
import {UserContext} from "../../../context/UserContext";

const ContactInfoPage = (props) => {
  const {userInfo} = useContext(UserContext);
  const [email, setEmail] = useState(`${userInfo ? userInfo?.email : ''}`);
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Invalid email");

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Invalid email");
    } else {
      setEmailError(" ");
      props.onContactInfoReady(email);
    }
  };

  return (
    <div>
      <section className="contact-info-section">
        <div className="contact-info-section__wrap">
          <p className="contact-info-section__title">1. Contact Information</p>

          <div className="contact-info-section__info">
            <form
              autoComplete="off"
              action=""
              className="contact-info-section__infoEmail"
            >
              <label htmlFor="#" className="contact-info-section__email">
                Email Address
              </label>

              <input
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => emailHandler(e)}
                name="email"
                value={email}
                type="text"
                className="contact-info-section__text"
                placeholder="elonamail@gmail"
              />

              {emailDirty && emailError && (
                <div className="contact-info-section__error-message">
                  {emailError}
                </div>
              )}
            </form>
          </div>
          <p className="contact-info-section__titleLogin">
            Already have an account?{" "}
            <NavLink to="/login" className="contact-info-section__login">
              Login
            </NavLink>
          </p>
        </div>
      </section>
    </div>
  );
};
export default ContactInfoPage;
