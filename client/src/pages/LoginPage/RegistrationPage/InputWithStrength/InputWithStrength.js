import React, {useState, useRef} from "react";
import {Field, ErrorMessage} from 'formik';
import '../Input/Input.scss'
import '../Registration.scss';



const InputWithStrength = ({ label, className, placeholder, name, handleChange, error, ...props}) => {


  const [precentBar, setPrecentBar] = useState('');
  const passwordRef = useRef(null);
  const [toggleIcon, setToggleIcon] = useState('✅');
  const [toggleIconClasses, setToggleIconClasses] = useState('toggle-icon-passive');
  const [ripple, setRipple] = useState('');
  const [passLable, setPassLable] = useState('Strength');
  const [type, setType] = useState('password');

  const addClass = (className) => {
    setPrecentBar('')
    if (className) {
      setPrecentBar(className)
    }
  }

  const handlePassInput = (e) => {
    const value = passwordRef.current?.value || ''
    if (value.length === 0) {
      setPassLable('Strength');
      addClass()
    } else if (value.length <= 6) {
      setPassLable('Weak')
      addClass('weak')
    } else if (value.length <= 10) {
      setPassLable('Not Bad')
      addClass('average')
    } else {
      setPassLable('Strong');
      addClass('strong')
    }
  }

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
          <Field innerRef={passwordRef} type={type} name={name} {...props} className='registration__section-input'
                  onBlur={handlePassInput}
                 placeholder={placeholder}/>
          <ErrorMessage className="error" name={name} component={'p'}/>

        </label>
        <span onClick={togglePassInput} className={`toggle ${toggleIconClasses}`}
              id={document.querySelector('.error') ? 'hide_show-mistake' : 'hide_show'}>{toggleIcon}</span>
        <span className={`ripple ${ripple}`}></span>
      </div>
      <div className="pass-strength">
        <div className="strength-percent">
          <span className={precentBar}></span>
        </div>
        <span className='strength-lable'>{passLable}</span>
      </div>
    </>
  )
}

export default InputWithStrength;
