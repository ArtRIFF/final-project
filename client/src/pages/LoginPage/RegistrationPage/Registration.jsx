import {Form, Formik} from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

import Button from "../../../components/Button/ButtonAll/ButtonAll";
import Input from "./Input/Input";
import InputWithStrength from "./InputWithStrength/InputWithStrength";

import "./Registration.scss";

import {NavLink} from "react-router-dom";
import {sendRequest} from "../../../helpers/sendRequest";
import {API} from "../../../config/API";

import Breadcrumbs from "../../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";
import {useState} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Wow! That is a super long name!")
    .required("Required"),
  login: Yup.string()
    .min(3, "Login should be greater than 3")
    .max(10, "Login should be less than 10 symbols")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8).required("Required"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords don't match"
  ),
  phoneNumber: Yup.string()
    .phone("UA", "Please enter a valid phone number")
    .required("Phone number is required"),
});

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

const Registration = () => {

  const [registrationResult, setRegistrationResult] = useState('');
  const [errRegistration, setErrRegistration] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values, {resetForm}) => {
    const [firstName, lastName] = values.username.split(' ');
    const requestBody = {
      "firstName": firstName,
      "lastName": lastName,
      "login": values.login,
      "email": values.email,
      "password": values.password,
      "telephone": values.phoneNumber,
      "isAdmin": true
    };

    sendRequest(`${API}customers`, 'POST', {
      body: JSON.stringify(requestBody),
      headers: {'Content-Type': 'application/json'}
    })
      .then(r => setRegistrationResult(`Your account with login ${values.login} has been created`))
      .then(handleOpen)
      .catch(e => {
        setErrRegistration(`Something went wrong. Make sure you filled the form correctly`)
      })
  }
  return (
      <section className="registration__section">
        <div className="breadcrumbs_login">
            <Breadcrumbs />
        </div>
        <div className="container">
        <div className='registration__container'>
          <Formik
            initialValues={{
              login: "",
              username: "",
              email: "",
              password: "",
              passwordConfirm: "",
              phoneNumber: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({errors, touched, handleChange, handleSubmit}) => (
              <Form className="registration__form" onSubmit={handleSubmit}>
                <h2 className="registration__section-title">
                  Registration form
                </h2>
                <Input
                  className="registration__section-input"
                  name="username"
                  placeholder="John Johnson"
                  label="Enter your full name"
                  error={errors.username && touched.username}
                />
                <Input
                  className="registration__section-input"
                  name="login"
                  placeholder="Login"
                  label="Enter your login"
                  error={errors.login && touched.login}
                />
                <Input
                  className="registration__section-input"
                  name="email"
                  placeholder="example@gmail.com"
                  label="Email"
                  error={errors.email && touched.email}
                />
                <InputWithStrength
                  name="password"
                  placeholder="password"
                  label="Enter your password"
                  handleChange={handleChange}
                  error={errors.password && touched.password}
                />
                <Input
                  name="passwordConfirm"
                  className="registration__section-input"
                  type="password"
                  placeholder="password"
                  label="Confirm your password"
                  error={errors.passwordConfirm && touched.passwordConfirm}
                />
                <Input
                  className="registration__section-input"
                  name="phoneNumber"
                  placeholder="+380"
                  label="Your phone number"
                  error={errors.phone && touched.phone}
                />
                <div className="login__registration-section">
                  <h4 className="login__registration-title">
                    Already have an account?
                    <NavLink to="/login" className="login__registration-link">
                      {" "}
                      Go to the Login page
                    </NavLink>
                  </h4>
                </div>
                <div className="login__section-btn">
                  <Button type='submit' text="Register" className="section__btn-checkout"/>
                </div>
              </Form>
            )}
          </Formik>
          {registrationResult &&
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Registration information
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                  {registrationResult}
                </Typography>
                <div style={{display: "flex", justifyContent: "center", padding: "10px"}}>
                  <NavLink to="/login">
                    <Button type="submit" text="Login" className="section__btn-checkout"/>
                  </NavLink>
                </div>
              </Box>
            </Modal>
          }
          {errRegistration && <p className="login__registration-error">{errRegistration}</p>}
        </div>
        </div>
      </section>
  );
};

export default Registration;
