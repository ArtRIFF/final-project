import React, {useState} from "react";
import {ErrorMessage, Field} from 'formik';
import '../Input/Input.scss'
import '../Registration.scss';
import {ReactComponent as HidePassIcon} from "./img/hide-pass.svg";
import {ReactComponent as ShowPassIcon} from "./img/show-pass.svg";


const InputPassword = ({label, className, placeholder, name, handleChange, error, ...props}) => {

  const [passShown, setPassShown] = useState(false);

  const togglePassword = () => {
    setPassShown(!passShown)
  }

  return (
    <>
      <div className='registration__show-hide'>
        <label>
          <h3 className="registration__section-field">{label}</h3>
          <Field type={passShown ? 'text' : 'password'} name={name} {...props}
                 className='registration__section-input'
                 placeholder={placeholder}/>
          <ErrorMessage className="error" name={name} component={'p'}/>
          {passShown ? <HidePassIcon className='registration__show-hide__icon' onClick={togglePassword}/> :
            <ShowPassIcon className='registration__show-hide__icon' onClick={togglePassword}/>}
        </label>

      </div>
    </>
  )
}

export default InputPassword;
