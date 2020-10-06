import React from "react";
import {useHistory} from "react-router-dom";
import "./GoHome.scss"
import Button from "../Button";

const GoHome = ({type = 'flat'}) => {
    const history = useHistory();

    const goHome = () => history.push('/');
    return (
        <div className="go-home">
        <Button text="Go to homepage" handleClick={goHome} type={type}/>
        </div>
    )
};

export default GoHome;

