import React from "react";
import { useHistory } from "react-router-dom";
import "./Intro.scss"
import Section from "../../../../shared/components/Section";
import Button from "../../../../shared/components/Button";
import PropTypes from "prop-types";
import Footer from "../../Footer/Footer";

const Intro = (props) => {
    const {title, className, text} = props;
    const history = useHistory();
    const goToSignUp = () => {
        history.push("/sign-up")
    };
    return (
        <>
            <Section title={title} className={className}>
                <p>{text}</p>
                <Button text='Sign up now' type='primary' handleClick={goToSignUp}/>
            </Section>
        </>
    )
};

export default Intro;

Intro.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    className: 'intro'
};

