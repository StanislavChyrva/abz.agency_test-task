import {
    HEADER_RESIZE,
    HIDE_USERS,
    SHOW_MORE_USERS,
    TOGGLE_MOBILE_MENU,
    SHOW_MODAL,
    SET_IS_SUCCESS_MODAL,
    CLOSE_MODAL
} from "./actions";

export const createToggleMobileMenu = () => ({type: TOGGLE_MOBILE_MENU});
export const createHeaderResize = () => ({type: HEADER_RESIZE});

export const createShowMoreUsers = () => ({type: SHOW_MORE_USERS});
export const createHideUsers = () => ({type: HIDE_USERS});

export const createShowModal = () => ({type: SHOW_MODAL});
export const createCloseModal = () => ({type: CLOSE_MODAL});
export const createSetIsSuccessModal = (payload) => ({type: SET_IS_SUCCESS_MODAL, payload});
