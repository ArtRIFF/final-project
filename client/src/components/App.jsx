import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Header from "./Header/Header";

import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import Login from "../pages/LoginPage/Login/Login";
import Registration from "../pages/LoginPage/RegistrationPage/Registration";

import CatalogSectionPage from '../pages/CatalogSectionPage/CatalogSectionPage';
import UnderConstractionPage from "../pages/UnderConstructionPage/UnderConstructionPage";
import ErrorPage from "../pages/404ErrorPage/404ErrorPage";

import Contact from "../pages/ContactPage/ContactPage";
import AboutUs from "../pages/AboutUsPage/AboutUsPage";
import ProductCard from "../pages/ProductCard/ProductCard";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="" element={<Header />} /> */}
        <Route path="/cart" element={<CheckOutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        <Route path="/our_production" element={<CatalogSectionPage/>}/>
        <Route path="products/:cardID" element={<ProductCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/constract" element={<UnderConstractionPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
