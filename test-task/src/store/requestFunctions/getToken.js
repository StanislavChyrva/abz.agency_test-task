import axios from "axios";
import {GET_TOKEN} from "../actions";

function getToken() {
    return async function (dispatch) {
        try {
            const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token');
            dispatch({type: GET_TOKEN, payload: data.token});
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default getToken;