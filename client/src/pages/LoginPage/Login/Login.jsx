import Header from '../../../components/Header/Header';
import Button from '../../../components/Button/BattonAll/ButtonAll';
import Footer from '../../../components/Footer/Footer';
import '../RegistrationPage/Registration.scss';
import {validationSchema} from "../RegistrationPage/Registration";
import {Form, Formik} from "formik";
import Input from "../RegistrationPage/Input/Input";
import InputPassword from "../RegistrationPage/InputWithStrength/InputPassword";
import { NavLink } from 'react-router-dom';

const Login = () => {
return(
        <>
            <Header/>
            <section className='login__section'>
                <div className='container'>
                    <h2 className='login__breadcrumbs'>Shop / <span>Login</span></h2>
                    <Formik
                      initialValues={{
                          email: '',
                          password: ''
                      }}
                      validationSchema={validationSchema}
                      onSubmit={(values, { resetForm }) => {
                          /* FIXME Send data and do redirection to the MAIN PAGE*/
                          console.log('User information:', values)
                          resetForm();
                      }}
                    >
                        {({ errors, touched , handleChange, handleSubmit}) => (
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
                              <div className='login__registration-section'>
                                  {/*FIXME create a link to Login page*/}
                                  <h4 className='login__registration-title'>Don't have an account yet?<NavLink to="/registration" className='login__registration-link'> Register</NavLink></h4>
                              </div>
                              <div className='login__section-btn'>
                                  <Button text="Continue" className="section__btn-checkout"/>
                              </div>
                          </Form>
                        )}
                    </Formik>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Login;