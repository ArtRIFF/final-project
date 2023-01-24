import React, {useContext, useState} from "react";
import "./ContactInfo.scss";
import {NavLink} from "react-router-dom";
import Input from "../../LoginPage/RegistrationPage/Input/Input";
import {UserContext} from "../../../context/UserContext";

const ContactInfoPage = (props) => {
  const {userInfo} = useContext(UserContext);

  return (
    <div>
      <section className="contact-info-section">
        <div className="contact-info-section__wrap">
          <p className="contact-info-section__title">1. Contact Information</p>
          <div className="contact-info-section__info">
            <label htmlFor="#" className="contact-info-section__email">
              Email Address
            </label>
            <Input
              name="email"
              type="text"
              className="contact-info-section__text"
              placeholder="elonamail@gmail"
            />
          </div>
          {userInfo ?
            <p className="contact-info-section__titleLogin"></p>
            :
            <p className="contact-info-section__titleLogin">
              Already have an account?{" "}
              <NavLink to="/login" className="contact-info-section__login">
                Login
              </NavLink>
            </p>}
        </div>
      </section>
    </div>
  );
};
export default ContactInfoPage;
