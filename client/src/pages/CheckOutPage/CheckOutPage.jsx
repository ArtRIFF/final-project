import React, {useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import ContactInfoPage from "./ContactInfo/ContactInfo";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import ShipAddress from "./ShipAddress/ShipAddress";

import "./style.scss";
import {sendRequest} from "../../helpers/sendRequest";
import {API} from "../../config/API";
import {useSelector} from "react-redux";
import {selectInCart} from "../../store/selectors";
import Button from "../../components/Button/ButtonAll/ButtonAll";
import {NavLink} from "react-router-dom";

const CheckOutPage = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [shipping, setShipping] = useState(null);
  const [paymentCardInfo, setPaymentCardInfo] = useState(null);
  const inCart = useSelector(selectInCart);

  const [orderResult, setOrderResult] = useState('');
  const [errResult, setErrResult] = useState('')

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const products = inCart.map((product) => {

      return {
        product: product,
        cartQuantity: product.quantity
      }
    })
    // {
    //   product: {"enabled":true,"imageUrls":["img/products/men/001.png","img/products/men/002.png","img/products/men/003.png","img/products/men/004.png"],"quantity":100,"_id":"6388df62015201004edfc45e","name":"new product for testing purposes","currentPrice":199.99,"previousPrice":250,"categories":"men","color":"red","productUrl":"/men","brand":"braaaand","myCustomParam":"some string or json for custom param","itemNo":"622685","date":"2022-12-01T17:07:46.516Z","__v":0},
    //   cartQuantity: 1
    // }

    console.log(products)
    const deliveryAddress = {
      country: shipping.country,
      city: shipping.city,
      address: shipping.streetAddr,
      postal: shipping.zipCode
    }

    const paymentInfo = paymentCardInfo.cardNumber;
    const status = "not shipped";

    const email = contactInfo;
    const mobile = shipping.phoneNumber;
    const letterSubject = 'Subject';
    const letterHtml = '<h1> Success </h1>';
    const canceled = false;


    sendRequest(`${API}orders`, 'POST', {
      body: JSON.stringify({
        products,
        deliveryAddress,
        paymentInfo,
        status,
        email,
        mobile,
        letterSubject,
        letterHtml,
        canceled,
      }),
      headers: {'Content-Type': 'application/json'}
    }).then(r => setOrderResult(`${r.message}. Our managers will contact you shortly!`))
      .then(handleOpen)
      .catch(e => {
        setErrResult(e.message)
      })
  };

  return (
    <section className="">
      <form onSubmit={handleFormSubmit}>
        <ContactInfoPage onContactInfoReady={(e) => setContactInfo(e)}/>
        <ShipAddress onShippingReady={setShipping}/>
        <PaymentMethod onPaymentReady={setPaymentCardInfo}/>
      </form>
      {orderResult ?
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
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {orderResult}
            </Typography>
            <div style={{display:"flex", justifyContent:"center", padding:"10px"}}>
              <NavLink to="/jewelry">
                <Button type="submit" text="Continue shopping" className="section__btn-checkout"/>
              </NavLink>
            </div>

          </Box>
        </Modal>
        : <span></span>}
      {errResult ?
        <p className="login__registration-error">
          {errResult}
        </p>
        : <span></span>}

    </section>
  );
};
export default CheckOutPage;
