import React from "react";
import {NavLink} from "react-router-dom";
import "./DesktopMenu.scss"
import {useSelector, shallowEqual} from "react-redux";

const DesktopMenu = () => {
    const {headerLinks} = useSelector(state => state.header, shallowEqual);
    const linksArray = headerLinks.map(({text, link}, id) => <NavLink to={`${link}:${id}`}
                                                                className="link desktop-menu__link"
                                                                activeClassName="link--active desktop-menu__link" key={id}>
        {text}</NavLink>);

    return (
        <div className="desktop-menu">
            {linksArray}
        </div>
    )
};

export default DesktopMenu;
