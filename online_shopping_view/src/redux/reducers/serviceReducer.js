import { ActionTypes } from "../constants/actionTypes";

const initState = {
    services: [{}]
}

export const serviceReducer =(state = initState, {type,payload}) => {
    switch (type) {
        case ActionTypes.ADD_SERVICE_TO_CART:
            
            break;
    
        default:
            break;
    }
}