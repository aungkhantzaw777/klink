import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductProp } from '../../utils/interface/root'


type State = {
    products: ProductProp[]
}

const initialState: State = {
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct(state: State, action: PayloadAction<ProductProp[]>) {
            state.products = action.payload
        }
    }
})

export const {
    setProduct,
} = productSlice.actions

export default productSlice