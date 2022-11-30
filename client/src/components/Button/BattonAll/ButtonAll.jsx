import "./ButtonAll.scss";
import React from "react";
import PropTypes from 'prop-types';

const Button = ({text, className, ...props}) => {

    return (
        <div>
            <button className={className} {...props}>
                {text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    text: "See More",
    className: ''
}

export default Button;
