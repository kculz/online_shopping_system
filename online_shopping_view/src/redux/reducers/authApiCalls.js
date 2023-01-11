import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./userAuthReducer"

export const login = async (dispatch,user) => {
    dispatch(loginStart())
    try {
        const url = `http://localhost:5000/users/login`
        const res = await axios.get(url,user)
        dispatch(loginSuccess(res.data ))
    } catch (err) {
        dispatch(loginFailure())
    }
}