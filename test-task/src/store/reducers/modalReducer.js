import {SHOW_MODAL, CLOSE_MODAL, SET_IS_SUCCESS_MODAL} from "../actions";


const initialState = {
    showModal: false,
    isSuccess: false
};

const modalReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_MODAL:
            return {...state, showModal: true};
        case CLOSE_MODAL:
            return {...state, showModal: false};
        case SET_IS_SUCCESS_MODAL:
            return {...state, isSuccess: payload};
        default:
            return state;
    }
};

export default modalReducer;