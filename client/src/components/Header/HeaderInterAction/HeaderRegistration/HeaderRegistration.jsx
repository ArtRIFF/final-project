import React, {useContext} from "react";
import "./HeaderRegistration.scss";
import {NavLink} from "react-router-dom";
import {UserContext} from "../../../../context/UserContext";
import {ReactComponent as LoginIcon} from "../img/Registrationicon.svg";
import {ReactComponent as AdminIcon} from "../img/admin.svg";


const HeaderRegistration = () => {
  const {userInfo} = useContext(UserContext);

  return (
    <div className="header-registration">
      <NavLink to="/login" className="header-registration__icon">
        <LoginIcon className={userInfo ? "filled" : "header-registration__icon"}/>
        {userInfo?.isAdmin ? <AdminIcon className="admin-icon"/> : <span></span>}
      </NavLink>
    </div>
  );

}

export default HeaderRegistration;
