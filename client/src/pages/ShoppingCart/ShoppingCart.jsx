import React, { useState, useReducer } from "react";
import { useSelector } from 'react-redux';
import Button from "../../components/Button/ButtonAll/ButtonAll";
import { selectInCart } from "../../store/selectors";
import { getOneCard } from "../../helpers/sendRequest";
import ItemInCart from "./ItemInCart";

import "./ShoppingCart.scss";

const ShoppingCart = () => {
    
    const inCart = useSelector(selectInCart);
    
    const findPrice = (cardID) => getOneCard(cardID).then((data) => {
        let price = data.currentPrice
        console.log('price', price)
        return price});
    
    const totalPrice = () => {
        let total = inCart.reduce((acc, cur) => acc + findPrice(cur.cardID)*cur.quantity, 0)
        console.log(total)
    }

    return (
        <section className="cart-section container">
           {!!inCart.length && <> 
            <h3 className="cart-section__title">Order Summary</h3>
                <div className="cart-section__wrapper">
                    <div className="cart-section__products">                    
                    {inCart.map((card, index) => {
                        return( 
                            <ItemInCart
                                key={index}
                                card={card}/>
                    
                    )
                    })}
                </div>
                <div className="cart-section__summary-wrapper">
                    <div className="cart-section__summary">
                        <p >Shipping</p>
                        <p className="cart-section__summary-shipping">free</p>
                        <p>Discount</p>
                        <p>10%</p>
                        <p>Tax</p>
                        <p>-</p>
                        <p>Total</p>
                        <p className="cart-section__summary-total">&#8372; {totalPrice()}</p>    
                    </div>
                    <Button className={"section__btn-header"} text={"Continue to checkout"}/>
                </div>
           </div>
           </>}
           {!inCart.length && <h3 className="cart-section__title">Your cart is empty</h3>}
        </section>
     );
 };
 export default ShoppingCart;