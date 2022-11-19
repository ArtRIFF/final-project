import React from "react";
import {Field,ErrorMessage} from 'formik';
import './Input.scss'


const Input = ({type, label, className, placeholder, name,error, ...props}) => {
  return (
    <label>
      <h3 className="registration__section-field">{label}</h3>
      <Field type={type} name={name} {...props} placeholder={placeholder} className={className}/>
      <ErrorMessage className="error" name={name} component={'p'}/>
    </label>
  )
}

export default Input;
