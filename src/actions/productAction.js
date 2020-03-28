/* eslint-disable no-undef */
import axios from 'axios';
import {
    GET_PRODUCT_SUCCESS,
} from '../constants';
// import { returnErrors } from './errorAction';

const host_url = process.env.REACT_APP_HOST_URL;
const local_url = process.env.REACT_APP_LOCAL_URL;

export const getProduct = (_id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        console.log(process.env)
        axios.get(`${local_url || host_url}/api/product/${_id}`)
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: GET_PRODUCT_SUCCESS,
                    payload: res.data
                })
                resolve(res.data)
            })
            .catch(err => {
                //dispatch(returnErrors(err.response.data, err.response.status, 'GET_PRODUCT_FAIL'))
                // dispatch({
                //     type: GET_PRODUCT_FAIL
                // })
                reject(err)
            })
    })
}