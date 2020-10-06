import React from "react";

import "./Button.scss"
import PropTypes from "prop-types";

const Button = (props) => {
    const {text, type, handleClick, submit, disabled, className} = props;

    const buttonClassTypes = {
        primary: 'btn-primary',
        flat: 'btn-flat'
    };

    const buttonCLass = `btn ${buttonClassTypes[type]} ${className}`;
    const buttonType = submit ? 'submit' : '';

    return (
        <button className={buttonCLass} onClick={handleClick} disabled={disabled} type={buttonType}>
            {text}
        </button>
    )
};

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string.isRequired,
    submit: PropTypes.bool,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

Button.defaultProps = {
    type: 'primary',
    handleClick: null,
    submit: false,
    disabled: false,
    className: ''
};