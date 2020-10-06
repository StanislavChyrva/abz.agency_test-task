import React from "react";
import { useHistory } from "react-router-dom";
import "./LetsGetAcquainted.scss"
import Section from "../../../../shared/components/Section";
import Button from "../../../../shared/components/Button";
import manLaptopImg from '../../../../assets/man-laptop-v1.svg';
import PropTypes from "prop-types";

const LetsGetAcquainted = (props) => {

    const {title, subTitle, className, text} = props;
    const textElements = text.map((text, id) => <p key={id}>{text}</p>);
    const history = useHistory();
    /**
     * @desc go to sign-up page
     */
    const goToSignUp = () => {
        history.push("/sign-up")
    };

    return (
        <>
            <Section title={title} className={className}>
                <div className="lets-get-acquainted__content-wrapper">
                    <img src={manLaptopImg} alt="Man with Laptop"/>
                    <div className="lets-get-acquainted__text-wrapper">
                        <h2>{subTitle}</h2>
                        {textElements}
                        <Button text='Sign up now' type='flat' handleClick={goToSignUp}/>
                    </div>
                </div>
            </Section>
        </>
    )
};

export default LetsGetAcquainted;

LetsGetAcquainted.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    subTitle: PropTypes.string.isRequired
};

LetsGetAcquainted.defaultProps = {
    className: 'lets-get-acquainted'
};
