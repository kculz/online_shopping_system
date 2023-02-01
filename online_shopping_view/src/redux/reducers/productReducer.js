import { ActionTypes } from "../constants/actionTypes";
import axios from 'axios'

export const listProducts = (category ='') => async (dispatch) => {
    try {
        dispatch({type:ActionTypes.PRODUCT_LIST_REQUEST});
        const {data} = await axios.get(`http://localhost:5000/products?category`+ category);
        dispatch({type:ActionTypes.PRODUCT_LIST_SUCCESS, payload: data});
    } catch (err) {
        dispatch({type:ActionTypes.PRODUCT_LIST_FAIL, payload: err.message})
    }
}
