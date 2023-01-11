import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import {loginFailure,loginSuccess,loginStart} from "./userAuthReducer"

const reducers = combineReducers({
    allProducts:productReducer,
    user: {
        loginFailure,
        loginStart,
        loginSuccess
    }
})

export default reducers