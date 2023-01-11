// import { createSlice } from '@reduxjs/toolkit'

// export const userReducer = createSlice({
//     name: 'user',
//     initialState: {
//         currentUser: null,
//         isFetching: false,
//         error: false
//     },
//     reducers: {
//         loginStart: (state) => {
//             state.isFetching = true 
//         },
//         loginSuccess: (state,action) => {
//             state.isFetching = false
//             state.currentUser = action.payload
//         },
//         loginFailure: (state,action) => {
//             state.isFetching = false
//             state.error = true
//         }, 

//     }
// })

// export const { loginStart, loginSuccess, loginFailure } = userReducer.actions
// export default userReducer.reducer

import { ActionTypes } from "../constants/actionTypes";

const initState = {
    currentUser: null,
    isFetching: false,
    error: false
}

export const loginStart = (state = initState,{type}) => {
    switch (type) {
        case ActionTypes.LOGIN_START :
            return state.isFetching = true
        default:
            return state 
    }
}

export const loginSuccess = (state = initState, {type, payload}) => {
    switch (type) {
        case ActionTypes.LOGIN_SUCCESS:
            state.isFetching = false
            return state.currentUser = payload
        default:
            return state;
    }
}

export const loginFailure = (state = initState, {type}) => {
    switch (type) {
        case ActionTypes.LOGIN_FAILURE:
            state.isFetching = false
            return state.error = true    
        default:
            return state;
    }
}