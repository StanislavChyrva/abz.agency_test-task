import React from "react";
import "./Logo.scss"
import logoImg from "../../../assets/logo.svg";
import {Link} from "react-router-dom";

const Logo = (props) => {
    const {handleClick} = props;
    return (
        <Link to="/">
        <div className='logo' onClick={handleClick}>
            <img src={logoImg} alt="TESTTASK" className="logo-img"/>
        </div>
        </Link>
    )
};

Logo.defaultProps = {
    handleClick: () => {}
};

export default Logo;

