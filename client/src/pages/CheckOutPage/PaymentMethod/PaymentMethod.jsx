import React from "react";
import "./PaymentMethod.scss";
import Button from "../../../components/Button/BattonAll/ButtonAll";
// import StripeCheckout from "react-stripe-checkout";

const PaymentMethod = () => {
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
                src="img/payment-method/paypal_3.png"
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
                className="payment-method-section__img"
              />
            </a>
          </div>
        </div>

        <div className="payment-method-section__cardInfo">
          <form action="" className="payment-method-section__info">
            <label htmlFor="#" className="payment-method-section__name">
              Card Number
            </label>
            <input
              type="text"
              className="payment-method-section__text"
              placeholder="Card Number"
            />
          </form>
        </div>

        <div className="payment-method-section__firstName">
          <form action="" className="payment-method-section__infos infos-item1">
            <label htmlFor="#" className="payment-method-section__names">
              Name on card
            </label>
            <input
              type="text"
              className="payment-method-section__texts"
              placeholder="Full name"
            />
          </form>
          <form action="" className="payment-method-section__infos infos-item2">
            <label htmlFor="#" className="payment-method-section__names">
              MM/YY
            </label>
            <input
              type="text"
              className="payment-method-section__texts"
              placeholder="MM/YY"
            />
          </form>
          <form action="" className="payment-method-section__infos infos-item3">
            <label htmlFor="#" className="payment-method-section__names">
              CVV
            </label>
            <input
              type="text"
              className="payment-method-section__texts"
              placeholder="CVV"
            />
          </form>
        </div>

        <div className="payment-method-section__checkBox">
          <input type="checkbox" className="payment-method-section__box" />{" "}
          Billing address is the same as shipping address
        </div>
      </div>
      <div className="payment-method-section__btn">
        <Button type="submit" text="Continue" className="section__btn-checkout" />
      </div>
    </section>
  );
};
export default PaymentMethod;
