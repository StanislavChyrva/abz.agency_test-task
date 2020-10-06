import React from "react";
import {NavLink} from "react-router-dom";
import "./MobileMenu.scss"
import Logo from "../../../../shared/components/Logo";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {createToggleMobileMenu} from "../../../../store/actionCreators";

const MobileMenu = () => {
const {isShowMobileMenu, headerLinks} = useSelector(state => state.header, shallowEqual);
const dispatch = useDispatch();

    const linksArray = headerLinks.map((item, sectionId) => {
        return item.map((link, id) =>  <NavLink className="link mobile-menu__link"
                                                activeClassName="mobile-menu__link--active"
                                                to={`/sign-up:${sectionId}${id}`} //all call to action redirect to /sign-up
                                                key={`${sectionId}${id}`} onClick={() => dispatch(createToggleMobileMenu())}>{link}</NavLink>); // handleClick - hide mobile menu
    });

    const sectionArray = linksArray.map((item, id) =>  <div key={`section${id}`} className="mobile-menu__section">{item}</div>); // sections with links

    const className = isShowMobileMenu ? 'mobile-menu' : 'mobile-menu mobile-menu--hidden';
    return (
        <div className={className}>
            <Logo handleClick={() => dispatch(createToggleMobileMenu())}/>
            {sectionArray}
        </div>
    )
};

export default MobileMenu;
