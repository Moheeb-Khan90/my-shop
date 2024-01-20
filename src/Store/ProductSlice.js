import { createSlice } from '@reduxjs/toolkit'

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers: {
        setProduct(state, actions) {
            state.data = actions.payload

        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
})


export const { setProduct, setStatus  } = productSlice.actions

export default productSlice.reducer

//Thunk
export const fetchProduct = () => {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await fetch("https://fakestoreapi.com/products?limit=18")
            const data = await res.json()
            dispatch(setProduct(data))
            dispatch(setStatus(STATUS.IDLE));
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR));
        }

    }
}