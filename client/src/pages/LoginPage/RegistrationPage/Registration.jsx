import {Form, Formik} from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

import Button from "../../../components/Button/BattonAll/ButtonAll";
import Input from "./Input/Input";
import InputWithStrength from "./InputWithStrength/InputWithStrength";

import "./Registration.scss";

import {NavLink} from "react-router-dom";
import {sendRequest} from "../../../helpers/sendRequest";
import {API} from "../../../config/API";

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

const Registration = () => {

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
      .then(r => {
        console.log(r);
        resetForm();
      })
  }
  return (
    <div>
      <section className="registration__section">
        <div className="container">
          <h2 className="login__breadcrumbs">
            Shop / Login / <span>Registration</span>
          </h2>
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
        </div>
      </section>
    </div>
  );
};

export default Registration;
