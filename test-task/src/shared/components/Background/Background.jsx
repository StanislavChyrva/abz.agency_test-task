import React from "react";
import "./Background.scss"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {createToggleMobileMenu} from "../../../store/actionCreators";
import {CSSTransition} from "react-transition-group";

const Background = () => {
    const {isShowMobileMenu} = useSelector(state => state.header, shallowEqual);
    const dispatch = useDispatch();
    const className = isShowMobileMenu ? 'background' : 'background background--hidden';

    return (
        <CSSTransition in={isShowMobileMenu} timeout={200} classNames="fade">
        <div className={className} onClick={() => dispatch(createToggleMobileMenu())} />
        </CSSTransition>
    )
};

export default Background;
