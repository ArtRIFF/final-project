import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage/MainPage"
import Header from "./Header/Header";


import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import Login from "../pages/LoginPage/Login/Login";
import Registration from "../pages/LoginPage/RegistrationPage/Registration";

import UnderConstractionPage from "../pages/UnderConstructionPage/UnderConstructionPage";
import ErrorPage from "../pages/404ErrorPage/404ErrorPage";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="" element={<Header/>}/>
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="/favourites" element={}/> */}
        <Route path="/cart" element={<CheckOutPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        {/* <Route path="" element={}//> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        <Route path="/constract" element={<UnderConstractionPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>

    </>
  );
};

export default App;