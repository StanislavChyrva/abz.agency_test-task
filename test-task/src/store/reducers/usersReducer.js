import {GET_USERS, SHOW_MORE_USERS, HIDE_USERS} from "../actions";


const initialState = {
    users: [],
    usersCounter: window.innerWidth < 768 ? 3 : 6,
    usersCountToShow: window.innerWidth < 768 ? 3 : 6
};

const usersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS:
            return {...state, users: payload};
        case SHOW_MORE_USERS:
            return {...state, usersCountToShow: +state.usersCountToShow + +state.usersCounter};
        case HIDE_USERS:
            return {...state, usersCountToShow: +state.usersCounter};
        default:
            return state;
    }
};

export default usersReducer;