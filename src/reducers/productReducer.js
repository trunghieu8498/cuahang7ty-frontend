import {
    GET_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL, UPDATE_INVENTORY_NUMBER_SUCCESS, UPDATE_INVENTORY_NUMBER_FAIL
} from '../constants';

const initialState = {
    lastProduct: null,
    productList: []
    // promo: null,
    // promos: [], // hien thi tat ca promo
    // loading: false,
    // userPromos: [], //hien thi promo cua user => can chinh lai ko nen de o day
    // promoSelected: null,
    // promosClient: [] //hien thi danh sach promo con ton tai va co so luong con lai tren 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                lastProduct: action.payload
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                productList: action.payload
            }
        case UPDATE_INVENTORY_NUMBER_SUCCESS:
        case UPDATE_INVENTORY_NUMBER_FAIL:
        case GET_ALL_PRODUCTS_FAIL:
            return {
                ...state,
            }
        // case GET_PROMOS_BY_ADMIN_FAIL:
        //     return {
        //         ...state,
        //         loading: false
        //     }
        // case UPDATE_PROMO_FAIL:
        // case GET_PROMO_FAIL:
        // case CREATE_PROMO_FAIL:
        // case DELETE_PROMO:
        // case DELETE_PROMO_FAIL:
        //     return {
        //         ...state
        //     }
        // case PROMOS_LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        // case CREATE_PROMO:
        //     return {
        //         ...state,
        //         promo: action.payload,
        //     }
        // case GET_PROMO:
        //     return {
        //         ...state,
        //         promo: action.payload
        //     }
        // case UPDATE_PROMO:
        //     return {
        //         ...state,
        //         promo: action.payload
        //     }
        // case GET_PROMOS_OF_USER:
        //     return {
        //         ...state,
        //         userPromos: action.payload
        //     }
        // case GET_PROMOS_OF_USER_FAIL:
        //     return {
        //         ...state
        //     }
        // case SET_PROMO_SELECTED:
        //     return {
        //         ...state,
        //         promoSelected: action.payload
        //     }
        // case TAKE_PROMO:
        //     return {
        //         ...state
        //     }
        // case TAKE_PROMO_FAIL:
        //     return {
        //         ...state
        //     }
        // case GET_PROMOS_BY_USER:
        //     return {
        //         ...state,
        //         promosClient: action.payload
        //     }
        // case GET_PROMOS_BY_USER_FAIL:
        //     return {
        //         ...state
        //     }
        default:
            return state
    }
}