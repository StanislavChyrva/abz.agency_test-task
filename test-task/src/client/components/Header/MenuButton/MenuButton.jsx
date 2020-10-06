import React from "react";
import "./MenuButton.scss"
import buttonImg from "../../../../assets/menu-icon.svg";
import {useDispatch} from "react-redux";
import {createToggleMobileMenu} from "../../../../store/actionCreators";

const MenuButton = () => {
    const dispatch = useDispatch();
    return (
        <div className='menu-button' onClick={() => dispatch(createToggleMobileMenu())}>
            <img src={buttonImg} alt="Menu Background" className="menu-button-img"/>
        </div>
    )
};

export default MenuButton;