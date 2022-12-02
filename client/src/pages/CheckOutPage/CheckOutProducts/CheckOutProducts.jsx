import React, { useState, useReducer } from "react";
import "./CheckOutProducts.scss";
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const CheckOutProducts = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <div>
      <section className="checkoutproducts-section">
        <h2 className="contact-info-section__way ">
          Shop /<span> Buy now </span>
        </h2>

        <div className="checkoutproducts-container">
          <div className="checkoutproducts-wrap">
            <div className="checkoutproducts-item">
              <img
                className="checkoutproducts-item__icon"
                src="img/galery/bracelets/bracelet_001.jpg"
              ></img>
              <h3 className="checkoutproducts-item__title">charm bracelet</h3>

              <div className="checkoutproducts-item__count">
                <button
                  className="checkoutproducts-item__count-btn"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="checkoutproducts-item__count-spn">
                  {state.count}
                </span>
                <button
                  className="checkoutproducts-item__count-btn"
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <div className="checkoutproducts-item__price">15250</div>
            </div>
            <div className="checkoutproducts-item">
              <img
                className="checkoutproducts-item__icon"
                src="img/galery/engagement-ring/ring_070.png"
              ></img>
              <h3 className="checkoutproducts-item__title">Engagement Ring </h3>
              <div className="checkoutproducts-item__count">
                <button
                  className="checkoutproducts-item__count-btn"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="checkoutproducts-item__count-spn">
                  {state.count}
                </span>
                <button
                  className="checkoutproducts-item__count-btn"
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <div className="checkoutproducts-item__price">14750</div>
            </div>

            <div className="checkoutproducts-item__summary-container">
              <div className="checkoutproducts-item__summary-wrap summary-wrap-hide"></div>
              <form className="checkoutproducts-item__summary-wrap">
                <label className="checkoutproducts-item__title checkoutproducts-item__summary-title">
                  Code
                </label>
                <input
                  className="checkoutproducts__summary-count checkoutproducts__summary-input"
                  type="text"
                />
              </form>
            </div>

            <div className="checkoutproducts-item__summary-container">
              <div className="checkoutproducts-item__summary-wrap"></div>

              <div className="checkoutproducts-item__summary-wrap">
                <div className="checkoutproducts-item__title checkoutproducts-item__summary-title">
                  Shipping
                </div>
                <div className="checkoutproducts__summary-count summary-shipping">
                  FREE
                </div>
              </div>
            </div>

            <div className="checkoutproducts-item__summary-container">
              <div className="checkoutproducts-item__summary-wrap"></div>

              <div className="checkoutproducts-item__summary-wrap">
                <div className="checkoutproducts-item__title checkoutproducts-item__summary-title">
                  Discount
                </div>
                <div className="checkoutproducts__summary-count">-</div>
              </div>
            </div>

            <div className="checkoutproducts-item__summary-container">
              <div className="checkoutproducts-item__summary-wrap"></div>

              <div className="checkoutproducts-item__summary-wrap">
                <div className="checkoutproducts-item__title checkoutproducts-item__summary-title">
                  Tax
                </div>
                <div className="checkoutproducts__summary-count">-</div>
              </div>
            </div>

            <div className="checkoutproducts-item__summary-container">
              <div className="checkoutproducts-item__summary-wrap"></div>

              <div className="checkoutproducts-item__summary-wrap">
                <div className="checkoutproducts-item__title checkoutproducts-item__summary-title">
                  Сума
                </div>
                <div className="checkoutproducts__summary-count summary-count__wrap">46580</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CheckOutProducts;
