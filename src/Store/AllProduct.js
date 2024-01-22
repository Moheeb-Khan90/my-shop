import { createSlice } from '@reduxjs/toolkit'

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

export const allProductSlice = createSlice({
    name: 'allProduct',
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers: {
        setAllProduct(state, actions) {
            state.data = actions.payload

        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
})


export const { setAllProduct, setStatus  } = allProductSlice.actions

export default allProductSlice.reducer

//Thunk
export const fetchAllProduct = () => {
    return async function fetchAllProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            dispatch(setAllProduct(data))
            dispatch(setStatus(STATUS.IDLE));
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR));
        }

    }
}