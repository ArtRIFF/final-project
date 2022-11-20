import React, {useState, useRef} from "react";
import {Field, ErrorMessage} from 'formik';
import '../Input/Input.scss'
import '../Registration.scss';



const InputPassword = ({ label, className, placeholder, name, handleChange, error, ...props}) => {


  const [toggleIcon, setToggleIcon] = useState('✅');
  const [toggleIconClasses, setToggleIconClasses] = useState('toggle-icon-passive');
  const [ripple, setRipple] = useState('');
  const [type, setType] = useState('password');


  const togglePassInput = (e) => {
    if (type === 'password') {
      setType('text')
      setToggleIcon('✅')
      setRipple('ripple-active')
    } else {
      setType('password')
      setToggleIcon('❌')
      setRipple('ripple-passive')
      setToggleIconClasses('toggle-icon-passive')
    }
  }

  return (
    <>

      <div className='registration__show-hide'>
        <label>
          <h3 className="registration__section-field">{label}</h3>
          <Field type={type} name={name} {...props} className='registration__section-input'
                 placeholder={placeholder}/>
          <ErrorMessage className="error" name={name} component={'p'}/>
        </label>
        <span onClick={togglePassInput} className={`toggle ${toggleIconClasses}`}
              id={document.querySelector('.error') ? 'hide_show-mistake' : 'hide_show'}>{toggleIcon}</span>
        <span className={`ripple ${ripple}`}></span>
      </div>
    </>
  )
}

export default InputPassword;
