import React, { useState, useReducer } from "react";
import "./ShoppingCart.scss";

import {useSelector} from 'react-redux';
import {selectInCart} from "../../store/selectors";
import {Swiper, SwiperSlide} from 'swiper/react';
import {getOneCard} from "../../helpers/sendRequest";
import {selectBestsellers} from "../../store/selectors";
import { render } from "react-dom";




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

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    function increment() {
      dispatch({ type: "increment" });
    }
    function decrement() {
      dispatch({ type: "decrement" });
    }
    const inCart = useSelector(selectInCart);
    console.log('Shopping', inCart);
    const getCart = useSelector(selectBestsellers);
    console.log('getCart',getCart);

    return (
 <>

   <div>
        <section className="checkoutproducts-section">
          <div className="checkoutproducts-container">
          {inCart.map(({size}, id) => {
                  return(
                <SwiperSlide> <div>{size}</div></SwiperSlide>
                  )
                })}
          
          {getCart.map(({name, article,currentPrice, imageUrl, insertType, metal}, id) => {
    return(
      <SwiperSlide className="checkoutproducts-section" key={id}>
    <div className="checkoutproducts-wrap"> 
       <div>{name}</div>
       <div>{article}</div>
        <div>{currentPrice}</div>
        <div>{imageUrl}</div>
        <div>{insertType}</div>
        <div>{metal}</div>
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

      </SwiperSlide>
    )
  })}
            <div className="checkoutproducts-wrap">
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
                  Title
                  </div>
                  <div className="checkoutproducts__summary-count summary-count__wrap">46580</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
 </>
    
    
    );


};
export default ShoppingCart;

