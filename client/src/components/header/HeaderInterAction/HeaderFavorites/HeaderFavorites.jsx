import React from "react";
import "./HeaderFavorites.scss";

class HeaderFavorites extends React.Component {
  render() {
    return (
      <div className="header-favorites">
        <a className="header-favorites__icon_wrap">
          <img
            className="header-favorites__icon"
            src="img/header-icon/Favouritesicon.svg"
            alt="favorites jewelry"
          ></img>
        </a>
      </div>
    );
  }
}

export default HeaderFavorites;
