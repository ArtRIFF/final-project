import React from "react";
import "./HeaderRegistration.scss";
import { NavLink } from "react-router-dom";

class HeaderRedistration extends React.Component {
  render() {
    return (
      <div className="header-redistration">
        <NavLink to="/login" className="header-redistration__icon">
          <img
            className="header-redistration__icon"
            src="img/header-icon/Registrationicon.svg"
            alt="redistration login"
          ></img>
        </NavLink>
      </div>
    );
  }
}

export default HeaderRedistration;
