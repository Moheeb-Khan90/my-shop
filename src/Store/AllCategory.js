import { createSlice } from '@reduxjs/toolkit'

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

export const allCategorySlice = createSlice({
    name: 'allCategoryProduct',
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers: {
        setAllCategoryProduct(state, actions) {
            state.dataAllCategory = actions.payload

        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
})


export const { setAllCategoryProduct, setStatus  } = allCategorySlice.actions

export default allCategorySlice.reducer

//Thunk
export const fetchAllCategoryProduct = () => {
    return async function fetchCategoryProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await fetch("https://fakestoreapi.com/products/categories")
            const dataAllCategory = await res.json()
            dispatch(setAllCategoryProduct(dataAllCategory))
            dispatch(setStatus(STATUS.IDLE));
        } catch (error) {
            
            dispatch(setStatus(STATUS.ERROR));
        }

    }
}