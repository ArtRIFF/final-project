import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage/MainPage"
import Header from "./Header/Header";


import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import Login from "../pages/LoginPage/Login/Login";
import Registration from "../pages/LoginPage/RegistrationPage/Registration";

import UnderConstractionPage from "../pages/UnderConstructionPage/UnderConstructionPage";
import ErrorPage from "../pages/404ErrorPage/404ErrorPage";

import CatalogSectionPage from '../pages/CatalogSectionPage/CatalogSectionPage'
const App = () => {
  return (
    <>
    <CatalogSectionPage/>

    </>
  );
};

export default App;