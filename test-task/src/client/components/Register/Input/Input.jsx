import React from "react";
import "./Input.scss"
import InputMask from "react-input-mask";
import PropTypes from "prop-types";

const Input = (props) => {
    const {children, field, form, assistiveText, maskedPhone, ...otherProps} = props;


    //if error and touched change class of input
    const inputClassName = form.errors[field.name] && form.touched[field.name] ? 'input--error' : '';
    const inputRequiredClassName = !form.errors[field.name] && form.touched[field.name] && !!form.values[field.name] ? 'input--required' : '';
    const inputDisable = !form.errors[field.name] && form.touched[field.name] && !!form.values[field.name] && field.name === 'photo' ? 'disabled' : '';

    //hide assistive text when error
    const inputAssistiveText = form.errors[field.name] ? null :
        <span className="input__assistive-text">{assistiveText}</span>;


    if (maskedPhone) {
        return (
            <>
                <InputMask mask="+380 99 999 99 99" maskChar=" " disabled={inputDisable} {...field}>
                    {
                        (inputProps) =>
                        <input className={`${inputClassName} ${inputRequiredClassName}`} {...otherProps} {...inputProps}>
                            {children}
                        </input>
                    }
                </InputMask>
                {inputAssistiveText}
            </>
        )
    }
    return (
        <>
            <input className={`${inputClassName} ${inputRequiredClassName}`} {...field} {...otherProps} disabled={inputDisable}>
                {children}
            </input>
            {inputAssistiveText}
        </>
    )
};

export default Input;

Input.propTypes = {
    assistiveText: PropTypes.string,
    maskedPhone: PropTypes.bool,
};

Input.defaultProps = {
    assistiveText: '',
    maskedPhone: false
};