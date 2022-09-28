import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryProp } from '../../utils/interface/root'


type State = {
    categories: CategoryProp[]
}

const initialState: State = {
    categories: []
}

const categorySlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategory(state: State, action: PayloadAction<CategoryProp[]>) {
            state.categories = action.payload
        }
    }
})

export const {
    setCategory,
} = categorySlice.actions

export default categorySlice