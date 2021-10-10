import { combineReducers } from "redux";
import { registration } from "./registration.reducer";
import { authentication } from "./authentication.reducer";


const rootReducer = combineReducers({
    registration: registration,
    authentication: authentication,
});

export default rootReducer;
