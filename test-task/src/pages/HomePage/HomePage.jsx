import React from "react";
import Intro from "../../client/components/Intro/Intro";
import LetsGetAcquainted from "../../client/components/LetsGetAcquainted/LetsGetAcquainted";
import Users from "../../client/components/Users/Users";
import Register from "../../client/components/Register/Register";
import ScrollToTop from "../../shared/components/ScrollToTop";
import appProps from "../../App/appProps";

const HomePage = () => {
    const {introProps, letsGetAcquaintedProps, usersProps, registerProps} = appProps;

    return (
        <>
            <Intro {...introProps} />
            <LetsGetAcquainted {...letsGetAcquaintedProps} />
            <Users {...usersProps} />
            <Register {...registerProps}/>
            <ScrollToTop/>
        </>
    )
};

export default HomePage;