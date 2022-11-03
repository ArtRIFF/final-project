import React from 'react';
import PropTypes from "prop-types";
import { PatternFormat } from 'react-number-format';

const Input = ({ type, placeholder, label, name, error, errorMessage, ...restProps }) => {
  return (
    <label className={"form-item"}>
      <p className="form-label">{label}</p>
      {(name !== 'phone') ? <input type={type} name={name}
        placeholder={placeholder}
        {...restProps}
      />
        : <PatternFormat
          format="+38(###)###-##-##"
          allowEmptyFormatting mask="_"
          type={type}
          name={name} 
          {...restProps}
          />}
      {error && <p className="error-message">{errorMessage}</p>}
    </label>
  )
}
Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}

export default Input;
