
import { Form, Formik} from "formik";
import * as Yup from 'yup';
import "yup-phone-lite";

import Header from '../../components/Header/Header';
import Button from '../../components/Button/BattonAll/ButtonAll';
import Footer from '../../components/Footer/Footer';
import Input from "./Input/Input";
import InputWithStrength from "./InputWithStrength/InputWithStrength";

import './Registration.scss';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Wow! That is a super long name!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5)
    .required(),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], "Passwords don't match"),
  phoneNumber: Yup.string()
    .phone("UA", "Please enter a valid phone number")
    .required('Phone number is required'),
});

const Registration = () => {
  return (
    <div>
      <Header/>
      <section className='registration__section'>
        <div className='container'>
          <h2 className='login__breadcrumbs'>Shop / Login / <span>Registration</span></h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          passwordConfirm: '',
          phoneNumber: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          /* FIXME Send data about the user to DB and do redirection to the LOGIN PAGE*/
          console.log('User information:', values)
          resetForm();
        }}
      >
        {({ errors, touched , handleChange, handleSubmit}) => (
          <Form className="registration__form" onSubmit={handleSubmit}>
            <h2 className='registration__section-title'>Registration form</h2>
            <Input
              className="registration__section-input"
              name="username"
              placeholder="John Johnson"
              label="Enter your full name"
              error={errors.username && touched.username}
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
              type='password'
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
            <div className='login__registration-section'>
              {/*FIXME create a link to Login page*/}
              <h4 className='login__registration-title'>Already have an account?<a href="" className='login__registration-link'> Go to the Login page</a></h4>
            </div>
            <div className='login__section-btn'>
              <Button text="Register" className="section__btn-checkout"/>
            </div>
          </Form>
        )}
      </Formik>
          </div>
        </section>
      <Footer/>
    </div>
  )

}

export default Registration;
