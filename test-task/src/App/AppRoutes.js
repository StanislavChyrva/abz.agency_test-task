import React from "react";
import {Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {useLocation} from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";
import NoMatchPage from "../pages/NoMatchPage";


const AppRoutes = () => {
    const location = useLocation();
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={350}>

                <Switch location={location}>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>

                    <Route exact path="/sign-up">
                        <RegistrationPage/>
                    </Route>

                    <Route exact path="/sign-up:id">
                        <RegistrationPage/>
                    </Route>

                    <Route exact path="*">
                        <NoMatchPage/>
                    </Route>

                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
};

export default AppRoutes;
