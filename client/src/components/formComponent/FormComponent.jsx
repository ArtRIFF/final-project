import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartArray } from '../../store/selectors';

import Input from './components/input/Input';
import { validationSchema } from './validations';

import { FormContainer } from './styles';
import { setCartProd } from '../../store/actions';

const FormComponent = () => {
  const dispatch = useDispatch();
  const cartArray = useSelector(selectCartArray);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      age: '',
      address: '',
      phone: '',
      email: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let sumCount = 0;
      const resultArray = cartArray.map(({ imgURL, ...info }) => {
        sumCount += (+info.price);
        return info;
      });
      console.log("%cOrder info", "color:red");
      console.group();
      console.log("%cClient info", "color:green");
      console.table(values);
      console.group();
      console.log("%cBought products", "color:green");
      console.table(resultArray);
      console.groupEnd();
      console.log('Sum to pay: ', sumCount);
      dispatch(setCartProd([]));
    }
  })
  return (
    <FormContainer>
      <h2 className='form-title'>Order form</h2>
      <form className="form" onSubmit={formik.handleSubmit}>
        <Input
          {...formik.getFieldProps('firstName')}
          error={formik.touched.firstName && formik.errors.firstName}
          errorMessage={formik.errors.firstName}
          type='text'
          placeholder='Your first name'
          label='Enter your first name:'
          name='firstName'
        />
        <Input
          {...formik.getFieldProps('secondName')}
          error={formik.touched.secondName && formik.errors.secondName}
          errorMessage={formik.errors.secondName}
          type='text'
          placeholder='Your second name'
          label='Enter your second name:'
          name='secondName'
        />
        <Input
          {...formik.getFieldProps('age')}
          error={formik.touched.age && formik.errors.age}
          errorMessage={formik.errors.age}
          type='text'
          placeholder='Your age'
          label='Enter your age:'
          name='age'
        />
        <Input
          {...formik.getFieldProps('address')}
          error={formik.touched.address && formik.errors.address}
          errorMessage={formik.errors.address}
          type='text'
          placeholder='Your address'
          label='Enter your address:'
          name='address'
        />
        <Input
          {...formik.getFieldProps('phone')}
          error={formik.touched.phone && formik.errors.phone}
          errorMessage={formik.errors.phone}
          type='text'
          placeholder='Your phone'
          label='Enter your phone:'
          name='phone'
        />
        <Input
          {...formik.getFieldProps('email')}
          error={formik.touched.email && formik.errors.email}
          errorMessage={formik.errors.email}
          type='text'
          placeholder='Your email'
          label='Enter your email:'
          name='email'
        />
        <div className="form-btn">
          <input type="submit" value="Checkout" />
        </div>
      </form>
    </FormContainer>
  )
}


export default FormComponent;