import { combineReducers } from 'redux'

import ProductReducer from './productReducer'
import BillReducer from './billReducer'

export default combineReducers({
    productReducer: ProductReducer,
    billReducer: BillReducer
})