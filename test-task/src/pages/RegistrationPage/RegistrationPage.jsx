import React from "react";
import Register from "../../client/components/Register/Register";
import ScrollToTop from "../../shared/components/ScrollToTop";
import appProps from "../../App/appProps";
import GoHome from "../../shared/components/GoHome";

const RegistrationPage = () => {
    const {registerProps} = appProps;

    return (
        <>
            <Register {...registerProps} />
            <GoHome/>
            <ScrollToTop/>
        </>
    )
};

export default RegistrationPage;