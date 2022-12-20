import { ActionTypes } from "../constants/actionTypes";

const initState = {
    products:[{
        id:1,
        title: "Kudzai",
        cat: "coding "
    }]
}

export const productReducer = (state = initState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS :
            return state
        default:
            return state 
    }
}