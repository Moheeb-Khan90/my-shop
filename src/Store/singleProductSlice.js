import { createSlice } from '@reduxjs/toolkit'

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

export const SingleproductSlice = createSlice({
    name: 'singleProduct',
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


export const { setProduct, setStatus  } = SingleproductSlice.actions

export default SingleproductSlice.reducer

//Thunk
export const fetchSingleProduct = (id) => {
    return async function fetchSingleProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            dispatch(setProduct(data))
            dispatch(setStatus(STATUS.IDLE));
        } catch (error) {
            
            dispatch(setStatus(STATUS.ERROR));
        }

    }
}