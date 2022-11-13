import React from "react";
import "./HeaderSearch.scss";

class HeaderSearch extends React.Component {
  render() {
    return (
      <div className="header-search">
        <img
          className="header-search__icon"
          src="img/header-icon/Searchicon.svg"
          alt="search  info"
        ></img>
      </div>
    );
  }
}

export default HeaderSearch;
