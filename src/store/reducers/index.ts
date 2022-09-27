import { combineReducers } from '@reduxjs/toolkit'

import productSlice from '../slices/product'
import cartSlice from '../slices/cartItems'

const rootReducer = combineReducers({
    productRduc: productSlice.reducer,
    cartRduc: cartSlice.reducer
})
 
export type AppState = ReturnType<typeof rootReducer>
 
export default rootReducer