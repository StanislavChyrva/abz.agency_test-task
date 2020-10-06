import {GET_POSITIONS, GET_TOKEN, GET_REQUEST_MESSAGE, GET_REQUEST_SUCCESS} from "../actions";

const initialState = {
    token: '',
    positions: [],
    requestMessage: '',
    requestSuccess: null
};

const registrationReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_TOKEN:
            return {...state, token: payload};
        case GET_POSITIONS:
            return {...state, positions: payload};
        case GET_REQUEST_MESSAGE:
            return {...state, requestMessage: payload};
        case GET_REQUEST_SUCCESS:
            return {...state, requestSuccess: payload};
        default:
            return state;
    }
};

export default registrationReducer;