import {combineReducers} from "redux";
import users from "./usersReducer";
import header from "./headerReducer";
import registration from "./registrationReducer";
import modal from "./modalReducer";

const rootReducer = combineReducers({
    users,
    header,
    registration,
    modal
});

export default rootReducer;