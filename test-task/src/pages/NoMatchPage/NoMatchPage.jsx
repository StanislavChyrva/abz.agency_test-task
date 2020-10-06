import React from "react";
import Section from "../../shared/components/Section";
import GoHome from "../../shared/components/GoHome";
import "./NoMatchPage.scss";

const NoMatchPage = () => {

    return (
        <Section className="no-match" title="Oops... Page not found">
            <p>We are very sorry</p>
            <GoHome type="primary"/>
        </Section>
    )
};

export default NoMatchPage;

