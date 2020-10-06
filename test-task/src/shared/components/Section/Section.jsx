import React from "react";
import "./Section.scss"
import PropTypes from "prop-types";

const Section = ({title, className, children}) => {

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
};

export default Section;

Section.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
};
