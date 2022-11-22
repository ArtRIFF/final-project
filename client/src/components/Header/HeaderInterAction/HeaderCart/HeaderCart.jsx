import React from "react";
import "./HeaderCart.scss";
import { NavLink } from "react-router-dom";


class HeaderCart extends React.Component {
    render() {
        return(
            <div className="header-cart">
                <NavLink to="/cart" className="header-cart_icon">
                    <img 
                    className="header-cart_icon"
                    src="img/header-icon/CartIcon.svg" 
                    alt="cart"/>
                </NavLink>
            </div>
        )
    }
}

export default HeaderCart;