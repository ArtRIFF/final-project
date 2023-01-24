import React, {useContext, useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import ContactInfoPage from "./ContactInfo/ContactInfo";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import ShipAddress from "./ShipAddress/ShipAddress";

import "./style.scss";
import {sendAuthorizedRequest, sendRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";
import {useSelector} from "react-redux";
import {selectInCart} from "../../store/selectors";
import Button from "../../components/Button/ButtonAll/ButtonAll";
import {NavLink} from "react-router-dom";
import Breadcrumbs from "../../pages/CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {UserContext} from "../../context/UserContext";
import valid from 'card-validator';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 460,
  bgcolor: 'background.paper',
  border: '2px solid #e36709',
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const validationSchema = Yup.object().shape({
  fullNameShip: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Wow! That is a super long name!")
    .required("Required"),
  countryShip: Yup.string()
    .min(4, "That's a short country name")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  streetShip: Yup.string()
    .min(4, "That's a short street name")
    .required("Required"),
  cityShip: Yup.string()
    .min(3, "That's a short city name")
    .required("Required"),
  stateShip: Yup.string()
    .min(4, "That's a short state name")
    .required("Required"),
  codeShip: Yup.string()
    .min(5, "That's a short code number")
    .required("Required"),
  phoneShip: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("Phone number is required"),
  cardNumber: Yup.string().test(
    "test-number",
    "Credit Card number is invalid",
    value => valid.number(value).isValid)
    .required("Required"),
  cardOwnerName: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Wow! That is a super long name!")
    .required("Required"),
  cardDate: Yup.string().test(
    "test-date",
    "Your card expired",
    value => valid.expirationDate(value).isValid)
    .required("Required"),
  cvv: Yup.string().test(
    "test-cvv",
    "CVV is invalid",
    value => valid.cvv(value).isValid)
    .required("Required"),

});


const CheckOutPage = () => {

  const inCart = useSelector(selectInCart);
  const [orderResult, setOrderResult] = useState('');
  const [errResult, setErrResult] = useState('')
  const [open, setOpen] = useState(false);
  const {userInfo} = useContext(UserContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartProductIds = inCart.map(inCartItem => inCartItem._id);
    sendRequest(`${API}products/filter?_id=${cartProductIds.join(',')}`).then(response => {
      setCartProducts(response.products);
    })
  }, [inCart]);

  const handleSubmit = (values) => {
    const products = cartProducts.map(cartProduct => {
      const productInLSCart = inCart.find(inCartItem => inCartItem._id === cartProduct._id);
      return {
        product: {...cartProduct, size: productInLSCart.size},
        cartQuantity: productInLSCart.quantity
      }
    })

    const deliveryAddress = {
      country: values.countryShip,
      city: values.cityShip,
      state: values.stateShip,
      address: values.streetShip,
      postal: values.codeShip
    }
    const mobile = values.phoneShip;
    const letterSubject = 'Subject';
    const letterHtml = `<h1> Your order is placed. Our managers will contact you as soon as possible </h1>`;
    const canceled = false;

    const requestPayload = {
      products,
      deliveryAddress,
      paymentInfo: values.cardNumber,
      status: "not shipped",
      email: values.email,
      mobile,
      letterSubject,
      letterHtml,
      canceled,
    }
    sendRequest(`${API}orders`, 'POST', {
      body: JSON.stringify(requestPayload),
      headers: {'Content-Type': 'application/json'}
    }).then(response => setOrderResult(`Your order number is ${response.order.orderNo}. Our managers will contact you shortly!`))
      .then(handleOpen)
      .catch(e => {
        setErrResult(e.message)
      })
  };

  return (
    <div className="container login">
      <div className="breadcrumbs_login">
        <Breadcrumbs/>
      </div>
      <Formik
        initialValues={{
          email: userInfo?.email || "",
          fullNameShip: userInfo?.firstName || '',
          countryShip: userInfo?.country || "",
          streetShip: userInfo?.homeAddress || "",
        }}
        onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({errors, touched, handleChange, handleSubmit}) => (
          <>
            <Form onSubmit={handleSubmit}>
              <ContactInfoPage errors={errors}/>
              <ShipAddress errors={errors}/>
              <PaymentMethod errors={errors}/>
            </Form>
          </>
        )}
      </Formik>
      {orderResult &&
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Order information
            </Typography>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
              {orderResult}
            </Typography>
            <div style={{display: "flex", justifyContent: "center", padding: "10px"}}>
              <NavLink to="/jewelry">
                <Button type="submit" text="Continue shopping" className="section__btn-checkout"/>
              </NavLink>
            </div>

          </Box>
        </Modal>
      }
      {errResult && <p className="login__registration-error">{errResult}</p>}
    </div>
  );
};
export default CheckOutPage;
