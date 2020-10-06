import React from "react";
import "./RadioButtons.scss"
import {Field, ErrorMessage} from "formik";
import ErrorText from "../ErrorText";
import PropTypes from "prop-types";


const RadioButtons = (props) => {
    const {positions, label, name, ...rest} = props;
    return (

        <div className='field__control field__control-radio'>
            <label className="input-radio-main-label">{label}</label>

        {positions.map(position => {
            return (
                    <Field name={name} key={position.id} {...rest}>
                        {({field}) => {
                            return (
                                <div className="radio__container">
                                    <input
                                        {...field}
                                        type="radio"
                                        id={`${name}${position.id}`}
                                        name={field.name}
                                        value={position.id}
                                        checked={+field.value === position.id}
                                    />
                                    <label htmlFor={`${name}${position.id}`}>{position.name}</label>
                                </div>
                            )
                        }}
                    </Field>
            )
        })}
            <ErrorMessage name={name} component={ErrorText}/>
        </div>

    )
};

export default RadioButtons;

RadioButtons.propTypes = {
    positions: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
