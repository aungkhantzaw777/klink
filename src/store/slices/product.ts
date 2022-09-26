import { createSlice, PayloadAction } from '@reduxjs/toolkit'
 
interface productProp {
    name:string,
    price:number
}
type State = {
    products : productProp[]
}
 
const initialState: State = {
    products: []
}
 
const productSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setProduct(state: State, action: PayloadAction<productProp[]>){
            state.products = action.payload
        }
    }
})
 
export const {
    setProduct, 
    
} = productSlice.actions
 
export default productSlice