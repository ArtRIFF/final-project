import React from "react";
import "./HeaderCart.scss";

class HeaderCart extends React.Component {
    render() {
        return(
            <div className="header-cart">
                <img 
                className="header-cart_icon"
                src="img/header-icon/CartIcon.svg" 
                alt="cart"/>
            </div>
        )
    }
}

export default HeaderCart;