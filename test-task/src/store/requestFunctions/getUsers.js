import axios from "axios";
import {GET_USERS} from "../actions";

function getUsers() {
    return async function (dispatch) {
        try {
            const {data: firstData} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users');
            const {data} = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?count=${firstData['total_users']}`);
            const payload =  data.users.sort((a, b) => b['registration_timestamp'] - a['registration_timestamp']);
            dispatch({type: GET_USERS, payload});
        }
        catch (error) {
            throw new Error(error);
        }
    }
}

export default getUsers;