import React, {useEffect} from "react";
import "./Header.scss"
import Logo from "../../../../shared/components/Logo";
import MenuButton from "../MenuButton";
import MobileMenu from "../MobileMenu";
import DesktopMenu from "../DesktopMenu";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import {createHeaderResize} from "../../../../store/actionCreators";
import Locky from "react-locky";
import Background from "../../../../shared/components/Background";


const Header = () => {
    const {isShowMobileMenu, headerType} = useSelector(state => state.header, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('resize', () => dispatch(createHeaderResize()));
    },[dispatch]);

    const mobileMenuButton = headerType === 'mobile' ? <MenuButton/> : null;
    const menu = headerType === 'mobile' ? <MobileMenu/> : <DesktopMenu/>;

    return (
        <Locky enabled={isShowMobileMenu}>
        <header className='header'>
            <Logo/>
            {mobileMenuButton}
            {menu}
            <Background/>
        </header>
        </Locky>

    )
};

export default Header;

