import React from "react";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderFavorites from "./HeaderFavorites/HeaderFavorites";
import HeaderRegistration from "./HeaderRegistration/HeaderRegistration";
import HeaderCart from "./HeaderCart/HeaderCart";

import "./HeaderInterAction.scss";

class HeaderInterAction extends React.Component {
  render() {
    return(
    <div className="header-interaction__wrap">
      <HeaderSearch />
      <HeaderFavorites />
      <HeaderCart />
      <HeaderRegistration />
    </div>); 
  }
}

export default HeaderInterAction;
