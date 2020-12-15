/* eslint-disable no-undef */
import axios from 'axios';
import {
    ADD_TO_TEMP_BILL_SUCCESS,
    CHANGE_QUANTITY_IN_TEMP_BILL_SUCCESS,
    ADD_BILL_SUCCESS,
    ADD_BILL_FAIL,
    UPDATE_INVENTORY_NUMBER_FAIL,
    UPDATE_INVENTORY_NUMBER_SUCCESS,
    PROCESSING_PAYMENT_SUCCESS,
} from '../constants';
// import { returnErrors } from './errorAction';

const host_url = process.env.REACT_APP_HOST_URL;
const local_url = process.env.REACT_APP_LOCAL_URL;

export const addToTempBill = (_Product, _TempBillDetails) => (dispatch) => {
    const newTempBillDetail = {
        Product: _Product,
        retailPrice: _Product.retailPrice,
        quantity: 1
    }
    const dup = _TempBillDetails.find(tempBillDetail => {
        return tempBillDetail.Product._id === _Product._id
    })
    if (dup === undefined)
        _TempBillDetails = [..._TempBillDetails, newTempBillDetail]
    else
        _TempBillDetails[_TempBillDetails.indexOf(dup)].quantity++
    dispatch({
        type: ADD_TO_TEMP_BILL_SUCCESS,
        payload: _TempBillDetails
    })
}

export const changeQuantityInTempBill = (_quantity, _product_index, _TempBillDetails) => (dispatch) => {
    _TempBillDetails[_product_index].quantity = _quantity
    dispatch({
        type: CHANGE_QUANTITY_IN_TEMP_BILL_SUCCESS,
        payload: _TempBillDetails
    })
}

export const addBill = (_TempBillDetails) => async (dispatch) => {
    return new Promise( async (resolve, reject) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let data = []
        data = _TempBillDetails.forEach(billDetail => {
            const temp = {
                productId: billDetail.Product._id,
                retailPrice: billDetail.retailPrice,
                quantity: billDetail.quantity
            }
            data = [...data, temp]
        })
        const bill = {
            date: new Date(),
            BillDetails: await data,
        }
        const body = JSON.stringify(bill)
        axios.post(`${local_url || host_url}/api/bill/add`, body, config)
            .then(res => {
                dispatch({
                    type: ADD_BILL_SUCCESS,
                    payload: res.data
                })
                resolve()
            })
            .catch(err => {
                dispatch({
                    type: ADD_BILL_FAIL
                })
                reject()
            })
    })
}

export const updateInventoryNumber = (_TempBillDetails) => async (dispatch) => {
    return new Promise((resolve, reject) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(1)

        _TempBillDetails.map(async _BillDetail => {
            const BillDetail = {
                productId: _BillDetail.Product._id,
                quantity: _BillDetail.quantity
            }
            const body = JSON.stringify(BillDetail)
            await axios.post(`${local_url || host_url}/api/product/update/inventorynumber`, body, config)
                .then(res => {
                    console.log(1.5)
                    dispatch({
                        type: UPDATE_INVENTORY_NUMBER_SUCCESS
                    })
                    resolve()
                })
                .catch(err => {
                    dispatch({
                        type: UPDATE_INVENTORY_NUMBER_FAIL
                    })
                    reject()
                })
        })
    })
}

export const clearTempBillDetails = () => (dispatch) => {
    dispatch({
        type: PROCESSING_PAYMENT_SUCCESS
    })
}