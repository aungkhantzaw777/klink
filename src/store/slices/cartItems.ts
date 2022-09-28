import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cartItemProp } from '../../utils/interface/root'

type State = {
    cartItems: cartItemProp[]
}

const initialState: State = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        setCartItems(state: State, action: PayloadAction<cartItemProp[]>) {
            // state.cartItems = action.payload
            state.cartItems = [...state.cartItems, ...action.payload]
        },
        removeCart(state: State, action: PayloadAction<{ id: number }>) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },
        clearCart(state: State) {
            state.cartItems = []
        },
        increateCartItemQty(state: State, action: PayloadAction<{ id: number, count: number }>) {

            state.cartItems = state.cartItems.map(item => {
                // let quantity = item.quantity + action.payload.count
                let quantity = item.quantity
                if (item.id === action.payload.id) {
                    quantity = quantity + action.payload.count
                }
                return { ...item, quantity }
            })

        },
        decreateCartItemQty(state: State, action: PayloadAction<{ id: number, count: number }>) {
            state.cartItems = state.cartItems.map(item => {
                let quantity = item.quantity
                if (item.id === action.payload.id && item.quantity > 1) {
                    quantity = quantity - action.payload.count
                }
                return { ...item, quantity }
            })
        },
    }
})

export const {
    setCartItems,
    removeCart,
    increateCartItemQty,
    decreateCartItemQty,
    clearCart
} = cartSlice.actions

export default cartSlice