import React, {useState} from "react";

import ContactInfoPage from "./ContactInfo/ContactInfo";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import ShipAddress from "./ShipAddress/ShipAddress";

import "./style.scss";
import Registration from "../LoginPage/RegistrationPage/Registration";
import {sendRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";

const CheckOutPage = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [shipping, setShipping] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const products = [
      {
        product: {"enabled":true,"imageUrls":["img/products/men/001.png","img/products/men/002.png","img/products/men/003.png","img/products/men/004.png"],"quantity":100,"_id":"6388df62015201004edfc45e","name":"new product for testing purposes","currentPrice":199.99,"previousPrice":250,"categories":"men","color":"red","productUrl":"/men","brand":"braaaand","myCustomParam":"some string or json for custom param","itemNo":"622685","date":"2022-12-01T17:07:46.516Z","__v":0},
        cartQuantity: 1
      }
    ]
    const email = contactInfo;
    const mobile = shipping.phoneNumber;
    const letterSubject = 'Subject';
    const letterHtml = '<h1> Success </h1>';
    const totalSum = 500;
    const canceled = false;

    sendRequest(`${API}orders`, 'POST', {
      body: JSON.stringify({
        products,
        email,
        mobile,
        letterSubject,
        letterHtml,
        totalSum,
        canceled,
      }),
      headers: {'Content-Type': 'application/json'}
    }).then(console.log)
      .catch(console.error)
  };

  return (
    <section className="">
      <form onSubmit={handleFormSubmit}>
        <ContactInfoPage onContactInfoReady={(e) => setContactInfo(e)}/>
        <ShipAddress onShippingReady={setShipping}/>
        <PaymentMethod/>
      </form>
    </section>
  );
};
export default CheckOutPage;
