import {
    ADD_TO_TEMP_BILL_SUCCESS, CHANGE_QUANTITY_IN_TEMP_BILL_SUCCESS, ADD_BILL_SUCCESS, ADD_BILL_FAIL, PROCESSING_PAYMENT_SUCCESS,
} from '../constants';

const initialState = {
    TempBillDetails: [],
    lastBill: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_TEMP_BILL_SUCCESS:
            return {
                ...state,
                TempBillDetails: [...action.payload]
            }
        case CHANGE_QUANTITY_IN_TEMP_BILL_SUCCESS:
            return {
                ...state,
                TempBillDetails: [...action.payload]
            }
        case ADD_BILL_SUCCESS:
            return {
                ...state,
                lastBill: action.payload,
            }
        case PROCESSING_PAYMENT_SUCCESS:
            return {
                ...state,
                TempBillDetails: []
            }
        case ADD_BILL_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}