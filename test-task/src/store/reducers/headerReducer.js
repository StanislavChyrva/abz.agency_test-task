import {HEADER_RESIZE, TOGGLE_MOBILE_MENU} from "../actions";
import appProps from "../../App/appProps";

const {desktopMenuProps, mobileMenuProps} = appProps;

const initialState = {
    deviceWidth: window.innerWidth,
    isShowMobileMenu: false,
    headerLinks: window.innerWidth >= 1024 ? desktopMenuProps : mobileMenuProps,
    headerType: window.innerWidth >= 1024 ? 'desktop' : 'mobile',

};


const headerReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TOGGLE_MOBILE_MENU:
            document.body.classList.toggle('body--no-scroll');
            return {...state, isShowMobileMenu: !state.isShowMobileMenu};
        case HEADER_RESIZE:
            return {
                ...state,
                headerLinks: window.innerWidth >= 1024 ? desktopMenuProps : mobileMenuProps,
                headerType: window.innerWidth >= 1024 ? 'desktop' : 'mobile',
            };
        default:
            return state;
    }
};

export default headerReducer;