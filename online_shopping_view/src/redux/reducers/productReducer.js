import { ActionTypes } from "../constants/actionTypes";

const initState = {
    products:[{}]
}

export const productReducer = (state = initState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS :
            return state
        default:
            return state 
    }
}