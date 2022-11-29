import React from "react";

import Header from "../../components/Header/Header";
import ContactInfoPage from "./ContactInfo/ContactInfo";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import ShipAddress from "./ShipAddress/ShipAddress";
import Footer from "../../components/Footer/Footer";

import "./style.scss";
import Registration from "../LoginPage/RegistrationPage/Registration";

const CheckOutPage = () => {
  return (
    <section className="">
      <ContactInfoPage />
      <ShipAddress />
      <PaymentMethod />
    </section>
  );
};
export default CheckOutPage;
