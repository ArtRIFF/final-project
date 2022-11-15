import React from "react";
import "./HeaderFavorites.scss";

class HeaderFavorites extends React.Component {
  render() {
    return (
      <div className="header-favorites">
        <img
          className="header-favorites__icon"
          src="img/header-icon/Favouritesicon.svg"
          alt="favorites jewelry"
        ></img>
      </div>
    );
  }
}

export default HeaderFavorites;
