import { combineReducers } from '@reduxjs/toolkit'

import productSlice from '../slices/product'
import cartSlice from '../slices/cartItems'
import categorySlice from '../slices/category'

const rootReducer = combineReducers({
    productRduc: productSlice.reducer,
    cartRduc: cartSlice.reducer,
    categoryRduc: categorySlice.reducer
})
 
export type AppState = ReturnType<typeof rootReducer>
 
export default rootReducer