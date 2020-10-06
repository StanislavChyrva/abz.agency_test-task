import React from "react";
import "./Register.scss"
import Section from "../../../../shared/components/Section";
import SignUpForm from "../SignUpForm";
import PropTypes from "prop-types";

const Register = (props) => {

    const {title, className, text, ...rest} = props;

    return (
        <>
            <Section title={title} className={className}>
                <p>{text}</p>
                <SignUpForm {...rest}/>
            </Section>
        </>
    )
};

export default Register;

Register.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};

Register.defaultProps = {
    className: 'register'
};
