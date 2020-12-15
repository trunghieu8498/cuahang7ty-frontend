/* eslint-disable no-undef */
import axios from 'axios';
import {
    GET_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL, ADD_NEW_PRODUCT_SUCCESS, ADD_NEW_PRODUCT_FAIL,
} from '../constants';
// import { returnErrors } from './errorAction';

const host_url = process.env.REACT_APP_HOST_URL;
const local_url = process.env.REACT_APP_LOCAL_URL;

export const getProduct = (_id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if (_id !== '') {
            axios.get(`http://localhost:9000/api/product/${_id}`, null, config)
                .then(res => {
                    console.log(res.data)
                    dispatch({
                        type: GET_PRODUCT_SUCCESS,
                        payload: res.data
                    })
                    resolve(res.data)
                })
                .catch(err => {
                    console.log(err)
                    //dispatch(returnErrors(err.response.data, err.response.status, 'GET_PRODUCT_FAIL'))
                    // dispatch({
                    //     type: GET_PRODUCT_FAIL
                    // })
                    reject(err)
                })
        }
        else reject()
    })
}

export const addNewProduct = (barcode, productName, originPrice, retailPrice) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = {
        barcode :  barcode,
        productName:  productName,
        originPrice: originPrice,
        retailPrice: retailPrice
    }

    return new Promise((resolve, reject) => {
        axios.post('http://localhost:9000/api/product/add', body, config)
        .then(res => {
            dispatch({
                type:  ADD_NEW_PRODUCT_SUCCESS,
                payload: res.data
            })
            console.log(res.data)
            resolve(res.data)
        })
        .catch(err => {
            dispatch({
                type: ADD_NEW_PRODUCT_FAIL,
            })
            console.log(err)
            reject(err)
        })
    })
}

export const getAllProduct = () => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:9000/api/product', null, config)
            .then(res => {
                dispatch({
                    type: GET_ALL_PRODUCTS_SUCCESS,
                    payload: res.data
                })
                resolve(res.data)
            })
            .catch(err => {
                dispatch({
                    type: GET_ALL_PRODUCTS_FAIL
                })
                console.log(err)
                reject(err)
            })
    })
}