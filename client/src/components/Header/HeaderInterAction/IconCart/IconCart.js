import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {ReactComponent as CartIcon} from "../img/CartIcon.svg";
import {useSelector} from "react-redux";
import {selectInCart} from "../../../../store/selectors";
import ItemInCart from "../../../../pages/ShoppingCart/ItemInCart";

const IconCart = () => {
  const [showCart, setShowCart] = useState(false)
  const inCart = useSelector(selectInCart);
  let itemsInCart;
  if (inCart.length > 0) {
    itemsInCart = inCart.reduce((acc, cur) => acc + cur.quantity, 0)
  }
  return (
    <div style={{position: 'relative'}}>
      <div className="header-cart" onMouseEnter={() => {
        setShowCart(true)
      }} onMouseLeave={() => {
        setShowCart(false)
      }}>
        <NavLink to="/cart">
          <CartIcon className={itemsInCart ? "header-cart_icon filled-cart" : "header-cart_icon"}/>
          <div id="cart">{itemsInCart}</div>
        </NavLink>
        <div className={"cart-section__products cart-section__products__" + (showCart ? 'shown' : 'hidden')} >
          {inCart.map((card, cardID) => {
            return (
              <NavLink to="/cart" key={card}>
              <ItemInCart
                card={card}/>
              </NavLink>
            )
          })}
        </div>
      </div>

    </div>
  );
};

export default IconCart;