import Button from '../../../components/Button/ButtonAll/ButtonAll';
import '../RegistrationPage/Registration.scss';
import {Form, Formik} from "formik";
import Input from "../RegistrationPage/Input/Input";
import InputPassword from "../RegistrationPage/InputWithStrength/InputPassword";
import {NavLink, useNavigate} from 'react-router-dom';
import {sendAuthorizedRequest, sendRequest} from "../../../helpers/sendRequest";
import {API} from "../../../config/API";
import * as Yup from "yup";
import Breadcrumbs from '../../CatalogSectionPage/components/Breadcrumbs/Breadcrumbs';
import {useContext, useState} from "react";
import {UserContext} from "../../../context/UserContext";


const Login = () => {

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({

    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8).required("Required"),
  });

  const {setUserInfo, setToken} = useContext(UserContext);

  const [err, setErr] = useState(false)


  const handleSubmit = (values) => {
    const requestBody = {
      loginOrEmail: values.email,
      password: values.password
    };

    sendRequest(`${API}customers/login`, 'POST',
      {
        body: JSON.stringify(requestBody),
        headers: {'Content-Type': 'application/json'}
      })
      .then(r => {
        if (r.success) {
          setToken(r.token)
          sessionStorage.setItem('token', r.token);
          navigate('/userPage');
          sendAuthorizedRequest(`${API}customers/customer`, "GET",).then(user => setUserInfo(user))
        } else {
          console.log('invalid credentials')
        }
      })
      .catch(e => {
        setErr(true)
      })
  }
  return (
    <section className='login__section'>
      <div className="breadcrumbs_login">
        <Breadcrumbs/>
      </div>
      <div className="container">
        <div className='login__container'>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({errors, touched, handleChange, handleSubmit}) => (
              <Form className="registration__form" onSubmit={handleSubmit}>
                <h2 className='registration__section-title'>Login </h2>
                <Input
                  className="registration__section-input"
                  name="email"
                  placeholder="example@gmail.com"
                  label="Email"
                  error={errors.email && touched.email}
                />
                <InputPassword
                  name="password"
                  placeholder="password"
                  label="Enter your password"
                  handleChange={handleChange}
                  error={errors.password && touched.password}
                />
                {err && <p className="login__registration-error">Entered password or email is incorrect</p>}
                <div className='login__registration-section'>
                  <h4 className='login__registration-title'>Don't have an account yet?<NavLink to="/registration"
                                                                                               className='login__registration-link'> Register</NavLink>
                  </h4>
                </div>
                <div className='login__section-btn'>
                  <Button type="submit" text="Continue" className="section__btn-checkout"/>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Login;