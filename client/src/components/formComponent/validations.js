import * as yup from 'yup';
const phoneRegExp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
export const validationSchema = yup.object().shape({
  firstName: yup
    .string('Enter your first name')
    .required('First name is required')
    .min(5),

  secondName: yup
    .string('Enter your second name')
    .required('Second name is required')
    .min(5),

  age: yup
    .number()
    .positive()
    .integer()
    .max(100)
    .required('Enter your age'),

  email: yup
    .string()
    .email('Invalid email')
    .required('Enter you email'),

  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Enter your phone'),

  address: yup
    .string()
    .required('Enter your address'),

});
