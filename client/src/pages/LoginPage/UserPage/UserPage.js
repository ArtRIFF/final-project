import {Form, Formik} from "formik";
import * as Yup from "yup";
import "yup-phone-lite";

import Button from "../../../components/Button/ButtonAll/ButtonAll";
import Input from "../RegistrationPage/Input/Input";
import InputWithStrength from "../RegistrationPage/InputWithStrength/InputWithStrength";

import "./UserPage.scss";

import {sendAuthorizedRequest} from "../../../helpers/sendRequest"
import {API} from "../../../config/API";

import Breadcrumbs from "../../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";
import {useContext} from "react";
import {UserContext} from "../../../context/UserContext";
import {ReactComponent as ProfileIcon} from "../UserPage/img/profile-icon.svg";


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

  phoneNumber: Yup.string()
    .phone("UA", "Please enter a valid phone number")
    .required("Phone number is required"),
});

export const changePassValidationSchema = Yup.object().shape({
  // oldPasswordConfirm: Yup.mixed().notOneOf([oldPassword], 'old password is different'),
  newPassword: Yup.string().min(8).required('required'),
  newPasswordConfirm: Yup.string().oneOf(
    [Yup.ref("newPassword")],
    "Passwords don't match"
  ),
})


const UserPage = () => {

  const {userInfo} = useContext(UserContext);
  const handleSubmit = (values, {resetForm}) => {
    const [firstName, lastName] = values.username.split(' ');
    const requestBody = {
      "firstName": firstName,
      "lastName": lastName,
      "login": values.login,
      "email": values.email,
      "telephone": values.phoneNumber,
      "country": values.country,
      "homeAddress": values.homeAddress,
    };

    sendAuthorizedRequest(`${API}customers`, 'PUT', {
      body: JSON.stringify(requestBody),
    })
      .then(r => {
        console.log(r);
      })
  }
  const handleSubmitPass = (values) => {
    const requestBody = {
      "password": values.password,
      "newPassword": values.newPassword,
    };

    sendAuthorizedRequest(`${API}customers/password`, 'PUT', {
      body: JSON.stringify(requestBody),
    })
      .then(r => {
        alert(r.message);
      })
  }


  return (
    <div>
      <section className="registration__section">
        <div className="breadcrumbs_login">
          <Breadcrumbs/>
        </div>
        <div className="container">
          <Formik
            initialValues={{
              login: userInfo?.login || "",
              username: `${userInfo?.firstName} ${userInfo?.lastName}` || '',
              email: userInfo?.email || "",
              phoneNumber: userInfo?.telephone || "",
              country: userInfo?.country || "",
              homeAddress: userInfo?.homeAddress || "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {({errors, touched, handleChange, handleSubmit}) => (
              <Form className="registration__form" onSubmit={handleSubmit}>
                <h1 className="registration__section-title">Welcome, {userInfo?.firstName}!</h1>
                <div className="section-subtitle">
                  <h2 className="registration__section-subtitle">
                    User profile information
                  </h2>
                  <ProfileIcon className="profile-icon"/>
                </div>
                <Input
                  className="registration__section-input"
                  name="username"
                  placeholder="First and last name"
                  label="Your full name"
                  error={errors.username && touched.username}
                />
                <Input
                  className="registration__section-input"
                  name="login"
                  placeholder="Login"
                  label="Your login"
                  error={errors.login && touched.login}
                />
                <Input
                  className="registration__section-input"
                  name="email"
                  placeholder="example@gmail.com"
                  label="Your Email"
                  error={errors.email && touched.email}
                />

                <Input
                  className="registration__section-input"
                  name="phoneNumber"
                  placeholder="+380"
                  label="Your phone number"
                  error={errors.phone && touched.phone}
                />
                <Input
                  className="registration__section-input"
                  name="country"
                  placeholder="Ukraine"
                  label="Your country"
                />
                <Input
                  className="registration__section-input"
                  name="homeAddress"
                  placeholder="Kyiv, Bandery street, 1"
                  label="Your home address"
                />

                <div className="login__section-btn">
                  <Button type='submit' text="Update information" className="section__btn-checkout"/>
                </div>
              </Form>
            )}
          </Formik>

          <Formik
            initialValues={{
              password: '',
              newPassword: '',
            }}
            onSubmit={handleSubmitPass}
            validationSchema={changePassValidationSchema}
          >
            {({errors, touched, handleChange, handleSubmitPass}) => (
              <Form className="registration__form" onSubmit={handleSubmitPass}>
                <h2 className="registration__section-title">
                  Password change
                </h2>
                <Input
                  name="password"
                  className="registration__section-input"
                  type="password"
                  placeholder="password"
                  label="Enter your old password"
                  error={errors.oldPasswordConfirm && touched.oldPasswordConfirm}
                />
                <InputWithStrength
                  name="newPassword"
                  placeholder="password"
                  label="Enter your new password"
                  handleChange={handleChange}
                  error={errors.newPassword && touched.newPassword}
                />
                <Input
                  name="newPasswordConfirm"
                  className="registration__section-input"
                  type="password"
                  placeholder="password"
                  label="Confirm your new password"
                  error={errors.newPasswordConfirm && touched.newPasswordConfirm}
                />
                <div className="login__section-btn">
                  <Button type='submit' text="Update password" className="section__btn-checkout"/>
                </div>
              </Form>
            )}
          </Formik>

        </div>
      </section>
    </div>
  );
};

export default UserPage;
