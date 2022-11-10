import React from "react";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderFavorites from "./HeaderFavorites/HeaderFavorites";
import HeaderRegistration from "./HeaderRegistration/HeaderRegistration";

import "./HeaderInterAction.scss";

class HeaderInterAction extends React.Component {
  render() {
    return(
    <div className="header__inteaction__wrap">
      <HeaderSearch />
      <HeaderFavorites />
      <HeaderRegistration />
    </div>); 
  }
}

export default HeaderInterAction;
