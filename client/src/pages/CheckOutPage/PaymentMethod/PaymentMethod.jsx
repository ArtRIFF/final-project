import React, {useRef, useState} from "react";
import "./PaymentMethod.scss";
import "../ContactInfo/ContactInfo.scss"
import Button from "../../../components/Button/ButtonAll/ButtonAll";
import Input from "../../LoginPage/RegistrationPage/Input/Input";


const PaymentMethod = (props) => {


  return (
    <section className="payment-method-section">
      <div className="payment-method-section__wrap">
        <p className="payment-method-section__title">3. Payment Method</p>

        <div className="payment-method-section__creaditInfo">
          <div className="payment-method-section__name">Credit Card</div>
          <div className="payment-method-section__link">
            <a href="#">
              <img
                src="img/payment-method/Icon-one.png"
                alt="card"
                className="payment-method-section__img"
              />
            </a>
            <a href="#">
              <img
                src="img/payment-method/Icon-two.png"
                alt="card"
                className="payment-method-section__img"
              />
            </a>
            <a href="#">
              <img
                src="img/payment-method/Icon-three.png"
                alt="card"
                className="payment-method-section__img"
              />
            </a>
            <a href="#">
              <img
                src="img/payment-method/Icon-four.png"
                alt="card"
                className="payment-method-section__img"
              />
            </a>
            <a href="#">
              <img
                  src="img/payment-method/Icon-five.png"
                  alt="card"
                  className="payment-method-section__img visa"
                />
            </a>
          </div>
        </div>

        <div className="payment-method-section__cardInfo">
          <div className="payment-method-section__info">
            <label htmlFor="#" className="payment-method-section__name">
              Card Number
            </label>
            <Input
              type="text"
              className="payment-method-section__text"
              placeholder="Card Number"
              name="cardNumber"
            />
          </div>
        </div>

        <div className="payment-method-section__firstName">
          <div className="payment-method-section__infos infos-item1">
            <label htmlFor="#" className="payment-method-section__names">
              Name on card
            </label>
            <Input
              type="text"
              className="payment-method-section__texts"
              placeholder="Full name"
              name="cardOwnerName"
            />
          </div>
          <div className="payment-method-section__infos infos-item2">
            <label htmlFor="#" className="payment-method-section__names">
              MM/YY
            </label>
            <Input
              type="text"
              className="payment-method-section__texts"
              placeholder="MM/YY"
              name="cardDate"
            />
          </div>
          <div className="payment-method-section__infos infos-item3">
            <label htmlFor="#" className="payment-method-section__names">
              CVV
            </label>
            <Input
              type="password"
              className="payment-method-section__texts"
              placeholder="CVV"
              name="cvv"
            />
          </div>
        </div>

        <div className="payment-method-section__checkBox">
          <input type="checkbox" />
          <span className="payment-method-section__box">Billing address is the same as shipping address</span>
        </div>
      </div>
      <div className="payment-method-section__btn">
        <Button type="submit" text="Continue" className="section__btn-checkout"/>
      </div>
    </section>
  );
};
export default PaymentMethod;


