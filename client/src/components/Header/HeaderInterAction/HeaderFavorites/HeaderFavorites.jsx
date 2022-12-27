import React from "react";
import "./HeaderFavorites.scss";
import { NavLink } from "react-router-dom";

class HeaderFavorites extends React.Component {
  render() {
    return (
      <div className="header-favorites">
        <NavLink to="/wishlist" className="header-favorites__icon">
        <img
          className="header-favorites__icon"
          src="img/header-icon/Favouritesicon.svg"
          alt="favorites jewelry"
        ></img>
        </NavLink>
      </div>
    );
  }
}

export default HeaderFavorites;
