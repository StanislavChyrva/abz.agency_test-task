import axios from "axios";
import {GET_POSITIONS} from "../actions";

function getPositions() {
    return async function (dispatch) {
        try {
            const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
            dispatch({type: GET_POSITIONS, payload: data.positions});
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default getPositions;