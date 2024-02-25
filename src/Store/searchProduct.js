import { createSlice } from "@reduxjs/toolkit";

const searchProductSlice = createSlice({
    name:'search',
    initialState:'',
    reducers:{
        searchInputValue(_, action){
            return action.payload
        }
    }
})
export const {searchInputValue} = searchProductSlice.actions
export default searchProductSlice.reducer