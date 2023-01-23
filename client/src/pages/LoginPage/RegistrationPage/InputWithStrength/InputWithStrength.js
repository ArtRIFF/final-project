import React, {useRef, useState} from "react";
import {ErrorMessage, Field} from 'formik';
import '../Input/Input.scss'
import '../Registration.scss';
import {ReactComponent as ShowPassIcon} from "./img/show-pass.svg";
import {ReactComponent as HidePassIcon} from "./img/hide-pass.svg";


const InputWithStrength = ({label, className, placeholder, name, handleChange, error, ...props}) => {

  const [passShown, setPassShown] = useState(false);
  const [percentBar, setPercentBar] = useState('');
  const passwordRef = useRef(null);
  const [passLable, setPassLable] = useState('Strength');

  const addClass = (className) => {
    setPercentBar('')
    if (className) {
      setPercentBar(className)
    }
  }
  const togglePassword = () => {
    setPassShown(!passShown)
  }

  const handlePassInput = (e) => {
    const value = passwordRef.current?.value || ''
    if (value.length === 0) {
      setPassLable('Strength');
      addClass()
    } else if (value.length <= 8) {
      setPassLable('Weak')
      addClass('weak')
    } else if (value.length <= 11) {
      setPassLable('Not Bad')
      addClass('average')
    } else {
      setPassLable('Strong');
      addClass('strong')
    }
  }


  return (
    <>
      <div className='registration__show-hide'>
        <label>
          <h3 className="registration__section-field">{label}</h3>
          <Field innerRef={passwordRef} type={passShown ? 'text' : 'password'} name={name} {...props}
                 className='registration__section-input'
                 onBlur={handlePassInput}
                 placeholder={placeholder}/>
          <ErrorMessage className="error" name={name} component={'p'}/>
          {passShown ? <HidePassIcon className='registration__show-hide__icon' onClick={togglePassword}/> :
            <ShowPassIcon className='registration__show-hide__icon' onClick={togglePassword}/>}
        </label>

      </div>
      <div className="pass-strength">
        <div className="strength-percent">
          <span className={percentBar}></span>
        </div>
        <span className='strength-lable'>{passLable}</span>
      </div>
    </>
  )
}

export default InputWithStrength;
