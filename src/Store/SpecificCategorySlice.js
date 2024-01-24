import { createSlice } from '@reduxjs/toolkit'

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

export const SpecificCategorySlice = createSlice({
    name: 'SpecificCategory',
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers: {
        setSpecificCategory(state, actions) {
            state.data = actions.payload

        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
})


export const { setSpecificCategory, setStatus  } = SpecificCategorySlice.actions

export default SpecificCategorySlice.reducer

//Thunk
export const fetchSpecificCategory = (ct) => {
    return async function fetchSpecificCategoryThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await fetch(`https://fakestoreapi.com/products/category/${ct}`)
            const data = await res.json()
          
            dispatch(setSpecificCategory(data))
            dispatch(setStatus(STATUS.IDLE));
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR));
        }

    }
}