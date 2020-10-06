import axios from "axios";
import {GET_REQUEST_MESSAGE, GET_REQUEST_SUCCESS} from "../actions";
import {createHideUsers} from "../actionCreators";
import getUsers from "./getUsers";

function postNewUser(config, body) {
    return async function (dispatch) {
        try {
            const {data} = await axios.post('https://frontend-test-assignment-api.abz.agency/api/v1/users', body, config);
            dispatch({type: GET_REQUEST_MESSAGE, payload: data.message});
            dispatch({type: GET_REQUEST_SUCCESS, payload: data.success});
            dispatch(createHideUsers());
            dispatch(getUsers());
            return data.success;
        }
        catch (error) {
            const {data} = error.response;
            dispatch({type: GET_REQUEST_MESSAGE, payload: data.message});
            dispatch({type: GET_REQUEST_SUCCESS, payload: data.success});
            return data.success;
        }
    }
}

export default postNewUser;
