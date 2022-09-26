import { combineReducers } from '@reduxjs/toolkit'

import productSlice from '../slices/product'

const rootReducer = combineReducers({
    productRduc: productSlice.reducer
})
 
export type AppState = ReturnType<typeof rootReducer>
 
export default rootReducer