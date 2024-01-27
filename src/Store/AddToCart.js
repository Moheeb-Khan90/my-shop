import { createSlice } from "@reduxjs/toolkit"; 


const initialState = JSON.parse(sessionStorage.getItem('cart')) || [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart(state,action){
            state.push(action.payload)
            sessionStorage.setItem('cart',JSON.stringify(state))
        },
        removeCart(state, action){
            const updatedState = state.filter((items) => items.size !== action.payload)
            sessionStorage.setItem('cart', JSON.stringify(updatedState));
            return updatedState
        }
    }

})
export const {addCart,removeCart} = cartSlice.actions
export default cartSlice.reducer;