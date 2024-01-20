import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../ProductSlice'
import singleproductReducer from '../singleProductSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
    singleProduct:singleproductReducer
  },
})