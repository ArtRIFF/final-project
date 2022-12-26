import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectInCart } from "../../../../store/selectors";
import { ReactComponent as CartIcon} from "../img/CartIcon.svg"

import "./HeaderCart.scss";


const HeaderCart = () => {
    const inCart = useSelector(selectInCart);
    let itemsInCart;
    if (inCart.length > 0) {
        itemsInCart = inCart.reduce((acc, cur) => acc + cur.quantity, 0)
    }
        return(
            <div className="header-cart">
                <NavLink to="/cart" className="header-cart">
                    <CartIcon className={itemsInCart ? "header-cart_icon filled-cart" : "header-cart_icon"}/>
                    <div id="cart">{itemsInCart}</div>
                </NavLink>
            </div>
        )    
}

export default HeaderCart;