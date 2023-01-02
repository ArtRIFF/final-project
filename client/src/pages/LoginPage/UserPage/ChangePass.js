import {Form, Formik} from "formik";
import * as Yup from "yup";

import Button from "../../../components/Button/ButtonAll/ButtonAll";
import Input from "../RegistrationPage/Input/Input";
import InputWithStrength from "../RegistrationPage/InputWithStrength/InputWithStrength";

import "./UserPage.scss";

import {sendAuthorizedRequest} from "../../../helpers/sendRequest"
import {API} from "../../../config/API";

import Breadcrumbs from "../../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../context/UserContext";
import {ReactComponent as PasswordIcon} from "../UserPage/img/password.svg";
import {ReactComponent as ProfileIcon} from "./img/profile-icon.svg";



export const validationSchema = Yup.object().shape({
  newPassword: Yup.string().min(8).required('required'),
  newPasswordConfirm: Yup.string().oneOf(
    [Yup.ref("newPassword")],
    "Passwords don't match"
  ),
})


const ChangePassPage = () => {

  const [err, setErr] = useState(false);
  const [successfulMessage, setSuccessfulMessage] = useState(false)


  const handleSubmit = (values) => {
    const requestBody = {
      "password": values.password,
      "newPassword": values.newPassword,
    };
    sendAuthorizedRequest(`${API}customers/password`, 'PUT', {
      body: JSON.stringify(requestBody),
    })
      .then(r => {
        setSuccessfulMessage(true);
        setErr(false);

      }).catch(err => {
      setErr(true);
      setSuccessfulMessage(false);

    })
  }

  return (
    <div>
      <section className="registration__section">
        <div className="breadcrumbs_login">
          <Breadcrumbs/>
        </div>
        <div className="container">
        <div className="change__pass-container">
          <Formik
            initialValues={{
              password: '',
              newPassword: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({errors, touched, handleChange, handleSubmit}) => (
              <Form className="registration__form" onSubmit={handleSubmit}>
                <div className="section-subtitle">
                  <h2 className="registration__section-subtitle">
                    Change your password
                  </h2>
                  <PasswordIcon className="profile-icon"/>
                </div>
                <Input
                  name="password"
                  className="registration__section-input"
                  type="password"
                  placeholder="password"
                  label="Enter your old password"
                />
                {err ? <p className="login__registration-error">Your old password is different</p> : <span></span>}
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
                {successfulMessage ? <p className="login__registration-error">Your password successfully changed</p> : <span></span>}
                <div className="login__section-btn">
                  <Button type='submit' text="Update password" className="section__btn-checkout"/>
                </div>
              </Form>
            )}
          </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassPage;
